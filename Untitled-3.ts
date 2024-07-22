import { chromium, Browser, Page } from 'playwright';
import { ModelPage } from "@rgi/playwright-core";

export class GroupamaSalesNetworkPage extends ModelPage {
    // Selettori CSS per gli elementi della pagina
    private static readonly salesNetworkDropdownSelector: string = 'select[name="nodo"]'; // Selettore per il dropdown delle reti di vendita
    private static readonly salesNetworkOptionSelector: string = 'option'; // Selettore per le opzioni del dropdown

    constructor(page: Page) {
        super(page);
    }

    static async createInstance(page: Page): Promise<GroupamaSalesNetworkPage> {
        const instance = new GroupamaSalesNetworkPage(page);
        await instance.init();
        return instance;
    }

    async init(): Promise<void> {
        // Attendi che il dropdown delle reti di vendita sia visibile
        await this.page.waitForSelector(GroupamaSalesNetworkPage.salesNetworkDropdownSelector);
    }

    async selectSalesNetwork(network: string): Promise<void> {
        // Apri il dropdown e seleziona l'opzione
        const dropdown = this.page.locator(GroupamaSalesNetworkPage.salesNetworkDropdownSelector);
        await dropdown.click(); // Apri il dropdown

        // Attendi che le opzioni siano disponibili e seleziona l'opzione desiderata
        const option = this.page.locator(`option[label="${network}"]`);
        await option.waitFor({ state: 'visible' }); // Assicurati che l'opzione sia visibile prima di cliccare
        await option.click(); // Seleziona l'opzione
    }
}

// Esempio di utilizzo
(async () => {
    const browser: Browser = await chromium.launch({ headless: false }); // Inizializza il browser Playwright
    const page: Page = await browser.newPage(); // Inizializza la pagina

    await page.goto('URL_DELLA_TUA_PAGINA'); // Inserisci l'URL della tua pagina

    const salesNetworkPage = await GroupamaSalesNetworkPage.createInstance(page);
    await salesNetworkPage.selectSalesNetwork("GROUPAMA ASSICURAZIONI");

    await browser.close(); // Chiudi il browser
})();