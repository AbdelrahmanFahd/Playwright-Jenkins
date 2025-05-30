import { test } from './Fixture/Fixture'

test('Fixture Test', async ({ playwrightHomePage, playwrightDocsPage }) => {
  await playwrightHomePage.goto()
  await playwrightHomePage.clickGetStartedButton()
  await playwrightDocsPage.assertPageTitleIsVisible()
})