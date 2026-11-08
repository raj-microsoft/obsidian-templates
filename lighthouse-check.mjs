import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';
import fs from 'node:fs';
const url=process.argv[2]||'https://raj-microsoft.github.io/obsidian-templates/';
fs.mkdirSync('.impeccable/review',{recursive:true});
for(const mode of ['mobile','desktop']){
const chrome=await launch({chromePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',chromeFlags:['--headless=new','--disable-gpu','--no-first-run']});
try{
const flags={port:chrome.port,output:'json',logLevel:'error',onlyCategories:['performance','accessibility','best-practices'],...(mode==='desktop'?{preset:'desktop'}:{})};
const result=await lighthouse(url,flags);
fs.writeFileSync(`.impeccable/review/lighthouse-${mode}.json`,result.report);
const a=result.lhr.audits;
console.log(JSON.stringify({mode,url,performance:result.lhr.categories.performance.score,accessibility:result.lhr.categories.accessibility.score,bestPractices:result.lhr.categories['best-practices'].score,LCP:a['largest-contentful-paint'].numericValue,CLS:a['cumulative-layout-shift'].numericValue,FCP:a['first-contentful-paint'].numericValue,TBT:a['total-blocking-time'].numericValue,failures:Object.entries(a).filter(([k,v])=>v.score!==null&&v.score<1&&v.details?.type==='table').map(([k,v])=>({id:k,score:v.score,title:v.title}))},null,2));
}finally{await chrome.kill()}
}
