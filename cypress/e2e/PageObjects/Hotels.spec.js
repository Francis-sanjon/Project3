class Hotels {

    location(value) {
        let Loc = cy.get('#location')
        Loc.select(value)
    }
    hotel(value) {
        let htel = cy.get('#hotels')
        htel.select(value)
    }
    roomType(value) {
        let rtype = cy.get('#room_type')
        rtype.select(value)
    }
    numberOfRoom(value) {
        let nRoom = cy.get('#room_nos')
        nRoom.select(value)
    }
    checkInDate(value) {
        let cDate = cy.get('#datepick_in')
        cDate.type(value)
    }
    checkOutDate(value) {
        let coDate = cy.get('#datepick_out')
        coDate.type(value)
    }
    adultsPerRoom(value) {
        let apRoom = cy.get('#adult_room')
        apRoom.select(value)
    }
    childrensPerRoom(value) {
        let cpRoom = cy.get('#child_room')
        cpRoom.select(value)
    }
    searchButton() {
        cy.get('#Submit').click()
    }
}
export default Hotels