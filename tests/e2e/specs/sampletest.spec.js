describe("Interacting with Uniswap (on the network configured in .env file)", () => {
  beforeEach(() => {
    cy.visit("https://app.uniswap.org/")
  })

  it("Should allow user to connect", () => {
    cy.wait(2000) // not needed, it's just so user can see the result
    cy.get('[data-testid="navbar-connect-wallet"]').click()
    cy.wait(2000) // not needed, it's just so user can see the result
    cy.get('#metamask').click()
    // connect to dapp
    // cy.switchToMetamaskWindow() // don't need this
    cy.wait(2000) // not needed, it's just so user can see the result
    cy.acceptMetamaskAccess().should("be.true")
    //cy.switchToCypressWindow()
    cy.wait(5000) // not needed, it's just so user can see the result
  })

  // Use the pattern below to submit a transaction 

  // it("Should perform a transaction", ()=>{
  //   code to get wallet connected (like the above) goes here
  //   cy.get("selector for the element that initiates a tx (such as the Swap button").click()
  //   cy.confirmMetamaskTransaction()
  // })
})
