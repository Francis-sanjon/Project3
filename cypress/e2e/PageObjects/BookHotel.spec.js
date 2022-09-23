class BookHotel {
    firstName(value) {
        let fname = cy.get('#first_name')
        fname.type(value)
    }
    lastName(value) {
        let lname = cy.get('#last_name')
        lname.type(value)
    }
    billingAddress(value) {
        let Address = cy.get('#address')
        Address.type(value)
    }
    creditCardNo(value) {
        let cNo = cy.get('#cc_num')
        cNo.type(value)
    }
    creditCardType(value) {
        let ccType = cy.get('#cc_type')
        ccType.select(value)
    }
    expiryMonth(value) {
        let month = cy.get('#cc_exp_month')
        month.select(value)
    }
    expiryYear() {
        return cy.get('#cc_exp_year')
    }
    cvvNumber(value) {
        let cvvNo = cy.get('#cc_cvv')
        cvvNo.type(value)
    }
    bookNow() {
        cy.get('#book_now').click()
    }
    orderID() {
        return cy.get('#order_no')
    }
}
export default BookHotel