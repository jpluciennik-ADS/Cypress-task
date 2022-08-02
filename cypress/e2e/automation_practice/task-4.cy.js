/// <reference types="cypress" />

import { MainPage } from "../page_objects/main-page"

const testData = require("../../fixtures/task-4.json");

describe("data-driven adding to cart", () => {
    it("should add items to cart", () => {

        MainPage.openAutomationPracticePage(testData.url);
        testData.products.forEach((product) => {
            MainPage.addItem(product.id);
            MainPage.clickContinueShopping();
        })
        
        MainPage.clickCheckOut();
    })
})