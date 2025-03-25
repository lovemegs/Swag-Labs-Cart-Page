import { $, browser } from '@wdio/globals'
import { expect } from '@wdio/globals'


class CartPage {
    get addToCartBtn1 () {
        return $('button#add-to-cart-sauce-labs-backpack')
    }
    get addToCartBtn2 () {
        return $('button#add-to-cart-sauce-labs-bike-light')
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
    get removeItemBtn () {
        return $('button#remove-sauce-labs-backpack')
    }
    get continueShoppingBtn () {
        return $('button#continue-shopping')
    }
    get nameInputField () {
        return $('input#first-name')
    }
    

    async addItemToCart () {
        await this.addToCartBtn1.click();
        await this.addToCartBtn2.click();
    }
    async goToCart () {
        await this.cartIcon.click();
    }
    async removeItem () {
        await this.removeItemBtn.click();
    }
    async continueShopping () {
        await this.continueShoppingBtn.click();
    }
    async checkout () {
        await this.checkoutBtn.click();
    }

    async cartFunctions () {
        await this.addItemToCart();
        await expect(this.cartIconNumber).toBeExisting();
        await browser.pause(3000);

        await this.goToCart();
        await expect(this.checkoutBtn).toBeExisting();
        await browser.pause(3000);

        await this.removeItem();
        await browser.pause(3000);

        await this.continueShopping();
        await this.goToCart();
        await expect(this.checkoutBtn).toBeExisting();
        await browser.pause(3000)

        await this.checkout();
        await expect(this.nameInputField).toBeExisting();
        await browser.pause(3000);
    }
}

export default new CartPage();