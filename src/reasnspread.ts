//Spread operators in arrays
const elakafriends=["Rahim","Karim"];
const schlfrnds=["sakib","Bilu","jobbar"];
const clgfrnds=["Rofik","shofik","tofik"];

const allfriends=[...elakafriends,...schlfrnds,...clgfrnds];//this is the spread operator which is used to combine multiple arrays into one array.
console.log(allfriends);

//Spread operators in objects
const user={ID:23,
    name:"Shanjidul",
    age:21
};
const otherInfo={Hobby: "Playing Video games",
    freeTime:"Watching Anime"
};
const info={...user,...otherInfo};//this is the spread operator which is used to combine multiple objects into one object.
console.log(info);

//Rest operators (function)
const sendInvite=(friend1:string,freind2:string,frinde3:string)=>{
    console.log(`invite ${friend1}, ${freind2}, ${frinde3} to the party`);
}
sendInvite("Rahim","Karim","Rofik");
//Here I use arrow function

//same thing with loop(forEach)
const sendInvite2=(...friends4:string[])=>
{
    friends4.forEach((friends4:string)=>
    console.log(`invite ${friends4} to the party`));
}
sendInvite2("Rahim","Karim","Rofik","Shofik","Tofik","Sakib","Bilu","Jobbar");
//here i use forEach loop. now i can push as many string values as i want in the single "friends4" parameter