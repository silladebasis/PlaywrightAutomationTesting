import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

/*3 ways to save authentication state

1. By using codegen command - npx playwright codegen --save-storage=auth.json , then use the command npx playwright codegen --load-storage=auth.json https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. By using global setup
3. By using dependencies
*/
  
//First way - Codegen command
test('Using codegen command', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.getByRole('heading')).toContainText('Dashboard');
});

