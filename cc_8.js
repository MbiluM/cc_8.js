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


// Task 4 - Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {
    let rentalCostPerDay;
    switch (carType) {
        case "Economy":
            rentalCostPerDay = 40;
            break;
        case "Standard":
            rentalCostPerDay = 60;
            break;
        case "Luxury":
            rentalCostPerDay = 100;
            break;
        default:
            return "Invalid car type";
    }
    let totalCost = rentalCostPerDay * days;  // Calculating total cost without insurance
    if (insurance) { 
        totalCost += 20 * days; // Add insurance cost if applicable
    }
    return "Total Rental Cost: $" + totalCost; // Return  total rental cost
}

console.log(calculateRentalCost(3, "Economy", true)); // output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // output: "Total Rental Cost: $500"


// Task 5 - Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    const totalPayment = principal + (principal * rate * time); // Calculating total loan payment 
    return "Total Payment: $" + totalPayment.toFixed(2);  // Return with 2 decimal places
}
console.log(calculateLoanPayment(1000, 0.05, 2)); // output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // output: "Total Payment: $6050.00"

