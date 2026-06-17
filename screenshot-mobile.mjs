import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT_DIR = './temporary screenshots';

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const existing = fs.readdirSync(OUT_DIR).filter(f => f.startsWith('mobile-'));
const n = existing.length + 1;
const outFile = path.join(OUT_DIR, `mobile-${n}.png`);

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto(process.argv[2] || 'http://localhost:3001', {
  waitUntil: 'networkidle0',
  timeout: 30000,
});
await page.screenshot({ path: outFile, fullPage: true });
const h = await page.evaluate(() => document.body.scrollHeight);
await browser.close();
console.log(`Saved: ${outFile} (height: ${h}px)`);
