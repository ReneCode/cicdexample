
var expect = require('expect');

var calculate = require('./calculate');

describe('calculate', function() {
    describe('sum', function() {
        it('should sum numbers', function() {
            var sum = calculate.sum(4,5);
            expect(sum).toBe(9);
        })

        it('should sum texts', function() {
            var sum = calculate.sum('abc','xyz');
            expect(sum).toBe('abcxyz');
        })

    })
});


