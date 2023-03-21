class link_po{
    link_click(links){
        cy.contains(links).click()
    }
}
export default link_po;