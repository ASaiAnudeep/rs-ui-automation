import { Given, Then } from '@cucumber/cucumber';
import page from '../support/pages/index.js'

Given(/^I navigate to overview tab$/, async () => {
  await page.sources.tabOverview.click();
  await page.sources.headerEventsIngested.waitForDisplayed();
});

Given(/^I add an existing destination "([^"]*)?"$/, async (name) => {
  await page.sources.btnAddDestination.moveTo();
  await page.sources.btnUseExistingDestination.moveTo();
  await page.sources.btnUseExistingDestination.click();
  await page.sources.headerConnectExistingDestination.waitForDisplayed();
  await page.sources.rowDestination(name).click();
  await page.sources.btnContinue.click();
  await page.sources.headerConnectionSettings.waitForDisplayed();
  await page.sources.btnContinue.click();
  await page.sources.alertConnectionSuccessfully.waitForDisplayed();
});

Then(/^I disconnect "([^"]*)?" destination$/, async (name) => {
  await page.sources.rowDestinationOptions().click();
  await page.sources.btnDisconnectDestination.click();
  await page.sources.btnConfirm.click();
  await page.sources.alertConnectionRemovedSuccessfully.click();
});