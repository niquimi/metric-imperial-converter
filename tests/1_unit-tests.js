const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  
  test('convertHandler should correctly read a whole number input', function () {
    assert.equal(convertHandler.getNum('32L'), 32);
  });

  test('convertHandler should correctly read a decimal number input', function () {
    assert.equal(convertHandler.getNum('3.1kg'), 3.1);
  });

  test('convertHandler should correctly read a fractional input', function () {
    assert.equal(convertHandler.getNum('1/2mi'), 0.5);
  });

  test('convertHandler should correctly read a fractional input with a decimal', function () {
    assert.equal(convertHandler.getNum('3.5/2lbs'), 1.75);
  });

  test('convertHandler should correctly return an error on a double-fraction', function () {
    assert.equal(convertHandler.getNum('3/2/3km'), 'invalid');
  });

  test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided', function () {
    assert.equal(convertHandler.getNum('kg'), 1);
  });

  test('convertHandler should correctly read each valid input unit', function () {
    const validUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    validUnits.forEach((unit) => {
      assert.equal(convertHandler.getUnit(`32${unit}`), unit);
    });
  });

  test('convertHandler should correctly return an error for an invalid input unit', function () {
    assert.equal(convertHandler.getUnit('32invalid'), 'invalid');
  });

  test('convertHandler should return the correct return unit for each valid input unit', function () {
    const inputUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    const expectedUnits = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
    inputUnits.forEach((unit, index) => {
      assert.equal(convertHandler.getReturnUnit(unit), expectedUnits[index]);
    });
  });

  test('convertHandler should correctly return the spelled-out string unit for each valid input unit', function () {
    const inputUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    const expectedSpelledOut = [
      'gallons',
      'liters',
      'miles',
      'kilometers',
      'pounds',
      'kilograms',
    ];
    inputUnits.forEach((unit, index) => {
      assert.equal(convertHandler.spellOutUnit(unit), expectedSpelledOut[index]);
    });
  });

  test('convertHandler should correctly convert gal to L', function () {
    assert.equal(convertHandler.convert(1, 'gal'), 3.78541);
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
  });
  
  test('convertHandler should correctly convert L to gal', function () {
    assert.equal(convertHandler.convert(1, 'L'), 0.26417);
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
  });
  
  test('convertHandler should correctly convert mi to km', function () {
    assert.equal(convertHandler.convert(1, 'mi'), 1.60934);
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
  });
  
  test('convertHandler should correctly convert km to mi', function () {
    assert.equal(convertHandler.convert(1, 'km'), 0.62137);
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
  });
  
  test('convertHandler should correctly convert lbs to kg', function () {
    assert.equal(convertHandler.convert(1, 'lbs'), 0.45359);
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
  });
  
  test('convertHandler should correctly convert kg to lbs', function () {
    assert.equal(convertHandler.convert(1, 'kg'), 2.20462);
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });  
});
