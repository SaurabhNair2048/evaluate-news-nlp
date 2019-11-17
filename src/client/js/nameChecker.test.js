const nameChecker = require('./nameChecker');
const supertest = require('supertest');
const app = require('../../server/server');

/* https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert */
describe('Testing the test path', () => {
    test('It should get test path',() => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        
        expect(nameChecker.checkForName('Picard')).toBeFalsy();

        window.alert = jsdomAlert;  // restore the jsdom alert
    });
});

describe('Testing the test path', () => {
    test('It should get test path',() => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  // provide an empty implementation for window.alert
        
        expect(nameChecker.checkForName('Cerberus')).toBeTruthy();

        window.alert = jsdomAlert;  // restore the jsdom alert
    });
});