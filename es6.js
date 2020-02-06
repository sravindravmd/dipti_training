//var has hoisting nature

/*
console.log(a); //

var a = 10;
*/

//let and const

/*console.log(a); //

let a = 10;*/

//let - block and local scope
//problem with var keyword
/*var a = 10;
console.log('1st a value', a);

var a = 20;

console.log('after a value', a);
*/

// solution with let keyword

//let a = 10; // so that we can't redeclare the variable 'a';

// solution for making constant values with const keyword

/*const b = 10;*/

//Data types in js (primitive and non primitive)

/*
//primitive

String
Boolean
Number
undefined
null
*/

//non primitive
/*Object
Array
Date*/

// Pass by value, pass by reference

//Pass by value
/*const a = 10;
let b = a;

console.log('B', b);

b = 50;
console.log('B value after', b);
console.log('any impact on a pass by value variable', a);*/

//pass by reference

const obj1 = { a: 10, b:20, c: 30 };

/*const obj2 = obj1;

console.log('value of Obj1', obj1);
console.log('value of Obj2', obj2);

obj2.b = 40;

console.log('Obj2 after update', obj2);
console.log('Obj1 values after Obj2 update', obj1);*/

// solution to avoid reference copy update

//console.log('spread operator', { ...obj1 });

/*const obj3 = {...obj1};

obj3.c = 60;

console.log('Obj3 after update', obj3);
console.log('Obj1 values after Obj3 update', obj1);*/

/*
 let a = 10;
 let b =  30;
 [ b, a] = [ a, b];
 console.log('a:b', a, b);
 */

/*
 const obj4 = { name: 'dipti', lastName: 'gh', 1: 'dipti gh'};

obj4['age'] = 25;

 console.log('obj4 of name', obj4);
 */

//Oops

class FullName {

    constructor( firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }

    getFullName() {

        return this.fullName;
    }

}

const dipti = new FullName('dipti', 'gh');
const ravi = new FullName('ravindra', 'srini');

console.log('dipti with new keyword', dipti.getFullName());
console.log('dipti with new keyword', ravi.getFullName());

