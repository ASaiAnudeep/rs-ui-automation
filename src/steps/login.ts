import { Given } from '@cucumber/cucumber';
import page from '../support/pages/index.js'

Given('I login to application', async () => {
  await browser.url(browser.options.baseUrl || '');
  await page.login.inputUsername.setValue(process.env.RS_EMAIL || '');
  await page.login.inputPassword.setValue(process.env.RS_PASSWORD || '');
  await page.login.btnSubmit.click();
  await page.login.headerExtraLayer.waitForDisplayed();
  await page.login.linkIDoLater.click();
  await page.login.headerEnable2FA.waitForDisplayed();
  await page.login.btnGoToDashboard.click();
  await page.connections.headerConnections.waitForDisplayed();
});