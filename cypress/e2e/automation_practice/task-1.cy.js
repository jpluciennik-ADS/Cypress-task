/// <reference types="cypress" />

import { LoginPage } from "../page_objects/login-page";
import { MainPage } from "../page_objects/main-page"

context("e-shop login", () => {

    describe("login to page", () => {

        it("should open main page", () => {
            MainPage.openAutomationPracticePage();
        })

        it("should open login page", () => {
            MainPage.clickLogin();
        })

        it("should input email address", () => {
            LoginPage.inputLoginData("email", "testing.test@test.com");
        })

        it("should input password", () => {
            LoginPage.inputLoginData("passwd", "password123_test");
        })

        it("should sign in", () => {
            LoginPage.clickSignIn();
        })

        it("should check if logged correctly", () => {
            LoginPage.findAccountData("TEST TEST");
        })
    })
})

// testing.test@test.com
// password123_test