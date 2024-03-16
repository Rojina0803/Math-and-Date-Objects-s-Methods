//Math Objects--> methods

console.log(Math.round(4.3));
console.log(Math.trunc(13.37));
console.log(Math.trunc(-0.123));
console.log(Math.fround(5.05));
console.log(Math.ceil(4.01));//always take highest value
console.log(Math.floor(4.99)); //always take lowest value
console.log(Math.sqrt(81));
console.log(Math.min(1,2,3,4,5,0.9))
console.log(Math.max(23,45,67,90,9));


console.log(Math.random())// values is between 0-1
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10) + 1)


const min= 10;
const max= 20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min)

console.log(Math.hypot(3, 4));
console.log(Math.cbrt(64));
console.log(Math.sign(3));
console.log(Math.sign(-3));
console.log(Math.sign(0));

//Date Objects

let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let createdate= new Date("2024-3-16")
// console.log(createdate.toDateString());
console.log(createdate.toLocaleString());

let timestamp= (Date.now()/1000);
console.log(timestamp.toLocaleString());

let newdate= new Date()
console.log(newdate.getFullYear());
console.log(newdate.getDay());
console.log(newdate.getMonth() + 1);


console.log(newdate.toLocaleString('default',{ 
    weekday:"long",
    // timeZone:'GMT+5:45'
}))

const xmas95 = new Date(1995, 11, 25, 9, 30, 0);
console.log(xmas95.toDateString());

// const today = new Date();
// const endYear = new Date(2024, 2, 16, 5, 29, 59, 999); 
// endYear.setFullYear(today.getFullYear()); 
// const msPerDay = 24 * 60 * 60 * 1000;
// let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
// daysLeft = Math.round(daysLeft); 
// console.log(daysLeft);


const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
console.log(ipoDate);



