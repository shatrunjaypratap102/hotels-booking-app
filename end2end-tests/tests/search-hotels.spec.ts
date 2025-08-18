import { test, expect } from '@playwright/test';
import path from "path"
const UI_URL="http://localhost:5173/"

test.beforeEach(async({page})=>{
    await page.goto(UI_URL);
    await page.getByRole("link",{name:"Sign In"}).click();
    await expect(page.getByRole("heading",{name:"Sign In"})).toBeVisible();
    await page.locator("[name=email]").fill("1@11.com");
    await page.locator("[name=password]").fill("password123");
    
    await page.getByRole("button",{name:"Login"}).click();
    
    await expect(page.getByText("Sign in Successfull")).toBeVisible();
});

test("should show hotel search results",async({page})=>{
    await page.goto(UI_URL);
    await page.getByPlaceholder("Where are you going?").fill("Chennai");
    await page.getByRole("button",{name :"Search"}).click();
    await expect(page.getByText("Hotels found in Chennai")).toBeVisible();
    await expect(page.getByText("Test Hotel")).toBeVisible();
})