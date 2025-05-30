import { Locator, Page } from "@playwright/test";

export class PlaywrightHomePage {
    readonly page: Page;
    readonly getStartedButton: Locator

    constructor(page: any) {
        console.log('PlaywrightHome constructor called');
        this.page = page;
        this.getStartedButton = this.page.getByRole('link', { name: 'Get started' });
    }

    async goto() {
        await this.page.goto('https://playwright.dev/');
    }

    async clickGetStartedButton() {
        return await this.getStartedButton.click();
    }

}