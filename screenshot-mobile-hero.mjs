import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

const el = await page.$('section');
if (el) {
  await el.screenshot({ path: './temporary screenshots/mobile-hero.png' });
  console.log('Saved mobile-hero.png');
}
await browser.close();
