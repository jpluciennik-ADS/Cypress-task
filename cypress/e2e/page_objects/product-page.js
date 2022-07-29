export class ProductPage {

    static price;

    static readPrice() {
        return cy.get("#our_price_display");
    }


    static addItem() {
        cy.get(".product_quantity_up").click();
    }
}