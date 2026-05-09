let bazar =["eggs", "milk", "bread"];//this is an string type array
bazar.push("butter");//this will add butter to the bazar array
bazar.pop();//this will remove the last item from the bazar array which is butter

let both =["eggs", 123, true];//this is an array that can contain both string, number and boolean type values
both.push("milk");//this will add milk to the both array
both.push(456);//this will add 456 to the both array
both.push(false);//this will add false to the both array
console.log(both);//this will print the both array with the new items added

//tuple
let cordinates=[20,30,"hi"];//this is a tuple that can contain a number, a number and a string
let cor:[number,number]=[20,30];//this is a tuple that can only contain two numbers
cor.push(40);//this will add 40 to the cor tuple but it will not give an error because tuples in TypeScript are implemented as arrays and they can have additional elements added to them. However, it is important to note that the type of the additional element must match the type of the existing elements in the tuple. In this case, since the existing elements in the cor tuple are numbers, adding a number like 40 is allowed.
console.log(cor);//this will print the cor tuple with the new item added