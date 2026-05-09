"use strict";
//function(Normal,Arrow)
Object.defineProperty(exports, "__esModule", { value: true });
//normal function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3)); //this will print 5
//in this case, num1 and num2 will be number type because we have defined the type of the parameters.
//if we do not define anything typescript will define the num1 and num2 as any type.
function add2(num3, num4) {
    return num3 + num4;
}
console.log(add2(4, 5)); //this will print 9
//in this case, we have defined the return type of the function as number. 
// This means that the function must return a number value. 
// If we try to return a value of a different type, it will give an error.
//arrow function
const add3 = (num5, num6) => {
    return num5 + num6;
};
console.log(add3(6, 7)); //this will print 13
//# sourceMappingURL=function.js.map