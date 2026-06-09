//? is ternary operator which helps decision making in a single line of code

//for example if I wite normal if else code like this:
const adult=(age:number)=>{
    if (age>=18){
        return "You are an adult";
    }else{
        return "You are not an adult";
    }
}
console.log(adult(20));//this will print "You are an adult"
console.log(adult(15));//this will print "You are not an adult"


//but if i want to write the same code in a single line using ternary operator then I can write it like this:
const adult2=(age:number)=>{
    return age>=18 ? "You are an adult" : "You are not an adult";
}
console.log("\n"+ adult2(20));//this will print "You are an adult"
console.log(adult2(15));//this will print "You are not an adult"

//?? is nullish coalescing operator which helps to provide a default value when the value is null or undefined

//for example if I wite normal code like this:
const getName=(name:string|null)=>{
    if (name){
        return name;
    }else{
        return "Unknown";
    }   
}
console.log("\n"+ getName("Shanjidul"));//this will print "Shanjidul"
console.log(getName(null));//this will print "Unknown"

//but if i want to write the same code in a single line using nullish coalescing operator then I can write it like this:
const getName2=(name:string|null)=>{
    return name ?? "name is by default unknown";
}
console.log("\n"+ getName2("Shanjidul"));//this will print "Shanjidul"
console.log(getName2(null));//this will print "name is by default unknown"

//this nullish coalescring operator only orks in null or undefined gluss but if i write getName2("") it will print "" because "" is not null or undefined it is an empty string. so if i want to provide a default value for empty string also then i can use ternary operator like this:

//these are some more example of ternary operator and nullish coalescing operator:
const loginwithternary=(islogin:boolean)=>{
    return islogin ? "You are not logged in yet" : "You are logged in";
}
const loginwithnullish=(islogin:boolean|null)=>{
    return islogin ?? "You are not logged in yet";
}

console.log("\nTernary operator: "+ loginwithternary(false));//this will print "You are not logged in yet"
console.log("Nullish coalescing operator: "+ loginwithnullish(null));//this will print "You are not logged in yet"


//?. is optional chaining operator which helps to access the properties of an object without getting an error if the property does not exist
const me:{
    name:string,
    age:number
    education?:string //this is an optional property which may or may not exist in the object
}={
    name:"Shanjidul",
    age:21
}
console.log("\nmy name is " + me.name+ " and I am " + me.age + " years old");//this will print "Shanjidul"
const education=me.education;
console.log(education);//this will undefine because the education property does not exist in the me object
//this can be crash our application.so the best way is use optional chaining operator like this:
const education1=me?.education;
console.log(education1);//this will print undefined but it will not crash our application because we are using optional chaining operator.