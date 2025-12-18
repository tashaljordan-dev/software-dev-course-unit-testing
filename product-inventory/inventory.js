function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;

    return price - price * discountRate;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    return [];
}

module.exports = {
    calculateDiscount,
    filterProducts,
    sortInventory
};