export class WomanPage {

    static clickProduct(name) {
        cy.get(".product-container").contains(name).click();
    }
}