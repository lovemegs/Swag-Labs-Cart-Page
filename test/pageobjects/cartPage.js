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
    

    async addItemToCart () {
        await this.addToCartBtn.click();
    }


    // async allMenuOptions () {
    //     await this.openHamburgerMenu();
    //     await this.allItems.click();
    //     await expect(this.allItems).toBeExisting();

    //     await LoginPage.logout();
    //     await expect(LoginPage.inputUsername).toBeExisting();

    //     await LoginPage.login('standard_user', 'secret_sauce');
    //     await this.openHamburgerMenu();

    //     await this.addToCart.click();
    //     await expect(this.cartIconNumber).toBeExisting();

    //     await this.resetApp.click();
    //     await expect(this.cartIcon).toBeExisting();

    //     await this.about.click();
    //     await expect(this.aboutPage).toBeExisting();
    // }

}

export default new CartPage();