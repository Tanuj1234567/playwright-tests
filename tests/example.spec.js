const {test, expect} = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Swag Labs');
 page.locator('#user-name').fill('standard_user');
 page.locator('#password').fill('secret_sauce');
 page.locator('#login-button').click();
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
 await page.locator('div.inventory_item_name').first().click(); 
 page.pause();
});


