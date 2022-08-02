/// <reference types="cypress" />

import { LoginPage } from "../page_objects/login-page";
import { MainPage } from "../page_objects/main-page";

const testData = require("../../fixtures/task-1.json");

testData.credentials.forEach((user) => {
    describe("e-shop login, test case: " + user.id, () => {
    
        it("should open main page", () => {
            MainPage.openAutomationPracticePage(testData.url);
        })
    
        it("should open login page", () => {
            MainPage.clickLogin();
        })
    
        it("should input login data and sign in", () => {
            LoginPage.inputLoginData("email", user.email);
            LoginPage.inputLoginData("passwd", user.password);
            LoginPage.clickSignIn();
        })
    
        it("should check if logged correctly", () => {
            LoginPage.checkIfLogged();
        })
    })
})