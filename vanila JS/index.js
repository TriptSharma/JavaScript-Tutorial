var a = 5; //Exists throughout the function

let x = 15; // Exists only within the scope of the variable

const PI = 3.14; // Cannot be changed once assigned


console.log('a:'+a+' x:'+x+' PI:'+PI);

/*****

##ARITHMETIC OPS
JS is case-sensitive
+,-,*,/,% simple ops

*****/
a++;
a--;
a+=4;   //Similarly other shorthand arithmetic ops

/*****
 * STRINGS
 *****/

var str = "Hallo Welt";
var strlen = str.length;

str += "Wasssup!"   //String concatenation uing +=

var firstLetter = str[0];
var lastLetter = str[strlen-1]; //ith index from last = strlen - ith element
console.log(strlen, firstLetter);

//Strings are immutable in JavaScript.
//Yet we can change the string completely whereas we cannot change letter at a specific index
str = "hello world"; //possible
//str[0] = "H"; //Not possible
console.log(str)

var arr1d = ['Name', 95]
var arr2d = [['Lebron', 95], ['Kobe', 100], ['Jordan', 100]]
var arr2d_complex = [['Lebron', 95], ['Kobe', 100, 'R.I.P'], ['Jordan', 100]]
console.log(arr1d[0], arr2d_complex[1], arr2d_complex[1][2])

//arrays are mutable
arr2d[1][0] = 'Kobe Bryant'
console.log(arr2d)

//array manipulation
arr1d.push('NBA') //Add a new element to the last of the array
console.log('after push: '+arr1d)
arr1d.pop() //Remove the last element
console.log('after pop: '+arr1d)
arr1d.shift()   //Remove the first element and shift all to the left
console.log('after shift: '+arr1d)
arr1d.unshift('Basketball') //Add element to the start (opposite of shift function)
console.log('after unshift: '+arr1d)

//functions
function add(a,b){
    console.log('Sum of '+ a + ' '+ b+ ':'+ (a+b));
}
add(5,6)

function abTest(a,b){
    if (a<0 || b<0){
        return undefined;
    }
    return Math.pow((Math.sqrt(a), Math.sqrt(b)),2);
}
console.log(Math.round(abTest(10, 20)));

function counting(card){
    // return hold if ans<=0 and bet if ans>0 ans+=1 if card>=10 ans-- if card<=6 ans=ans if in between
    var ans = 0;
    switch(card){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            ans--;
            break;
        case 10:
        case 'A':
        case 'K':
        case 'Q':
        case 'J':
            ans++;
            break;
    }
    return ans>0?'BET':'HOLD';
}
console.log(counting('A'), counting('3'), counting('7'));

// ##OBJECTS

// Creating objects
var dog = {tail:1,
        legs:4,
        sound:'woof',
        types:['labrador', 'bulldog']}

// Adding or manipulating elements/ properties of an object
console.log(`A dog has ${dog['legs']} legs. There are ${dog.types.length} dogs; ${dog.types[0]} and ${dog.types[1]}.`);

dog.sound = 'bark';
dog.eyes = 2;
dog.types.push('poodle');

delete dog.tail;
console.log(dog, dog['legs'])

// Objects can be used for looking upp values like a hash table
var funcVar = (val) =>{   //This the short hand notation for declaring a funciton but can be used only if the function is returned as a variable
    const obj = {
        alpha : 'one',
        beta : 'two',
        gamma : 'three'
    }
    return obj[val] || 'Not found'  //If obj[val] prop is not present in obj, it returns undefined
}
console.log(funcVar('beta'), funcVar('delta'));

//Check if an object has a property/element or not
var checkProp = (prop) => dog.hasOwnProperty(prop)
console.log(checkProp('tail'))

//Create a copy of an object
var copy = JSON.parse(JSON.stringify(dog));

//WHILE LOOP
var myArr = [];
var  i=0;
while(i<5){
    myArr.push(i);
    i++;
}

//FOR LOOP
var dummy = 'javaScript is FUNNN!'
for(let i=0;i<dummy.length-18; i++){
    console.log(dummy[i]);
}

//DO-WHILE LOOP
do{
    myArr.push(i);
    i++;
}while(i<8);

// RANDOM 
var randomInt = Math.floor(Math.random() * 20); //Math.random() return a random no between 0-1. Therefore randomInt is an integer between [0,20)

//Get a number between a defined Range (max-min)
var randomNo = (min,max) => Math.floor(Math.random() * (max-min+1) + min)
console.log(randomInt, randomNo(7,19))

// parseInt FUNCTION WITH RADIX: It is used to convert any Number system (binary, hexa) to integer
function convertToInt(str){
    return parseInt(str, 2)   //Radix specifies teh base of the number between 2 and 36(here radix=2)
}
console.log(convertToInt("1001110"))

