//function(Normal,Arrow)

//normal function
function add(num1:number,num2:number){
    return num1+num2;
}
console.log(add(2,3));//this will print 5
//in this case, num1 and num2 will be number type because we have defined the type of the parameters.
//if we do not define anything typescript will define the num1 and num2 as any type.

function add2(num3:number,num4:number):number{
    return num3+num4;
}
console.log(add2(4,5));//this will print 9
//in this case, we have defined the return type of the function as number. 
// This means that the function must return a number value. 
// If we try to return a value of a different type, it will give an error.

//arrow function
const add3=(num5:number,num6:number):number=>{
    return num5+num6;
}
console.log(add3(6,7));//this will print 13

//method{define a function inside an object}
const info={
    name:"Shanjidul",
    age:21,
    balance:0,
    addbalance(value:number){
        const totalBalance=this.balance+=value;
        return totalBalance;
    }
}
info.addbalance(100);
console.log(info.balance);//this will print 100
//in this case, we have defined a method called addbalance inside the info object.
// The addbalance method takes a number parameter called value and adds it to the balance property of the info object. 
// It then returns the total balance after adding the value.

//function in loop(callback function)
const arr:number[]=[2,4,6,8];
const newArr=arr.map((num:number):number=>{//map() repeat loops for every elements in every array and return a new array
    return num*num;
});
console.log(newArr);//this will print [4,16,36,64]
//in this case, we have used the map method to create a new array called newArr. 
// The map method takes a callback function as an argument, which is executed for each element in the arr array. 
// The callback function takes a number parameter called num and returns the result of multiplying num by itself. 
// The newArr array will contain the results of applying the callback function to each element in the arr array.