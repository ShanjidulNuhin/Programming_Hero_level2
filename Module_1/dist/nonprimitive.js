"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let bazar = ["eggs", "milk", "bread"]; //this is an string type array
bazar.push("butter"); //this will add butter to the bazar array
bazar.pop(); //this will remove the last item from the bazar array which is butter
let both = ["eggs", 123, true]; //this is an array that can contain both string, number and boolean type values
both.push("milk"); //this will add milk to the both array
both.push(456); //this will add 456 to the both array
both.push(false); //this will add false to the both array
console.log(both); //this will print the both array with the new items added
//tuple
let cordinates = [20, 30, "hi"]; //this is a tuple that can contain a number, a number and a string
let cor = [20, 30]; //this is a tuple that can only contain two numbers
cor.push(40); //this will add 40 to the cor tuple but it will not give an error because tuples in TypeScript are implemented as arrays and they can have additional elements added to them. However, it is important to note that the type of the additional element must match the type of the existing elements in the tuple. In this case, since the existing elements in the cor tuple are numbers, adding a number like 40 is allowed.
console.log(cor); //this will print the cor tuple with the new item added
//reference type(non-primitive type):objects
const user = {
    firstName: "Shanjidul",
    middleName: "Islam",
    lastName: "Nuhin"
};
console.log(user);
//this is called type annotation for objects. 
// We have defined the type of the user object and its properties. 
// This helps us to ensure that the user object has the correct structure and types for its properties.
//if i try to remove any of the name (like  firstName, middleName, lastName) this will shows error.
const user2 = {
    firstName: "Shanjidul",
    lastName: "Nuhin"
};
console.log(user2);
//in this case we have made the middleName property optional by adding a question mark (?) after it. 
// This means that the user2 object can have the middleName property, but it is not required. 
// Therefore, we can create a user2 object without the middleName property and it will not give an error.
const user3 = {
    firstName: "Shanjidul",
    middleName: "Islam",
    lastName: "Nuhin"
};
console.log(user3);
//in this case we have defined the type of the user3 object and its properties with specific string values. 
// This means that the user3 object must have the firstName property with the value "Shanjidul", 
// the middleName property with the value "Islam", and the lastName property with the value "Nuhin". 
// If we try to create a user3 object with different values for these properties, it will give an error.
//{This is called literal types}
const user4 = {
    firstName: "Shanjidul",
    middleName: "Islam",
    lastName: "Nuhin"
};
console.log(user4);
//in this case we have defined the firstName property as readonly. 
// This means that once the firstName property is assigned a value, it cannot be changed. 
// If we try to change the value of the firstName property, it will give an error. 
// However, we can still change the values of the middleName and lastName properties since they are not marked as readonly.
//{This is called access modifiers}
// user4.firstName="John";//this will give an error because firstName is readonly
// user3.firstName="John";//this will give an error because firstName is a literal type and it can only have the value "Shanjidul"
// user2.firstName="John";//this will work because firstName is a string type and it can have any string value
//# sourceMappingURL=nonprimitive.js.map