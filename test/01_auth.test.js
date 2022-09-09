const request = require('supertest');
const app = require('../app');

describe("[AUTH] this is the test of /api/v1/auth",() => {
    test('this should  return 404',async () => {
        const res  = await request(app)
        .post('api/v1/auth/login')
        .send({
            email: "luis.atorred43@gmail.com",
            password: "123456"
        })

        expect(res.statusCode).toEqual(404);
    });
})
