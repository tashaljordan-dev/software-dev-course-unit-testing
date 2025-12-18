const products ={
    {
        name: "Laptop",
        price: 1200,
        category: "Electronics"
        
    }
    {  
        name: "Smartphone",
        price: 800,
        category: "Electronics"         
    }
    {
        name: "Desk Chair",
        price: 150,
        category: "Furniture"         
    }
}

function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    return null;
}

inventory.test.js

const {
  calculateDiscount,
  filterProducts,
  sortInventory
} = require("./inventory");

test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});

test("returns null for negative discount rate", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});


function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;

    return price - price * discountRate;
}


test("applies a valid discount rate", () => { expect(calculateDiscount(100, 0.1)).toBe(90); }); 
test("handles an invalid discount rate gracefully", () => { expect(calculateDiscount(100, -0.1)).toBe(null); }); 
test("handles edge case with price of 0", () => { expect(calculateDiscount(0, 0.2)).toBe(0); });

function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null
    if (discountRate < 0 || discountRate > 1) return null;
    return price - (price * discountRate);
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return []
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    const sorted = [...inventory] // creates a shallow copy to not alter the original
    sorted.sort((a,b) => {
        if(a[key] < b[key]) return -1; //when a comes before b
        if(a[key] > b[key]) return 1; //when b comes before a
        return 0; //a and b are equal
    }) 
    return sorted;
}