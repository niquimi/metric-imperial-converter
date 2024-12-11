function ConvertHandler() {
  this.getNum = function(input) {
    const result = input.match(/^([\d./]*)/)[0]; // Extract numeric part
    if (!result) return 1; // Default to 1 if no number is provided
    if (result.split('/').length > 2) return 'invalid'; // Double fraction error
    try {
      return eval(result); // Safely evaluate fractions like 1/2
    } catch (e) {
      return 'invalid'; // Invalid number
    }
  };
  

  this.getUnit = function (input) {
    const unit = input.match(/[a-zA-Z]+$/);
    if (!unit) return 'invalid';
    const validUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
    const lowerCaseUnit = unit[0].toLowerCase();
    if (lowerCaseUnit === 'l') return 'L'; // Handle 'L' case
    return validUnits.includes(lowerCaseUnit) ? lowerCaseUnit : 'invalid';
  };

  this.getReturnUnit = function (initUnit) {
    const unitMap = {
      gal: 'L',
      L: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs',
    };
    return unitMap[initUnit] || 'invalid';
  };

  this.spellOutUnit = function (unit) {
    const unitNames = {
      gal: 'gallons',
      L: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms',
    };
    return unitNames[unit] || 'invalid';
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        return 'invalid';
    }
    return parseFloat(result.toFixed(5)); // Round to 5 decimals
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const initUnitString = this.spellOutUnit(initUnit);
    const returnUnitString = this.spellOutUnit(returnUnit);
    return `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`;
  };
}

module.exports = ConvertHandler;
