describe('End To End Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Navigating to the url should render logo', () => {
        cy.getByTestParam("logo").should('be.visible');
    });
    it('Clicking home should take you to the homepage', () => {
        cy.getMenuOption(0).click();
        cy.getByTestParam("homePage").should('be.visible');
    });
    it('Clicking about us should take you to the about us page', () => {
        cy.getMenuOption(1).click();
        cy.getByTestParam("aboutPage").should('be.visible');
    });
    it('Clicking contact us should take you to the contact us page', () => {
        cy.getMenuOption(2).click();
        cy.getByTestParam("contactPage").children().contains('divesh.david@gmail.com').should('be.visible');
    });

    it('Navigating to the delete link should delete all blogs', () => {
        cy.visit('/delete');
        cy.reload();
        cy.getByTestParam("blogs").should('not.exist');
    });

    it('Entering values of a post and clicking publish should publish the post', () => {
        cy.visit('/compose');
        cy.createPost();
    });
    it('Clicking read more should take user to the complete blog page', () => {
        cy.visit('/');
        cy.getByTestParam("read-more").first().click();
        cy.url().should('contain', '/posts/');
    });
})