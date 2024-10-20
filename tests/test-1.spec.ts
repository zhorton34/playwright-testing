import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://recorderecomm.clarkcountynv.gov/AcclaimWeb/Search/SearchTypeDocType');

  expect(await page.title()).toBe('Search');
});
