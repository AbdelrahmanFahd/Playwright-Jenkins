import { expect, test } from '@playwright/test'

test('POManger Test', async () => {
  // await page.goto('https://the-internet.herokuapp.com')

  // console.log(await page.locator("#content h1").textContent())
  // expect.soft(await page.locator("#content h1").textContent()).toBe('Welcome to the-internet')
  // await page.screenshot({ path: 'screenshot.png' })
  // expect(await page.screenshot()).toMatchSnapshot('screenshot/screenshot.png')
  // expect(await page.screenshot()).toMatchSnapshot(['../', 'screenshot', 'screenshot.png'])
  // await expect(page).toHaveScreenshot("errorPage\\screenshot.png");

  const url = new URL('https://api.example2.com/search')
  url.searchParams.set('query', 'Playwright')
  console.log(url.toString())
})