export class MainPage {

    static openAutomationPracticePage(url) {
        cy.visit(url);
    }

    static clickCategory(name) {
        cy.get('#block_top_menu').contains(name).click();
    }

    static clickShoppingCart() {
        cy.get('.shopping_cart').contains("Cart").click();
    }

    static clickLogin() {
        cy.get(".header_user_info").contains("Sign in").click();
    }

    static addItem(id) {
        cy.get(`[data-id-product=${id}]`).contains("Add to cart").click();
        cy.wait(3000);
    }

    static clickContinueShopping() {
        cy.get(".continue ").click();
    }

    static clickCheckOut() {
        cy.get(".shopping_cart").contains("Cart").click();
    }
}