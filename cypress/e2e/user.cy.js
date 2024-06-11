describe('template spec', () => {
    it('создание пользователя', () => {
        cy.request('POST', 'user', {
            id: 0,
            username: 'Ann',
            firstName: 'Anna',
            lastName: 'Li',
            email: 'AnnaLi@mail.ru',
            password: '1234',
            phone: '8910234567',
            userStatus: 0
        }).then((response) => {
            expect(response.status).be.eql(200);
            expect(response.body).be.eql({
                id: 0,
                username: 'Ann',
                firstName: 'Anna',
                lastName: 'Li',
                email: 'AnnaLi@mail.ru',
                password: '1234',
                phone: '8910234567',
                userStatus: 0
            });
        });
        // cy.request('DELETE', `user/${response.body.id}`).then((response) => {
        //     expect(response.status).be.eql(200);
        // });
    });
});
