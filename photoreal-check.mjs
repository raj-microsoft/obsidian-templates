import {chromium} from 'playwright-core';
import fs from 'node:fs';
const base=process.argv[2]||'http://127.0.0.1:4211/obsidian-templates/';
const browser=await chromium.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true});
const page=await browser.newPage();const errors=[];const bad=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)bad.push({url:r.url(),status:r.status()})});
await page.goto(base,{waitUntil:'networkidle'});await page.waitForTimeout(4000);
for(const img of await page.locator('img[loading=lazy]').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());}
const result=await page.evaluate(()=>({images:[...document.images].map(i=>({src:i.currentSrc,width:i.naturalWidth,alt:i.alt})),video:[...document.querySelectorAll('video')].map(v=>({src:v.currentSrc,duration:v.duration,playing:!v.paused,ready:v.readyState})),links:[...new Set([...document.querySelectorAll('a[href^="http"]')].map(a=>a.href))]}));
const links=[];for(const url of result.links){const r=await page.request.get(url);links.push({url,status:r.status()});}
const html=await page.content();const styles=await page.locator('link[rel=stylesheet]').evaluateAll(async links=>(await Promise.all(links.map(async l=>(await fetch(l.href)).text()))).join('\n'));
fs.writeFileSync('.impeccable/review/detector.html',html.replace(/<link[^>]*rel="stylesheet"[^>]*>/g,'')+'<style>'+styles+'</style>');
fs.writeFileSync('.impeccable/review/photoreal-check.json',JSON.stringify({base,...result,links,errors,bad},null,2));console.log(JSON.stringify({base,images:result.images.length,video:result.video,links,errors,bad},null,2));await browser.close();
