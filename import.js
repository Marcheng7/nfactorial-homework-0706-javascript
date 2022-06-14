// Named import 
import { cntProducts, canPurchase } from "./export";  
cntProducts();
canPurchase("eraser");

// Import as
import { cntProducts as first, canPurchase as second } from "./export";
first();
second("eraser");

// // Import all
// import * as tryModules from "./say.js";
// tryModules.cntProducts();
// tryModules.canPurchase("eraser");

// Import default
import products from "./exportDefault.js";

console.log(products.length);