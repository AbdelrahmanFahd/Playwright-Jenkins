import { PlaywrightHomePage } from "./playwrightHomePage";
import { PlaywrightDocsPage } from "./playwrightDocsPage";
import { Page } from "@playwright/test";

export class POManager {

    readonly page: Page;
    readonly playwrightHomePage: PlaywrightHomePage;
    readonly playwrightDocsPage: PlaywrightDocsPage;

    constructor(page: any) {
        this.page = page;
        this.playwrightHomePage = new PlaywrightHomePage(this.page);
        this.playwrightDocsPage = new PlaywrightDocsPage(this.page);
    }

    getPlaywrightHomePage() {
        return this.playwrightHomePage;
    }

    getPlaywrightDocsPage() {
        return this.playwrightDocsPage;
    }
}