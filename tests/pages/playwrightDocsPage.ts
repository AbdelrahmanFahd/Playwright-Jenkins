import { expect, Locator, Page } from "@playwright/test";

export class PlaywrightDocsPage {
    readonly page: Page;
    readonly pageTitle: Locator

    constructor(page: any) {
        console.log('PlaywrightDocs constructor called');

        this.page = page;
        this.pageTitle = this.page.getByRole('heading', { name: 'Installation' });
    }

    async assertPageTitleIsVisible() {
        return await expect(this.pageTitle).toBeVisible();
    }
}