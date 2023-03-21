import homepage_po from "../support/pageObjects/orangehrm/homepage_po";
import logout_po from "../support/pageObjects/orangehrm/logout_po";
import link_po from "../support/pageObjects/orangehrm/link_po";

describe('this is test suite', () => {
    const homepage_poo=new homepage_po();
    const logout_poo=new logout_po();
    const link_poo=new link_po();

    beforeEach(function(){
        homepage_poo.visithomepage();
        homepage_poo.login()
        })
it('work_of_command_name', () => {
   // cy.SelectName("Admin");
    link_poo.link_click("Admin");
    logout_poo.logout();
    
})
})

