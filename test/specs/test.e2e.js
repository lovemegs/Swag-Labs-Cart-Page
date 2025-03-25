import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import HomePage from '../pageobjects/home.page.js'
import cartPage from '../pageobjects/cartPage.js'

describe('My Hamburger Application', () => {
        it('should open the hamburger menu and click through all the options', async () => {
            await LoginPage.open();
           
            await LoginPage.login('standard_user', 'secret_sauce');
            await expect(HomePage.shoppingCartLink).toBeExisting();

            // await cartPage.addItemToCart();
            // await expect(cartPage.cartIconNumber).toBeExisting();
            await cartPage.cartFunctions();
        })
})