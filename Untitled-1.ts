import { Given, Then } from "@cucumber/cucumber";
import { OurWorld } from "@rgi/playwright-cucumber-runner-lib";
import { GroupamaFirstPage } from "../models/Untitled-2";
import { GroupamaSalesNetworkPage } from "../models/Untitled-3";

Given("I log in groupama first page with user {string}", async function (this: OurWorld, username: string) {
    // Naviga alla pagina di login
    await this.page.goto('https://migint-groupamaportal.adservice.lan/pass/res2/testLogin/login-generate-jwt.html');
    
    const groupamaFirstPage = await GroupamaFirstPage.createInstance(this.page);
    await groupamaFirstPage.fillIssInput("www.rgigroup.com");
    await groupamaFirstPage.fillSubInput(username);
    await groupamaFirstPage.fillAudInput("PassPortal");
    await groupamaFirstPage.clickSubmitButton();
});

Then('I select the groupama sales network {string}', async function (this: OurWorld, network: string) {
    const groupamaSalesNetworkPage = await GroupamaSalesNetworkPage.createInstance(this.page);
    await groupamaSalesNetworkPage.selectSalesNetwork(network);
});