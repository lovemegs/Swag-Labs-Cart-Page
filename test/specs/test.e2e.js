import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.js'
import HomePage from '../pageobjects/home.page.js'
import cartPage from '../pageobjects/cartPage.js'

describe('Cart page', () => {
        it('should add items to cart and test all the buttons on cart page', async () => {
            await LoginPage.open();
           
            await LoginPage.login('standard_user', 'secret_sauce');
            await expect(HomePage.shoppingCartLink).toBeExisting();

            // await cartPage.addItemToCart();
            // await expect(cartPage.cartIconNumber).toBeExisting();
            await cartPage.cartFunctions();
        })
})