//NESTED TERNARY OPERATOR
function checkSign(num){
    return num>0? "Positive" : num<0? "Negative" : "Zero";
}
var num=1;
console.log(`Sign of ${num} = ${checkSign(num)}`)

function checkScope(){
    /*
    The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    With strict mode, you can not, for example, use undeclared variables.

    "use strict";
    x = 3.14;       // This will cause an error because x is not declared
    */
    "use strict"    //used to ensure that there are no errors like var not defined with let, const, var etc.
    let i = 'function scope';
    if (true){
        let i = 'block scope';
        console.log(`Inside block: ${i}`);  //let is used to define the scope for a block
    }
    console.log(`Inside function: ${i}`);   
}
checkScope()

//const is used to provide read-only message. However a const array or object can be mutated element-wise
const s = [2,5,4];
function mutate(){
    s[0]=23; s[1]=34;
    console.log('Mutated array', s)
}
mutate();
// TO prevent mutation as shown we can freeze the object
Object.freeze(s)
// mutate();    //Returns error TypeError: Cannot assign to read only property '0' of object

//Write function to return square of positive numbers in an array 
var arr = [5, 2.25, -1, -5.2, 0, 8.61]
var squarePos = (a) => a.filter(num => num>0).map(num => num*num) ;
console.log(squarePos(arr));

//REST OPERATOR
//It allows you to create a variable number of arguments for a function. Defined as "..."

function sum(x,y,z){ //WITHOUT REST OP
    let arr = [x,y,z];
    return arr.reduce((a,b) => a+b, 0);   //Here 0 represents the starting index and other arg is the callback function
}
//The above function is not scalable as it can only parse three arg and converts them to an array. Rest operator can handle this task in an efficient and scalable fashion

function sumWithRest(...args){  //WITH REST OP
    return args.reduce((a,b)=>a+b,0);
}
console.log(sumWithRest(1,2,5,4,6,8));

//SHALLOW and DEEP copies in JS

var arr1 = ['jan', 'feb', 'mar', 'may'];

var arr2 = arr1 //SHALLOW COPY
arr1[0] = 'J';
console.log('Shallow copy: ',arr2);  //arr2 is also modified

var arr3 = [...arr1]    //DEEP COPY
arr1[0] = 'Jan'
console.log('Deep copy: ',arr3);  //arr3 not modified

// DESTRUCTURING ASSIGMENT TO ASSIGN VARIABLES FROM OBJECTS
var coordinate = {x:23, y:2, z: {z1:12, z2:14}};

//assigning elements of coordinate to three variables
var {x:a, y:b, z: {z1:c, z2:d}} = coordinate    //It means: assign elements x,y,z (nested object elements z1, z2) from coordinate to var_type=var  a,b,c,d;
console.log(a,b,d)

//Using destructuring to pass elements of an object to functions
const half = ({x,y})=>{
    return [x/2, y/2];
}
console.log(half(coordinate))   //Here the funciton looks for elements x, y in the object and uses them as args, ignoring all the other elements

// DESTRUCTURING ASSIGMENT TO ASSIGN VARIABLES FROM OBJECTS
var dumArr = [2,3,4,7,0];
var [p,,q,r] = dumArr 
console.log(p,q,r)  //Returns 2,4,7

var [ , , ...dumm_remove2] = dumArr; //Removing first two elements of array dumArr using destructuring assignment and stores them in the variable dumm_remove2
console.log(dumm_remove2)  

//GET OBJECT FROM VAR
const createObj = (name, age, gender)=>({name, age, gender})  //Creates n object with var names as keys and the parameter values as values
console.log(createObj('Tript', 21, 'Male')) 

//CLASSES

function makeClass(){
    class Temperature{
        constructor(temp){
            this._temp = 5/9*(temp-32); //private var _temp, _ used to set it to private like Python
        }
        get celcius(){
            return this._temp;
        }
        set temp(updateTemp){
            this._temp = updateTemp;
        }
    }
    return Temperature;
}
const Thermo = makeClass();
var temperature = new Thermo(97.6);
console.log('Temp = ', temperature.celcius);
temperature.temp = 45   //in celcius
console.log('Temp = ', temperature.celcius);

/*
EXPORTING FUNCTIONS FROM OTHER SCRIPTS
export {func_name } function_declaration
export var/const var_name   //variables are exported just by adding 'export' keyword

EXPORT USING DEFAULT FALLBACK
export default func_name func_declaration 

USE OF DEFAULT
Default Exports: Default exports are useful to export only a single object, function, variable.
If a module defines a default export:

export default function() { console.log("hello!") }
then you can import that default export by omitting the curly braces:

import foo from "foo";
foo(); // hello!

IMPORTING FUNCTIONS FROM OTHER SCRIPTS      //Earlier require keyword was used to import funcs
import {func_name} from 'file_name' //JS imports using objects
import * as obj_name from 'file_name'   //Import everything from the file in an object

IMPORT DEFAULT
import default_func_name from 'file_name'
*/