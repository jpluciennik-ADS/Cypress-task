export class ProductPage {

    static readPrice() {
        return cy.get("#our_price_display");
    }

    static piceAsNum(price) {
        price = price.replace('$', '')
        return parseFloat(price);
    }

    static addItem(n) {
        for (let i = 0; i < n-1; i++) {
            cy.get(".product_quantity_up").click();
        }
        return n;
    }

    static clickAddToCart() {
        cy.get("#add_to_cart").contains("Add to cart").click();
        cy.wait(2000);
        cy.get("#add_to_cart").contains("Add to cart").click();
    }

    static clickProceedToCheckout() {
        cy.get(".btn").contains("Proceed to checkout").click();
    }
}