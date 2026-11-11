const {test, expect} = require('@playwright/test'); //require is like import in java


test('First Context Browser Playwright test', async({browser})=> // test('title','function name') 
// this javascript is non syncronos so if u put await only it will go step by step so to use await we need to mention async 
// in the function
// browser is a global fixture where we can use the function of it from playwright library.
{
 const Context = await browser.newContext();// const is like int and string context is name of the method 
 // newcontext opens a new browser

 const page = await Context.newPage();// new page opens a fresh page
 
 await page.goto("www.rahulshettyacademy.com");//goto navigates to specific url

});

test.only('Page Playwright test', async({page})=> // when u give page fixyure in the test method it will diectly give u a fresh page with url needed
// you can skip newcontext or new page
//test only means out 50 test methods the mentioned method only will run
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//get title assertion
console.log(await page.title());// we are using console.log to print it in output
//to compare title if we have landed in expected page
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
//css locator
const userName = page.locator("#username");
const signIn = page.locator("[value='Sign In']");
const cardTitles = page.locator(".card-title a");
const documentLink = page.locator("[href*=job-ready]");
 await userName.fill("Aishwarya");
await page.locator("[type='password']").fill("Learning@830$3mK2");
 await signIn.click();
console.log (await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect");//tocontaintext is to check whether the expected text is present

//giving correct details
await userName.fill("");// to remove the existing name or toclear the text box
await userName.fill("rahulshettyacademy");
await page.locator("[type='password']").fill("Learning@830$3mK2");
const dropdown = await page.locator("[data-style='btn-info']");
await dropdown.selectOption("consult");
await page.pause();
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
await expect(page.locator(".radiotextsty").last()).toBeChecked();//is like is element present
await  page.locator("#terms").click();
await expect(page.locator("#terms")).toBeChecked();
await  page.locator("#terms").uncheck();
//expect (await page.locator("#terms").toBeChecked()).toBeFalsy();
//await expect(locator).toHaveAttribute() -- to check an attribute value
await expect(documentLink).toHaveAttribute("class","blinkingText");

await signIn.click();
//textcontent to get the content of the text like getText in selenium
console.log (await cardTitles.first().textContent()); //here we are using first to fetch the first value from 4 elements
console.log (await cardTitles.nth(2).textContent());//here we are using nth function to fetch the value that is stored in array order
const allTitles = await cardTitles.allTextContents();// allTextContents get the conents of all four card title names
console.log (await allTitles);

}

)
test.only('Child window handle',async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentLink = page.locator("[href*=job-ready]");
await page.locator(documentLink).click();

}
)