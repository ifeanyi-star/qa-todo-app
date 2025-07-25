import {test, expect} from '@playwright/test'


test.describe('Todo App End-to-End', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000'); // assuming React runs on port 3000
  });

  test('User can login and see tasks', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('ifeanyi');
    await page.getByPlaceholder('Password').fill('1234');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Tasks')).toBeVisible();
  });

  test('User can add a task', async ({ page }) => {
    // Login first
    await page.getByPlaceholder('Username').fill('ifeanyi');
    await page.getByPlaceholder('Password').fill('1234');
    await page.getByRole('button', { name: 'Login' }).click();

    // Add task
    await page.getByPlaceholder('New Task').fill('Test Playwright Task');
    await page.getByRole('button', { name: 'Add Task' }).click();

    // Check it appeared
    await expect(page.getByText('Test Playwright Task')).toBeVisible();
  });

  test('User can edit a task', async ({ page }) => {
    // Login
    await page.getByPlaceholder('Username').fill('ifeanyi');
    await page.getByPlaceholder('Password').fill('1234');
    await page.getByRole('button', { name: 'Login' }).click();

    // Add task
    const newTask = 'Edit Me';
    await page.getByPlaceholder('New Task').fill(newTask);
    await page.getByRole('button', { name: 'Add Task' }).click();

    // Click edit
    await page.getByText(newTask).locator('..').getByRole('button', { name: 'Edit' }).click();
    const input = page.locator(`input[value="${newTask}"]`);
    await input.fill('Edited Task');
    await input.press('Enter');

    await expect(page.getByText('Edited Task')).toBeVisible();
  });

  test('User can delete a task', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('ifeanyi');
    await page.getByPlaceholder('Password').fill('1234');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByPlaceholder('New Task').fill('Delete Me');
    await page.getByRole('button', { name: 'Add Task' }).click();

    await page.getByText('Delete Me').locator('..').getByRole('button', { name: 'Delete' }).click();
    await expect(page.getByText('Delete Me')).not.toBeVisible();
  });
});
