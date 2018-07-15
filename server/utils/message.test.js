var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () =>{
    it('should generate corect message object', () =>{
        var from = 'jan';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text });

    });

});