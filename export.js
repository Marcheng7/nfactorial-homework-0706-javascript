let cntProducts = () => allProducts.length;
let canPurchase = (product) => allProducts.includes(product);

// Named export
export {cntProducts, canPurchase};

// Export as
export {cntProducts as cnt, canPurchase as cp};