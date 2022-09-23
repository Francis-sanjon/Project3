class Login {
   userName(val) {
      let uname = cy.get('#username')
      uname.type(val)
   }
   password(value) {
      let password = cy.get('#password')
      password.type(value)
   }
   loginButton() {
      cy.get('#login').click()
   }

}
export default Login