describe("Petgram", () => {
  it("Para ver si la app funciona", () => {
    cy.visit('/')
  })
  it('navegamos hacia una categoria y vemos fotos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })
  it('Para ver si podemos navegar con la navbar a la home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('Para ver que los ususarios que no estan registrados vean el form de registro e inicio de sesion al ir a favs', ()=>{
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
});
