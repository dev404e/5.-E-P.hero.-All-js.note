// vary + able = variable

// ---------------numeric------------

var price = 11;
var age = 17;
var temperature = 38;

//----------- string--------------

var person = "sodor uddin";
var location = "andork killa bandorbon" ;
var special = 'alia bhatt';


// ---------Boolean---------

var serious = true;
var isFullMarks = true;
var isSingle = false;

// -----remainder (অর্থ হলো ভাগ শেষ)-------

// / this means vagfol
// % this means vagses

var mangoes = 19;
var person = 7;
var remainder = mangoes % person;

// console.log(remainder);


// -------------addition, subtraction-------------

var onionPrice = 20;
var eggPrice = 10;

var totalPrice = onionPrice + eggPrice;
var priceDifference = onionPrice - eggPrice;

// console.log(priceDifference);

// console.log(totalPrice);
// console.log(onionPrice);
// console.log(eggPrice);
// console.log(onionPrice + eggPrice);

//--------------- multplication-------------

var orangePrice = 20;
var quantiy = 7;
var totalCost = orangePrice * quantiy;

// console.log(totalCost);



// ----------division-------------

var money = 500;
var player = 10;
var eachPlayer = money / player;
console.log(eachPlayer);

//--concatination (মানে জোরা দেওয়া)-------


var price1 = 31;
var price2 = 10;
var totalPrice = price1 + price2;
// console.log(totalPrice);


var firstName = 'Jennie';
var lastName = 'Kim';
var fullName = firstName + ' ' + lastName;
// console.log(fullName);



// ----------Array lenth deaclear--------------

var friendsAge = [11, 21, 45, 17, 14, 105, 6];

var picnicFee = [5000, 2000, 4000, 150];

var nayikas = [ 'mahi', "opu", 'sabnoor', 'sabana'];

var vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(friendsAge.length);


// ----------comparijon oparator--------

var num1 = 56;
var num2 = 89;

console.log( num1 < num2);
console.log( num1 > num2);
console.log( num1 === num2);
console.log( num1 !== num2);
console.log( num1 >= num2);
console.log( num1 <= num2);


// ---------- multiple conditions -----------

 money1 > money2 && result1 > result2 && height1 > height2
money1 > money2 || result1 > result2 || height1 > height2


// ----------- If else multi stage Condition ----------


var money = 68;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money) {
    console.log('Dan Dan danish khamu');
}
else if (butterBread < money) {
    console.log('Butter bon khamu')
}
else if(toastBiscuit < money){
    console.log('chubai chubai toast biscuit khamu')
}
else {
    console.log('Khali cha e sasther jonno valo')
}

//----- while loop (a) -------

var roastGiven = 0;
while(roastGiven < 7) {
    console.log('Roast Den, Please !!')
    console.log(roastGiven);
    roastGiven++;
}

//-------while loop (a) -------

var num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

// brak continu

for(var i = 1; i <= 10; i++){
    console.log(i);
    if(i == 5){
        break;
    }
}

// string type variable
var bottle = 'water';
var bottleColor = 'yellow';

// number type variable
var sunglassPrice = 120;
var penColor = 'blue';

// Boolean type variable
var isExpensive = true;

// index, pop, push

var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'paper'];

var item3 = tableItems[3];
tableItems[4] = 'notebook';
var penIndex = tableItems.indexOf('pen');

// ---------for loop-------

// i = i + 2;
// i += 2;

for(var i = 1; i <= 10; i++){
    console.log(i);
}

for(var i = 10; i >= 1; i--){
    console.log(i);
}


for(var i = 0; i <= 20; i+=2){
    console.log(i);
}

for (var i = 1; i<=20; i+=2){
    console.log(i);
}

// ------Odd number-----

// target: 1 to 100 all odd number
var number = 1;
while(number <= 100){
    console.log(number);
    number = number + 2;
}

// -------while loop-------

// Target: Display 1 to 10

var number = 1;
while(number <= 20){
    console.log(number);
    number++;
}

//---- if many conditions ------

var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
}

//---------Continue-------

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}

// -----------Break ------------

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}

// --------grading sistem----------

// 75.25, 65, 80, 35.45, 99.50
// Mathematics, Biology, Chemistry, Physics, and Bangla
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
console.log(averageTwoDecimal);

// ---------Array ubdet-----

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

