const {test , expect}= require ("@playwright/test");
// testing my skills
//requirement:
//Goto the url, 1.Login to the page, check if that page is loaded properly, 
test ("Rough work", async ({page})=>
    {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const Title  = page.locator(".login-title");
await expect (Title).toHaveText("Log in");
console.log(await Title.textContent());


});