describe("Newsletter subscribe form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("allows to subscribe to email list", () => {
       cy.getByData("email-input").randEmail
    })
})
