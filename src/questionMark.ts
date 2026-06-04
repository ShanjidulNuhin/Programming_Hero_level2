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