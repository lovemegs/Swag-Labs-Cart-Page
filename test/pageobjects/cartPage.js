import { $, browser } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginPage from './login'


class CartPage {
    get addToCartBtn () {
        return $('button#add-to-cart-sauce-labs-backpack')
    }
    get cartIconNumber () {
        return $('span.shopping_cart_badge')
    }
    get cartIcon () {
        return $('a.shopping_cart_link')
    }
    get checkoutBtn () {
        return $('button#checkout')
    }
    

    async addItemToCart () {
        await this.addToCartBtn.click();
    }
    async goToCart () {
        await this.cartIcon.click();
    }

    async cartFunctions () {
        await this.addItemToCart();
        await expect(this.cartIconNumber).toBeExisting();
        // await browser.pause(3000);

        await this.goToCart();
        await expect(this.checkoutBtn).toBeExisting();
        // await browser.pause(3000);
    }
}

export default new CartPage();