// Dalida's Shop

// 1. let vs const
// Block Scope
let owner;
owner = "Dalida";

let customerOne = 'Joey';
let customerTwo = `Ross`;
let customerThree = "Rachel";

const OFFICIAL_NAME = "Hayal";
const ADDRESS = "Al-Farabi, 9";
const OWNER = `Name: ${owner}`;

// 2. Data Types
let price = "not too cheap, not too expensive";
price = 'not too cheap, not too expensive';
price = `${price}`;

let employees = 4;
let worksEveryDay = true;
let ranking = null; // empty or unknown

let interior;
interior = undefined; // declared but not assigned
console.log(interior);

// 3. Objects
let product = {
    name: "pen",
    price: 50,
    quality: "high"
};

product.popularity = "top";
delete product.popularity;

product['popularity'] = 'top';

let size = "small";
product["size"] = size;

delete product["popularity"];

product.mainInfo = function() {
    console.log("name: " + this.name);
    console.log("price: " + this.price);
}
product.mainInfo();

console.log("quality" in product);

for (element in product) {
    console.log(element);
}

// 4. Arrays
let products = ["pen", "pencil", "eraser", "pencil case", "ruler", "backpack"];
console.log(products.length);

products.push("auto pencil");
products.pop("eraser"); // still pops "auto pencil"

// products.length = 0;
// products.pop();

// shift() ~ pop() the first element
products.shift();
products.shift("khfbvudhb"); // still pops the first element

console.log(products.length);

products.unshift("pen");
products.unshift(); // shouldn't it return the size of products?

console.log(products.length);

let others = ["pencil", "auto pencil"];

let allProducts = products.concat(others);

console.log(allProducts);

// 5. Comparison operators and ...
console.log(2 > 1); // true
console.log(2 >= 1); //true
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log("01" == 1); // true
console.log(null == undefined); // true

console.log('01' === 1); // false
console.log('2' > 1); // true
console.log(null === undefined); // false

let result = '4' === 4 ? "true" : "false";
console.log(result);

//Nullish coalescing operator
// let toBuy = "pen";
// let bought = toBuy ?? "pencil";
// console.log(bought);

//Truthy or Falsy
let clothes = "yes";
if (clothes) {
    console.log("yes, clothes are sold");
} else {
    console.log("no, clothes are not sold");
}

// 6. Loops for, while, do while
console.log(products.length);
let cnt = 0;
for (let i = 0; i < products.length; i++) {
    cnt++;
}

console.log("cnt with for " + cnt);

console.log("products elements in reverse order: ");

while (cnt != 0) {
    cnt--;
    console.log(products[cnt]);
}

cnt = products.length;
console.log("products elements in reverse order: ");

do {
    cnt--;
    console.log(products[cnt]);
} while (cnt != 0);

// 7. Functions
function cntAllProducts() {
    console.log(allProducts.length);
}

cntAllProducts();

// in is for Objects while includes() is for Arrays
// in for Arrays checks if the array has that index
function checkProduct(product) {
    if (allProducts.includes(product)) {
        console.log(`Has ${product} :)`);
    } else {
        console.log("Buy sth else!");
    }
}

checkProduct("eraser");

// backtick ``
let isShop = "Yes, shop.";
let shop = `${isShop}`;
console.log(shop);

function checkPrice(product, price) {
    console.log(`${product} costs ${price}.`);
}

checkPrice("eraser", 400);

function showPrice(product) {
    console.log(`${product.name} costs ${product.price}.`);
}

showPrice(product);

// Destructuring (convenience)
function exDestructuring({name, price}) {
    console.log(`${name} costs ${price}.`);
}

exDestructuring(product);
exDestructuring(true);

function exDestructuring({name: n, price: p}) {
    console.log(`${n} costs ${p}.`);
}

exDestructuring(product);

// Function Expression
let abc = function() {
    console.log("abc function");
}

abc();

let bcd = function (element) {
    console.log(element + 1);
}

bcd(3);

// Arrow Functions

// let cdf = function(element) {
//     return element + 1;
// }

let cdf = (element) => {return element + 1};
console.log(cdf(6));

let dfg = () => allProducts.length;
console.log(dfg());

// map & filter
let leftProducts = ["pen", "pencil", 'eraser', `pen`, "pencil case", "ruler", "backpack", "pen"];

// The filter() method creates a new array filled with elements that pass a test provided by a "function".
let pens = leftProducts.filter((product) => product === "pen");
console.log(pens.length + " " + pens);
console.log(pens);

let mapUsage = leftProducts.map((product) => `wash ${product}`);
console.log(mapUsage);

// !rest!
// rest analogy: buying many products from a shop with a card for a certain total price
function buy (shop, card, price, ... neededProducts) {
    console.log(`buy ${neededProducts} from ${shop} with ${card} for ${price}`);
}

buy("Dalida's Shop", "Jusan", 7000, leftProducts);

function clean(cleaner, ...products) {
    console.log(`clean ${products} with ${cleaner}`);
}

clean("soup", leftProducts);

// Destructuring included
let {firstName, lastName, ...otherInfo} = {
    firstName: "Ayim",
    lastName: "Maratova",
    gender: "female",
    profession: "manager",
    age: 22,
    citizen: "Kazakhstan"
};

console.log(otherInfo);

// !spread!
const name = "ayim";
console.log([...name]); // [ 'a', 'y', 'i', 'm' ]

const selling = ["It is a", "high-quality pen"];
const recommending = ['Welcome', ...selling, "Do you want to buy it?"];
console.log(recommending);

const integers = [1, 3, 5, 7, 9];
function multiplication(a, b, c, d, f) {
    return a * b * c * d * f;
}
console.log(multiplication(...integers));

let say = ["We", "sell", "perfect", "products!"];
function sentence(a, b, c, d) {
    return a + " " + b + " " + c + " " + d;
}
console.log(sentence(...say));

let $ = 5;
console.log($ + 2);

// slice(start, end): [start, end). Also, negative numbers select from the end of the array.
console.log(leftProducts);
let selected1 = leftProducts.slice(0, 3);
console.log(selected1);

let selected2 = leftProducts.slice(-3, -1);
console.log(selected2);

// switch(): break is used to prevent execution of the cases that are after the case match
switch ("Yes") {
    case "No":
        console.log("case 'No': ");
        break;
    case "Yes":
        console.log("Right!");
        break;
    case "None":
        console.log("None!");
        break;
    default:
        console.log("Do not exist!");
        // break;
    case "Check":
        console.log("Is it printed?");
}























