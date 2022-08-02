/// <reference types="cypress" />

import { MainPage } from "../page_objects/main-page"
import { WomanPage } from "../page_objects/woman-page";
import { ProductPage } from "../page_objects/product-page";
import { CheckoutPage } from "../page_objects/checkout-page";

describe("e-shop price accuracy", () => {

    let data;
    before(() => {
        cy.fixture("task-2").then((taskData) => {
            data = taskData;
        })
    })

    it("should open women page", () => {
        MainPage.openAutomationPracticePage(data.url);
        MainPage.clickCategory("Women");
    })

    it("should open blouse page", () => {
        WomanPage.clickProduct("Blouse");
    })

    let price;
    it("should get price of the product", () => {
        ProductPage.readPrice().then(($span) => {
            price = $span.text();
            price = ProductPage.piceAsNum(price);
        })
    })

    let counter = 0;
    it("should add product to cart and proceed to checkout", () => {
        counter += ProductPage.addItem(2);
        ProductPage.clickAddToCart();
        ProductPage.clickProceedToCheckout();
    })

    it("should compare prices", () => {
        CheckoutPage.compareUnitPrice(1, price);
        CheckoutPage.compareTotalPrice(1, price, counter);
    })
})