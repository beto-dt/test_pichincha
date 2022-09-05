const request = require('supertest');
const app = require('../app');

const testAuthLogin = {
    "email": "luis.atorred43@gmail.com",
    "password": "123456"
};



describe("[AUTH] this is the test of /api/v1/auth",() => {
    test('this should  return 404',async () => {
        const response  = await request(app)
        .post('api/v1/auth/login')
        .send(testAuthLogin)

        expect(response.statusCode).toEqual(404);
    });

})
