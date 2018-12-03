var expect = require('expect');
var {generateMessage , generateLocatioMessage} = require('./message');

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});

  });
});

describe('generateLocatioMessage',()=>{
  it('should generate correct location object',()=>{
    var from = 'Deb';
    var latitude = 15;
    var longitude = 19;
    //https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=AIzaSyCnL5NGwK7rGmuhBvqKUmDSK4h6cuknAy0`
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=15,19&key=AIzaSyCnL5NGwK7rGmuhBvqKUmDSK4h6cuknAy0`;
    var message = generateLocatioMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
});
