class SelectHotesz {

    radioButton() {
        return cy.get('#radiobutton_0').check()

    }
    continueButton() {
        return cy.get('#continue').click()
    }

} export default SelectHotesz