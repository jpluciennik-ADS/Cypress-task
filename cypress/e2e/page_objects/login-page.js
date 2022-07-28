export class LoginPage {

    static inputLoginData(type, name) {
        cy.get("#" + type).click().type(name);
    }

    static clickSignIn() {
        cy.get(".submit").contains("Sign in").click();
    }

    static findAccountData(name) {
        cy.get(".header_user_info").contains(name);
    }
}