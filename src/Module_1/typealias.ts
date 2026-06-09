//type alias
//Type alias is a way to give a name to a type. 
// It is used to create a new name for a type. 
// It can be used to create a new name for a primitive type, an object type, an array type, or a union type.

type user={
    ID: number,
    name:{firstName:string,
        middleName:string,
        lastName:string
    },
    age:number,
    gender:string,
    contactNo:number,
    HomeAddress:{
        country:string,
        district:string,
    }
}
const fahim:user={
    ID:2,
    name:{
        firstName:"Fahim",
        middleName:"Islam",
        lastName:"nai"
    },
    age:25,
    gender:"Male",
    contactNo:1234567890,
    HomeAddress:{
        country:"Bangladesh",
        district:"Dhaka"
    }
}
console.log(fahim);//this will print the fahim object

//in arrow function
type addFunction=(a:number,b:number)=>number;
const add:addFunction=(a,b)=>
     a+b;//this will return the sumetion of a and b
console.log(`the sum of the number is ${add(5,10)}`);//this will print 15

// normal function
type mulNumber=(c:number,d:number)=>number;
const mul:mulNumber=(c,d)=>{
    return c*d;
}
console.log(`the multiplication of the number is ${mul(5,10)}`);//this will print 50