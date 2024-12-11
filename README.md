# Metric-Imperial Converter

This is a full-stack JavaScript application that converts between metric and imperial units. It is designed as part of the FreeCodeCamp curriculum and includes unit tests and functional tests for complete verification.

## Features
- Converts between various metric and imperial units:
  - **Gallons (gal)** ↔ **Liters (L)**
  - **Pounds (lbs)** ↔ **Kilograms (kg)**
  - **Miles (mi)** ↔ **Kilometers (km)**
- Accepts fractional, decimal, and whole number inputs.
- Handles valid and invalid inputs gracefully:
  - Invalid unit: Returns an error (`"invalid unit"`).
  - Invalid number: Returns an error (`"invalid number"`).
  - Invalid number and unit: Returns an error (`"invalid number and unit"`).
- Supports case-insensitive units (e.g., `L` or `l` for Liters).
- Rounds converted values to 5 decimal places.

---

## Demo
### Example usage:
- `/api/convert?input=10gal`
- `/api/convert?input=5.4/3lbs`
- `/api/convert?input=kg`

### Example output:
```json
{
  "initNum": 10,
  "initUnit": "gal",
  "returnNum": 37.8541,
  "returnUnit": "L",
  "string": "10 gallons converts to 37.8541 liters"
}
