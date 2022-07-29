/// <reference types="cypress" />

import { MainPage } from "../page_objects/main-page"
import { ProductPage } from "../page_objects/product-page";
import { WomanPage } from "../page_objects/woman-page";

describe("e-shop price accuracy", () => {

    let data;
    before(() => {
        cy.fixture("task-2").then((taskData) => {
            data = taskData;
        })
    })

    it("should open main page", () => {
        MainPage.openAutomationPracticePage(data.url);
    })

    it("should open dresses page", () => {
        MainPage.clickCategory("Women");
    })

    it("should open blouse page", () => {
        WomanPage.clickProduct("Blouse");
    })

    let price;
    it("should get price of the product", () => {
        ProductPage.readPrice().then(($span) => {
            price = $span.text();
        })
    })

    it("Test", () => {
        
        console.log(price);
    })
})