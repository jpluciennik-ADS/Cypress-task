/// <reference types="cypress" />

import { LoginPage } from "../page_objects/login-page";
import { MainPage } from "../page_objects/main-page"

describe("e-shop login", () => {

    let data;
    before(() => {
        cy.fixture("task-1").then((taskData) => {
            data = taskData;
        })
    })

    it("should open main page", () => {
        MainPage.openAutomationPracticePage(data.url);
    })

    it("should open login page", () => {
        MainPage.clickLogin();
    })

    it("should input login data and sign in", () => {
        LoginPage.inputLoginData("email", data.email);
        LoginPage.inputLoginData("passwd", data.password);
        LoginPage.clickSignIn();
    })

    it("should check if logged correctly", () => {
        LoginPage.findAccountData("TEST TEST");
    })
})