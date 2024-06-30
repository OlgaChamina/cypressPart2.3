describe('template spec', () => {
    it('создание пользователя', () => {
        cy.request({
            method: 'POST',
            url: '/',
            body: {
                id: 0,
                username: 'Ann',
                firstName: 'Anna',
                lastName: 'Li',
                email: 'AnnaLi@mail.ru',
                password: '1234',
                phone: '8910234567',
                userStatus: 0
            }
        }).then((response) => {
            expect(response.status).be.eql(200);
        });
    });
    it('должен изменять пользователя', () => {
        const updatedUser = {
            id: 0,
            username: 'Anton',
            firstName: 'Anton',
            lastName: 'second',
            email: 'updatedtestcy@example.com',
            password: '123',
            phone: '0987654321',
            userStatus: 1
        };

        cy.request({
            method: 'PUT',
            url: `https://petstore.swagger.io/v2/user/Ann`,
            body: updatedUser,
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            }
        })
            .its('status')
            .should('eq', 200);
    });
    it('должен удалять пользователя', () => {
        cy.request({
            method: 'DELETE',
            url: `https://petstore.swagger.io/v2/user/Ann`
        }).then((response) => {
            expect(response.status).be.eql(200);
        });
    });
});
