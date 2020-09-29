const {getMonthlyGrossSalary, getMonthlyNetSalary} = require('../components/computeSalary');

test('expect getMonthlyGrossSalary returns annual gross Salary/12', () => {
    expect(getMonthlyGrossSalary(32400)).toBe(2700);
})

test('expect getMonthlyGrossSalary throw an error when parameter is invalid', () => {
    expect(() => {getMonthlyGrossSalary(-200)}).toThrowError('parameter value is invalid');
})

test('expect getMonthlyNetSalary returns 20% of annual gross salary', () => {
    expect(getMonthlyNetSalary(32400)).toBe(2160);
})

test('expect getMonthlyNetSalary throw an error when parameter is invalid', () => {
    expect(() => {getMonthlyNetSalary(undefined)}).toThrowError('parameter value is invalid');
})