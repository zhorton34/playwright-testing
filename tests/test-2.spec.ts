import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('https://recorderecomm.clarkcountynv.gov/AcclaimWeb/Search/SearchTypeDocType');

	expect(true).toBe(true);
});
