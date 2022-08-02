export class CheckoutPage {

    static compareUnitPrice(index, price) {
        let unitPrice;
        cy.get(`#cart_summary > tbody > :nth-child(${index}) > .cart_unit > .price`).then(($span) => {
            unitPrice = $span.text();
            unitPrice = parseFloat(unitPrice.replace('$', ''))
            expect(unitPrice).to.equal(price);
        })
    }

    static compareTotalPrice(index, price, counter) {
        let totalPrice;
        cy.get(`#cart_summary > tbody > :nth-child(${index}) > .cart_total > .price`).then(($span) => {
            totalPrice = $span.text();
            totalPrice = parseFloat(totalPrice.replace('$', ''))
            expect(totalPrice).to.equal(price*counter);
        })
    }
}