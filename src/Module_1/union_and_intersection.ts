//Union '|' union is or

type dashboard= 'admin'|'user'| 'guest'
const userDashboard=(role:dashboard)=>{
    if(role==='admin'){
        return 'Welcome to the admin dashboard';
    }
    else if (role==="user"){
        return 'Welcome to the user dashboard';
    }
    else {
        return 'Welcome to the guest dashboard';
    }
}
console.log(userDashboard('admin'));//this will print "Welcome to the admin dashboard"
console.log(userDashboard('user'));//this will print "Welcome to the user dashboard"
console.log(userDashboard('guest'));//this will print "Welcome to the guest dashboard"

//Intersection '&' intersection is and "&"

type father={
    hairColor:string,
    skinColor:string,
    height:string
    eyeColor:string
}
type mother={ 
    hairColor:string,
    skinColor:string,
    height:string
    eyeColor:string
}
const cfather:father={
     hairColor:"Black",
    skinColor:"Brown",
    height:"5'10\"",
    eyeColor:"Black"
}
const cmother:mother={
    hairColor:"Brown",
    skinColor:"White",
    height:"5'6\"",
    eyeColor:"Brown"
}
type child=father&mother;//this will create a new type called child which is the intersection of father and mother
const firstChild:child={
    hairColor:"Black",
    skinColor:"Brown",
    height:"5'8\"",
    eyeColor:"Black"
}

console.log((firstChild));//this will print the firstChild object