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


// Task 6 - Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500];
function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // output: [1500, 3200, 2500]


// Task 7 - Shopping Cart Tracker
function createCartTracker() {
    let totalCartValue = 0;
    return function(price) {
        totalCartValue += price;
        return `Total Cart Value: $${totalCartValue}`;
    };
};

let cart = createCartTracker();
console.log(cart(20)); // output: "Total Cart Value: $20"
console.log(cart(35)); // output: "Total Cart Value: $55"


// Task 8 Savings growth projection 
function calculateSavings(years, amount) {
    if (years === 0) {    // If years is 0, return the og amount
        return `Projected Savings: $${amount.toFixed(2)}`;
    };
    if (years > 10) { //cap at 10 years
      years = 10;
    };
    const savings = amount * 0.05; // Calculate the savings
    const newAmount = amount + savings;
    return calculateSavings(years - 1, newAmount); // return with one less year and the new amount
  };
  console.log(calculateSavings(8, 1000)); // output: "Projected Savings: $1477.46"
  console.log(calculateSavings(5, 5000)); // output: "Projected Savings: $6381.41"

