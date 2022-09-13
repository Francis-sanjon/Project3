class BookedIteration{
bIteration(){
     cy.get('[href="BookedItinerary.php"]').click()
}
checkBtn(){

    return cy.get('#check_all')
}
cancelBk(){
  cy.get('[name="cancelall"]').click()
}


}
export default BookedIteration