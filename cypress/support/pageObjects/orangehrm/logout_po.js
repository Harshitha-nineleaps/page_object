class logout_po{
    logout(){
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()//this concept in js is called chaining
        cy.contains('Logout').then((lastlink)=>{
    const linkname=lastlink.text()
    cy.log(linkname)
    //cy.wrap
    cy.wrap(lastlink).click()
})}
}
export default logout_po;