//--------var gradding--------

var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var getBack = moneyGiven - totalPrice;
console.log(getBack);

// ---------switch case 1 -------

const color = 'yellow';

if(color === 'green'){
    console.log('You are a green friend');
}
else if (color === 'blue'){
    console.log('You are a blue friend');
}
else if (color === 'red'){
    console.log('You are a red friend');
}
else if (color === 'white'){
    console.log('You are a white friend');
}
else if(color === 'yellow'){
    console.log('You are a yellow himu friend');
}
else {
    console.log('You are a black black friend');
}

// ---------switch case 2 -------

switch(color){
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are a BLUE friend');
        break;
    case 'white':
        console.log('You are a white friend');
        break;
    case 'red':
        console.log('You are a red friend');
        break;
    case 'yellow':
        console.log('You are a himu friend');
        break;
    default:
        console.log('You are a kala kala friend');
}

// ------function return (1)-----
function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
    console.log('I need more code');
    return 15;
    return 'hello done';
    return 'I am hungry';
}

 // add(45, 15);

 var total = add(80, 20);

 // console.log('total', total);


 // ------function return (2)--------

 function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150
var singaras = bringSingara(myTaka);
// console.log('Eating singaras: ', singaras);


// ------------------object poperty----------------

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
// alternative System
// When you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart)

// ---------function paramiter pase------------

function bringSingara(money){
    console.log('taka disen: ', money);
    console.log('ai nen singara');
}

var taka = 300;

// bringSingara(taka);

function add(num1, num2){
    console.log('going to add:', num1, num2);
}

// add(125, 96);

function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}

sum(15, 98, 56, 5, 9);

// -------------------Object.js-------------------
var student = {
    id: 115,
    name: 'Solamin Khan',
    class: 9,
    marks: 98
}

var mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP'
}

var myComputer = {
    brand: 'lonovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}

console.log(myComputer.processor);
myComputer.processor = 'i79';
console.log(myComputer)

// ----------array vs object-----------

var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi:32,
    kazi: 14
}


var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);

}

// --------function declaration-----------

function startFan(){
    console.log('Stand up');
    console.log('walk towards the switch');
    console.log('Press the switch');
}

// ------------call the function--------------
startFan();
console.log('Waking up in the morning')
startFan();
console.log('Eating lunch');
console.log('Watching JS tutorial')
startFan();

// -------------function devided-----------
/*
function functionName (parameters){
    function body
    return
}

var returnedValue = functionName(parameters value)
*/

function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far:', myAverage);

// --------function sum-------

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
// console.log()
const result2 = add(35, 7);
const finalResult = add(result1, result2);

// ---------------inch to feet convat----------------

// const myInches = 12;
// const myFeet = myInches /12;
// console.log(myFeet);

// const dataInches = 144;
// const dadaFeet = dataInches / 12;
// console.log('data feet', dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('dadiFeet', dadiFeet);


function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet);

//------------------ find odd sum ------------------

function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91 ];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log('odd number sum', oddNumberSum);

// -------------------find Even number-----------------

// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);

// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(1287/2);

// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);

// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);


function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
 }

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEVen = isEven(1280);
console.log(herNumberIsEVen);

// --------factorial (1) -------------

// 1 * 2 * 3 *4 *5 *6 * 7

// 3! = 3*2*1
// 4! = 4*3*2*1

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);

// -------- factorial (2) while -------------
function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}
// --------factorial (3) while-reverse -------------
function factorial(number){
    let i = number;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

const output = factorial(7);

// --------factorial (4) reverse-for -----------
function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const number = 6;
const fact = factorial(number);
console.log('factorial of:', number, fact);

// -----------------LeapYear-------------
function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear)

//-------------- word revers --------------

function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    for(let i = words.length - 1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}


const myString = 'I am a good boy';
reverseWords(myString);

// ------temp----- হলো একজনের মান আরেকজনকে দিয়ে দেওযা-----------

let first = 5;
let second = 7;
console.log(first, second);
// this is wrong approach
// first = second;
// second = first;

// approach: 1
// const temp = first;
// first = second;
// second = temp;

// approach: 2 --- Destructuring
[ first, second ] = [ second, first ];

console.log(first, second);

// -------------সব থেকে বড় সংখ্যা খুজে বের করা-------------
function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);


// Homework: Write a function to get the lowest number in an array


