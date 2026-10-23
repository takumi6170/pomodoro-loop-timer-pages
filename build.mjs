import fs from 'node:fs/promises';
import page from './page.js';
const base='/pomodoro-loop-timer-pages';
const env={PUBLIC_SUPPORT_EMAIL:process.env.PUBLIC_SUPPORT_EMAIL,PUBLIC_PUBLISHER_NAME:process.env.PUBLIC_PUBLISHER_NAME};
const target=(route,lang)=>`${base}${lang==='ja'?'/ja':''}${route==='/'?'/':route+'/'}`;
for(const lang of ['en','ja']) for(const route of ['/','/support','/privacy']) {
 const response=await page.fetch(new Request(`https://preview.invalid${route}?lang=${lang}`),env);
 if(!response.ok) throw new Error('Missing public contact configuration');
 let html=await response.text();
 for(const l of ['en','ja']) for(const r of ['/','/support','/privacy']) html=html.replaceAll(`href="${r}?lang=${l}"`,`href="${target(r,l)}"`);
 const dir=`_site/${lang==='ja'?'ja/':''}${route==='/'?'':route.slice(1)+'/'}`;
 await fs.mkdir(dir,{recursive:true});await fs.writeFile(`${dir}index.html`,html);
}
await fs.writeFile('_site/.nojekyll','');
console.log('Built six English/Japanese support and privacy pages.');
