const supertest = require('supertest');
const app = require('./server');

/* https://github.com/babel/babel/issues/5085 */
/* https://stackoverflow.com/questions/4840879/nodejs-how-to-get-the-servers-port */
describe('Testing the root path port', () => {
    test('It should get root path port',() => {
        let port = app.listen(8888, function(){
            console.log('Test app listening on port 8888');
        })
        expect(port.address().port).toBe(8888);
    });
});