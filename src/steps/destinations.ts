import { Given, Then } from '@cucumber/cucumber';
import page from '../support/pages/index.js'

Given(/^I navigate to events tab$/, async () => {
  await page.destinations.tabEvents.click();
  await page.destinations.headerEventsDelivery.waitForDisplayed();
});

Then(/^I check events delivered$/, async () => {
  await expect(page.destinations.textDelivered).toHaveText("0");
});

Then(/^I check events failed$/, async () => {
  await expect(page.destinations.textFailed).toHaveText("0");
});
