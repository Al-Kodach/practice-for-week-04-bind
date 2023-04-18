const Employee = require('./employee');

let john = new Employee('John Wick', 'Dog lover');

// wants ot invoke john.sayName() in 3s
// I'm expecting 'John Wick says hello' be printed out in the terminal.

let sayHello = john.sayName;
global.setTimeout(sayHello, 3000);

// after 3s 'undefined says hello' was printed out.
// WHY!!!?
// - john is an instance of our class Employee, hence reference the this value, hence the context,
// - join.sayName is not invoked, we lost context by assigning the method bind to john
// - if we had invoked john.sayName(), we had assigned the value returned and will work as expected.

// - to solve this we need to bind the context of john('this')
// - the bind returns a new function or method which is binded or bounded to john.sayName only.

let whoSaidHello = john.sayName.bind(john);
global.setTimeout(whoSaidHello, 3000);


let sayOccupation = john.sayOccupation.bind(john);
global.setTimeout(sayOccupation, 3000);
