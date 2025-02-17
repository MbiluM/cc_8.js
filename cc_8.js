// Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate){
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate) //Calculate the net salary 
    return `Net Salary: $${netSalary.toFixed(2)}`
};
console.log(calculateSalary(5000, 500, 0.1)); // output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // output: "Net Salary: $6950.00"