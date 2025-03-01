/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from '@playwright/test';

test.describe('Basic UI Rendering Tests', () => {
    // Test 1: Verify landing page renders properly
    test('should render landing page with logo', async ({ page }) => {
        await page.goto('http://localhost:3000/landing');

        const logo = page.getByText('LinkUp');
        await expect(logo).toBeVisible();
    });

    // Test 2: Verify login form renders properly
    test('should render login page with form elements', async ({ page }) => {
        await page.goto('http://localhost:3000/login');

        await expect(page.getByPlaceholder('Enter your username')).toBeVisible();
        await expect(page.getByPlaceholder('Enter your password')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    });

    // Test 3: Verify signup form renders properly
    test('should render signup page with form fields', async ({ page }) => {
        await page.goto('http://localhost:3000/signup');

        await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
        await expect(page.getByPlaceholder('Enter your full name')).toBeVisible();
        await expect(page.getByPlaceholder('Choose a username')).toBeVisible();
    });

    // Test 4: Verify landing page contains call-to-action buttons
    test('should render landing page with action buttons', async ({ page }) => {
        await page.goto('http://localhost:3000/landing');

        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    });

    // Test 5: Verify landing page navigation menu
    test('should render landing page navigation menu', async ({ page }) => {
        await page.goto('http://localhost:3000/landing');

        await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'App' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Download' })).toBeVisible();
    });

    // Test 6: Verify login page has link to signup
    test('should render login page with signup link', async ({ page }) => {
        await page.goto('http://localhost:3000/login');

        await expect(page.getByText('Don\'t have an account?')).toBeVisible();
        await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
    });

    // Test 7: Verify signup page has link to login
    test('should render signup page with login link', async ({ page }) => {
        await page.goto('http://localhost:3000/signup');

        await expect(page.getByText('Already have an account?')).toBeVisible();
        await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    });

    // Test 8: Verify landing page has feature section
    test('should render landing page feature section', async ({ page }) => {
        await page.goto('http://localhost:3000/landing');

        await expect(page.getByText('Connect with friends')).toBeVisible();
        await expect(page.getByText(/Share your thoughts/i)).toBeVisible();
    });

    // Test 9: Verify password field is masked on login page
    test('should render password field as masked input', async ({ page }) => {
        await page.goto('http://localhost:3000/login');

        const passwordField = page.getByPlaceholder('Enter your password');
        await expect(passwordField).toHaveAttribute('type', 'password');
    });

    // Test 10: Verify gender selection options on signup page
    test('should render gender selection on signup page', async ({ page }) => {
        await page.goto('http://localhost:3000/signup');

        await expect(page.getByLabel('Male')).toBeVisible();
        await expect(page.getByLabel('Female')).toBeVisible();
    });
});
