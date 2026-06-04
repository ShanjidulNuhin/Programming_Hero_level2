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
