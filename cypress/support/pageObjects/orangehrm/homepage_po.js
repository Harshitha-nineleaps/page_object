class homepage_po{
    visithomepage(){
        cy.wait(8000)
        cy.visit(Cypress.env("orangehrm_homepage"));
        cy.wait(80000)
    }
    login(){
        cy.get('input[name="username"][placeholder="Username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
    }
}
export default homepage_po;