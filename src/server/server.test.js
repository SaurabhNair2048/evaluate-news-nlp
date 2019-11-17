const supertest = require('supertest');
const app = require('./server');
const request = supertest(app);

/* https://github.com/babel/babel/issues/5085 */
describe('Testing the root path', () => {
    test('It should get root path',async() => {
        const response = await request.get('/');
        expect(response.statusCode).toBe(200);
    });
});