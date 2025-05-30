import { test as base } from "@playwright/test";
import { PlaywrightHomePage } from "../pages/playwrightHomePage";
import { PlaywrightDocsPage } from "../pages/playwrightDocsPage";

type Fixture = {
    playwrightHomePage: PlaywrightHomePage,
    playwrightDocsPage: PlaywrightDocsPage,
}

export const test = base.extend<Fixture>({
    playwrightHomePage: async ({ page }, use) => {
        await use(new PlaywrightHomePage(page))
    },

    playwrightDocsPage: async ({ page }, use) => {
        await use(new PlaywrightDocsPage(page))
    }
})