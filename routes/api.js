'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  const convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    const input = req.query.input;

    if (!input) {
      return res.status(400).json({ error: 'No input provided' });
    }

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    // Handle invalid number and unit cases
    if (initNum === 'invalid' && initUnit === 'invalid') {
      return res.send('invalid number and unit');
    }
    if (initNum === 'invalid') {
      return res.send('invalid number');
    }
    if (initUnit === 'invalid') {
      return res.send('invalid unit');
    }

    // Perform conversion
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const resultString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    // Return successful response
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: resultString,
    });
  });
};
