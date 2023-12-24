import { Given } from '@cucumber/cucumber';
import page from '../support/pages/index.js'

Given(/^I select "([^"]*)?" source$/, async (name: string) => {
  await page.connections.headerSource(name).click();
  await page.sources.headerSource(name).waitForDisplayed();
});