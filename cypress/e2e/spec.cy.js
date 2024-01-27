describe('template spec', () => {
    it('add remove elements', () => {
        cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
        cy.get('.example button').click()
        cy.get('.added-manually').click()
    })

    it('login form', () => {
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })

    it('checkboxes', () => {
        cy.visit('http://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > input:nth-child(1)').check()
    })

    it('dropdown', () => {
        cy.visit('http://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').select('Option 2')
    })

    it('status codes', () => {
        cy.visit('http://the-internet.herokuapp.com/status_codes')
        cy.request({
            url: '/status_codes/200',
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        })
        cy.request({
            url: '/status_codes/301',
        }).then((resp) => {
            expect(resp.status).to.eq(301)
        })
    })

    it('file download', () => {
        cy.visit('http://the-internet.herokuapp.com/download')
        cy.request({
            url: '/download/BrowserStack%20-%20List%20of%20devices%20to%20test%20on.csv',
            encoding: 'binary',
        }).then((resp) => {
            cy.writeFile('files/file.csv', resp.body, 'binary')
        })
    })
})