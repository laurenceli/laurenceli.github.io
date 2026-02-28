import { test, expect } from '@playwright/test';

test.describe('Portfolio site', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page title is "Laurence Li"', async ({ page }) => {
    await expect(page).toHaveTitle('Laurence Li');
  });

  test('all section ids are present', async ({ page }) => {
    for (const id of ['hero', 'experience', 'projects', 'skills', 'education', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test('nav links are visible', async ({ page }) => {
    for (const label of ['Experience', 'Projects', 'Skills', 'Education', 'Contact']) {
      await expect(page.getByRole('link', { name: label })).toBeVisible();
    }
  });

  test('hero heading "Laurence Li." is visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Laurence Li.' })).toBeVisible();
  });

  test('clicking first card opens modal', async ({ page }) => {
    await page.locator('.card').first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('modal close button dismisses modal', async ({ page }) => {
    await page.locator('.card').first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.locator('.close-btn').click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('Escape key dismisses modal', async ({ page }) => {
    await page.locator('.card').first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('email link has correct mailto href', async ({ page }) => {
    const emailLink = page.locator('a[href="mailto:li.laurence55@gmail.com"]').first();
    await expect(emailLink).toBeAttached();
  });

  test('contact GitHub link points to correct URL', async ({ page }) => {
    const githubLinks = page.locator('#contact a[href="https://github.com/laurenceli"]');
    await expect(githubLinks.first()).toBeAttached();
  });

  test('footer "View Source" link is present', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'View Source' })).toBeVisible();
  });
});
