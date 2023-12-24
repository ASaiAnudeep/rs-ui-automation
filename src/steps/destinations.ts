import { Given, Then } from '@cucumber/cucumber';
import page from '../support/pages/index.js'

Given(/^I navigate to events tab$/, async () => {
  await page.destinations.tabEvents.click();
  await page.destinations.headerEventsDelivery.waitForDisplayed();
});

Then(/^I expect "([^"]*)?" events to be delivered$/, async (expected: string) => {
  await expect(page.destinations.textDelivered).toHaveText(expected);
});

Then(/^I expect "([^"]*)?" events to be failed$/, async (expected: string) => {
  await expect(page.destinations.textFailed).toHaveText(expected);
});
