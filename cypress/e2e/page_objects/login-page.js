export class LoginPage {

    static inputLoginData(type, name) {
        cy.get("#" + type).click().type(name);
    }

    static clickSignIn() {
        cy.get(".submit").contains("Sign in").click();
    }

    static checkIfLogged() {
        cy.get(".page-heading").contains("My account");
    }
}