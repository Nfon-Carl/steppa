import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

const url = process.argv[3] || 'http://localhost:3000';
const selector = process.argv[2] || 'section';

await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

const el = await page.$(selector);
if (el) {
  await el.screenshot({ path: './temporary screenshots/section-capture.png' });
  console.log('Saved section-capture.png');
} else {
  console.log('Element not found:', selector);
}
await browser.close();
