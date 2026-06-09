//Destructuring two types 
// 1.Object:Object destructuring
// 2.Array:array destructuring

//Object destructuring
const user={
    ID:1,
    name:{
        fName:"Shanjidul",
        mName:"Islam",
        lName:"Nuhin"
    },
    age:21,
    gender:"Male"
}
//destructuring the user object
const {name}=user;//this will destructure the name property from the user object and assign it to a new variable called name.
console.log(name);//this will print {fName: "Shanjidul", mName: "Islam", lName: "Nuhin"}

const {name:{fName}}=user;//this will destructure the fName property from the name object and assign it to a new variable called fName.
console.log(fName);//this will print "Shanjidul"

// If i try to write the type like "const {gender:string}=user;" it will give an error because we cannot define the type of a variable while destructuring an object.
// we can use different name like const {gender:myGender}=user; this will destructure the gender property from the user object and assign it to a new variable called myGender.
// then we have to wite console.log(myGender);
// for example:

const{gender:myGender}=user;
console.log(`I am a ${myGender}`);//this will print the gender

//Array destructuring
const freinds=["Rahim","Karim","Rofik"];
const [A,B,C]=freinds;//this will destructure the elements of the freinds array and assign them to new variables A, B, and C.
console.log(A);//this will print "Rahim"
console.log(B);//this will print "Karim"
console.log(C);//this will print "Rofik"