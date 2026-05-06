let name :string="Nuhin";
//if i do not use the (:string) type script will understand the type of name as string because of the value assigned to it
name="Shanjidul Islam";//this will change the value of name to Shanjidul Islam
//if i try to assign a number or boolean to name like name=123 or name=true it will give an error because name is of type string and cannot be assigned those values
console.log(name);

let x:undefined;//this is an undefined type variable
//if i try to assign a string, number or boolean to x like x="abc" or x=123 or x=true it will give an error because x is of type undefined and cannot be assigned those values
console.log(x);

let y;//if i do not assign any value to y it will be of type any and can be assigned any value like y="abc" or y=123 or y=true without giving an error
y="abc";//this will assign the string "abc" to y
console.log(y);

let userID=123//this is a number type variable
userID=456;//this will change the value of userID to 456
//if i try to assign a string or boolean to userID like userID="abc" or userID=true it will give an error because userID is of type number and cannot be assigned those values
userID.toFixed(2);//this will convert the number to a string with 2 decimal places

console.log(userID.toFixed(2));//this will print the userID with 2 decimal places
//toFixed is a method that can be used on number type variables to convert them to a string with a specified number of decimal places. In this case, it will convert userID to a string with 2 decimal places.

let isActive=true;//this is a boolean type variable
isActive=false;//this will change the value of isActive to false
//if i try to assign a string or number to isActive like isActive="true" or isActive=1 it will give an error because isActive is of type boolean and cannot be assigned those values
console.log(isActive);