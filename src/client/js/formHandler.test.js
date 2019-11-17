const supertest = require('supertest');
const app = require('../../server/server');
const request = supertest(app);

/* https://github.com/babel/babel/issues/5085 */
describe('Testing the test path', () => {
    test('It should get test path',async() => {
        const response = await request.get('/test');
        expect(response.statusCode).toBe(200);
    });
});

describe('Testing the API path', () => {
    test('It should get API path',async() => {
        const response = await request.get('/api');
        expect(response.statusCode).toBe(200);
    });
});