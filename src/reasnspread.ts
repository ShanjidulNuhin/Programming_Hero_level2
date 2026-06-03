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