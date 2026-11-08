import {chromium} from 'playwright-core';
import fs from 'node:fs';
const base=process.argv[2]||'http://127.0.0.1:4211/obsidian-templates/';
const dir='.impeccable/review';fs.mkdirSync(dir,{recursive:true});
const browser=await chromium.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true});
const results=[];
for(const width of [1440,390]){
const page=await browser.newPage({viewport:{width,height:width===1440?1000:844},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(base,{waitUntil:'networkidle'});await page.waitForTimeout(3800);await page.evaluate(()=>document.fonts.ready);
const overflow=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
await page.screenshot({path:`${dir}/${width===1440?'desktop':'mobile'}-hero.png`});
await page.emulateMedia({reducedMotion:'reduce'});await page.reload({waitUntil:'networkidle'});
await page.screenshot({path:`${dir}/${width===1440?'desktop':'mobile'}.png`,fullPage:true});
await page.locator('.template-card').first().click();await page.locator('dialog').waitFor({state:'visible'});await page.screenshot({path:`${dir}/preview-${width}.png`});await page.keyboard.press('Escape');
if(await page.locator('dialog').isVisible())throw new Error('dialog failed to close');
for(let i=0;i<8;i++){const btn=page.locator(`#question-${i}`);if(await btn.getAttribute('aria-expanded')==='false')await btn.click();await page.locator(`#answer-${i}`).waitFor({state:'visible'});}
await page.getByRole('button',{name:'Explore Standard',exact:true}).click();if(!(await page.locator('#package-note').innerText()).includes('Standard selected'))throw new Error('pricing state failed');
if(width===390){await page.evaluate(()=>scrollTo(0,0));await page.getByRole('button',{name:'Toggle navigation'}).click();await page.locator('.nav-links a').first().click();}
results.push({width,overflow,errors,templates:await page.locator('.template-card').count(),faq:await page.locator('.faq-item').count(),reducedMotionLoader:await page.locator('.loader').count()});await page.close();
}
await browser.close();fs.writeFileSync(`${dir}/test-results.json`,JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
