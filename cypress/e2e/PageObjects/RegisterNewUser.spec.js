class RegisterNewUser {

    registerHere() {
        return cy.get('.login_register > a')
    }
    userName() {
        return cy.get('#username')
    }
    password() {
        return cy.get('#password')
    }
    confirmPassword() {
        return cy.get('#re_password')
    }
    fullName() {
        return cy.get('#full_name')
    }
    emailAddress() {
        return cy.get('#email_add')
    }
    agreeCheckbox() {
        return cy.get('#tnc_box')
    }
    registerBtn() {
        return cy.get('#Submit')
    }
}
export default RegisterNewUser