const getMonthlyGrossSalary = (annualGrossSalary) => {
    if(hasNotValidValue(annualGrossSalary)) throw 'parameter value is invalid'
    return annualGrossSalary/12;
}

const getMonthlyNetSalary = (annualGrossSalary) => {
    if(hasNotValidValue(annualGrossSalary)) throw 'parameter value is invalid'
    let monthlyGrossSalary = getMonthlyGrossSalary(annualGrossSalary);
    return monthlyGrossSalary - (20/100*monthlyGrossSalary);
}

const hasNotValidValue = (value) => {
    return isNaN(value) || value === null || value < 0;
}

module.exports = {getMonthlyGrossSalary, getMonthlyNetSalary}