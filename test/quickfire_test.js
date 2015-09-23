var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var bankAccount = require('../js/quickfire_challenge.js');

describe ('bankAccount', function() {

  it('should be a function', function(){
    expect(bankAccount).to.be.a('function');
  });

  it('should be the sum of the square root of every number from 1 to the number passed', function () {
    bankAccount(4).should.be.equal(6.146264369941973);
  });

});