import { ModelPage } from "@rgi/playwright-core";
import { Page } from "playwright-core";

export class GroupamaFirstPage extends ModelPage {
    // Selettori CSS per i campi e il bottone della pagina
    private static readonly issInputSelector: string = '#iss';  // Selettore per il campo ISS
    private static readonly subInputSelector: string = '#sub';  // Selettore per il campo SUB
    private static readonly audInputSelector: string = '#aud';  // Selettore per il campo AUD
    private static readonly submitButtonSelector: string = 'button.btn.btn-primary.form-button';  // Selettore per il bottone di submit

    constructor(page: Page) {
        super(page);
    }

    static async createInstance(page: Page): Promise<GroupamaFirstPage> {
        const instance = new GroupamaFirstPage(page);
        await instance.init();
        return instance;
    }

    async init(): Promise<void> {
        // Attende che tutti gli elementi della pagina siano visibili
        await Promise.all([
            this.page.waitForSelector(GroupamaFirstPage.issInputSelector),
            this.page.waitForSelector(GroupamaFirstPage.subInputSelector),
            this.page.waitForSelector(GroupamaFirstPage.audInputSelector)
        ]);
    }

    async fillIssInput(value: string): Promise<void> {
        await this.page.locator(GroupamaFirstPage.issInputSelector).fill(value);  // Riempie il campo ISS
    }

    async fillSubInput(value: string): Promise<void> {
        await this.page.locator(GroupamaFirstPage.subInputSelector).fill(value);  // Riempie il campo SUB
    }

    async fillAudInput(value: string): Promise<void> {
        await this.page.locator(GroupamaFirstPage.audInputSelector).fill(value);  // Riempie il campo AUD
    }

    async clickSubmitButton(): Promise<void> {
        await this.page.locator(GroupamaFirstPage.submitButtonSelector).click();  // Clicca il bottone di submit
    }
}