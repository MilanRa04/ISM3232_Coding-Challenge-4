// Coding Challenge 4: Inventory System Management
// Task 1: Create an inventory array of product objects
const inventory = [
    {name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    {name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    {name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    {name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    {name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
];

// console.log(inventory)

// Task 2: Create a function to display product details
function displayProductDetails(product) {
    let stockStatus = product.quantity > product.lowStockLevel ? "In Stock" : "Low Stock";
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}

displayProductDetails(inventory[0])

// Task 3: Create a function to update product stock after sales
function updateStock(product, unitsSold) {
    if (product.quantity >= unitsSold) {
        product.quantity -= unitsSold;
        console.log(`${unitsSold} units of ${product.name} sold. Updated quantity: ${product.quantity}`);

        if (product.quantity === 0) {
            console.log(`${product.name} is now Out of Stock.`);
        } else if (product.quantity <= product.lowStockLevel) {
            console.log(`${product.name} is now Low Stock.`);
        }
    } else {
        console.log(`Insufficient stock to sell ${unitsSold} units of ${product.name}.`);
    }
}

updateStock(inventory[0], 2)

// Task 4: Create a Function to Check Low Stock Products
function checkLowStock() {
    console.log('Low Stock Products:');
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(product.name)
        }
        else console.log('No products are low on stock')
    });
}

checkLowStock(inventory)

// Task 5: Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory) {
    const totalValue = inventory.reduce((total, product) =>{
        return total + (product.price * product.quantity);
    }, 0);
    return totalValue;
}

console.log(`Total inventory value is $${calculateInventoryValue(inventory)}`)

// Task 6: Create a Function to Process a Sale
function processSale(productName, unitsSold) {
    const product = inventory.find(item => item.name === productName);

    if (product) {
        updateStock(product, unitsSold);
    } else {
        console.log(`Product ${productName} is not in the inventory.`);
    }
}

processSale('Laptop', 2)