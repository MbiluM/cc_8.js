// Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate){
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate) //Calculate the net salary 
    return `Net Salary: $${netSalary.toFixed(2)}`
};
console.log(calculateSalary(5000, 500, 0.1)); // output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // output: "Net Salary: $6950.00"


// Task 2 - Product Price After Discount
function calculateDiscount(price, discountRate){
    finalPrice = price - (price * discountRate)
    return `Final Price: $${finalPrice.toFixed(2)}`
};
console.log(calculateDiscount(100, 0.2)); // output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // output: "Final Price: $212.50"


// Task 3 - Service Free Calculation 

const calculateServiceFee = (amount, serviceType) => {
    const serviceFeeRate = {
        'Premium': 0.15, // 15% discount 
        'Standard': 0.10, // 10% discount 
        'Basic': 0.05 // 5% discount 
    };
    
    let rate = serviceFeeRate[serviceType];
    let ServiceFee = amount * rate;
    return `Service Fee: $${ServiceFee.toFixed(2)}`;
};

// Test data
console.log(calculateServiceFee(200, "Premium")); // Service Fee: $30.00
console.log(calculateServiceFee(500, "Standard")); // Service Fee: $50.00
