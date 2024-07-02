const { expect } = require('chai');
const { saturdayFun, mondayWork, wrapAdjective } = require('../index.js');

describe('index.js', () => {
  describe('defines saturdayFun function declaration as specified', () => {
    it('function exists', () => {
      expect(saturdayFun).to.be.a('function');
    });

    it('uses the default activity \'roller-skate\' when no arguments are passed', () => {
      expect(saturdayFun()).to.equal('This Saturday, I want to roller-skate!');
    });

    it('permits the default activity to be overriden', () => {
      expect(saturdayFun('go to the movies')).to.equal('This Saturday, I want to go to the movies!');
    });
  });

  describe('defines mondayWork function expression as specified', () => {
    it('function exists', () => {
      expect(mondayWork).to.be.a('function');
    });

    it('uses the default activity \'go to the office\' when no arguments are passed', () => {
      expect(mondayWork()).to.equal('This Monday, I will go to the office.');
    });

    it('permits the default activity to be overriden', () => {
      expect(mondayWork('eat a bagel')).to.equal('This Monday, I will eat a bagel.');
    });
  });

  describe('defines wrapAdjective function according to the specification', () => {
    it('function exists', () => {
      expect(wrapAdjective).to.be.a('function');
    });

    it('when initialized with \'*\' creates a function that, when called, wraps an adjective in a highlight', () => {
      const badassFunction = wrapAdjective('*');
      expect(badassFunction).to.be.a('function');
      expect(badassFunction('badass')).to.equal('*badass*');
    });

    it('when initialized with \'||\' creates a function that, when called, wraps an adjective in a highlight', () => {
      const niceFunction = wrapAdjective('||');
      expect(niceFunction).to.be.a('function');
      expect(niceFunction('nice')).to.equal('||nice||');
    });
  });
});
