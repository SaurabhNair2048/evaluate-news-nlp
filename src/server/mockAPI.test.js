const json = require('./mockAPI');
const supertest = require('supertest');
const app = require('./server');

/* https://github.com/babel/babel/issues/5085 */
describe('Testing the mockAPI result', () => {
    test('It should get mockAPI JSON',() => {
        expect(json.message).toMatch('this is a message');
    });
});