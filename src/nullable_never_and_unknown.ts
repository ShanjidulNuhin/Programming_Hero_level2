//nullable type

const getuser=(input:string|null)=>{
    if (input){
        return input;
    }
    else{
        return "Unknown";
    }
}
console.log(getuser("Shanjidul"));//this will print "Shanjidul"


//unknown type
const product=(input:unknown)=>
{
    if (typeof input==='number'){
        return `The product of the number is ${input}`;
    }
    else if (typeof input==='string'){
        return `The length of the string is ${input.length}`;
    }
    else{
        return "Invalid input";
    }
}
console.log(product(5));//this will print "The product of the number is 10"
console.log(product("Shanjidul"));  //this will print "The length of the string is 9"
console.log(product(true)); //this will print "Invalid input"

//never type
const throeError=(msg:string):never=>{
    throw new Error(msg);
}
throeError("This is an error message");//this will throw an error with the message "This is an error message" 
//this fnction will never return anything because it always throws an error.
//So we can use never type to indicate that this function does not return anything.
