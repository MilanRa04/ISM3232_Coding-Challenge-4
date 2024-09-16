// Coding Challenge 4: Inventory System Management
// Task 1: Create an inventory array of product objects
let inventory = [
    {name: 'Laptop', price: 1000, quantity: 10, lowStockLevel: 2 },
    {name: 'Smartphone', price: 750, quantity: 20, lowStockLevel: 5 },
    {name: 'Tablet', price: 600, quantity: 15, lowStockLevel: 4 },
    {name: 'Smartwatch', price: 150, quantity: 10, lowStockLevel: 2 },
    {name: 'Headphones', price: 50, quantity: 30, lowStockLevel: 7 }
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

// Task 3: Create a function to update product stock after sales
function updateStock(product, unitsSold) {
    if (product.quantity >= unitsSold) {
        product.quantity -= unitsSold;
        console.log(`${unitsSold} units of ${product.name} sold. Updates quantity: ${product.quantity}`);

        if (product.quantity === 0) {
            console.log(`${product.name} is now Out of Stock.`);
        } else if (product.quantity <= product.lowStockLevel) {
            console.log(`${product.name} is now Low Stock.`);
        }
    } else {
        console.log(`Insufficient stock to sell ${unitsSold} units of ${product.name}.`);
    }
}

// Task 4: Create a Function to Check Low Stock Products
function checkLowStock() {
    console.log('Low Stock Products:');
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(product.name)
        }
    });
}