
let courses=["mern","python","qa","django","AI"];
console.log(courses);

let numbers=[1,2,3,4,5];//Wrong to not mix data type
numbers=[1,2,3,4,"five"];

// let users=["ram","shyam","hari","seeta"];
// console.log(users);

let brands={
    brandName:"Chanel",
    CEO:"XYZ",
    establishedDate:"1990-12-03"

}
console.log(brands);

// let users={
//     name:"Lekhika",
//     phoneNumber:982378878,
//     address:
//     {
//         permanentAddress:"Biratnagar",
//         temporaryAddress:"Jawalakhel"
//     }
// }
// console.log(users);

let users=[
{
    name:"ram",
    age:10,
    address:{
        permanentAddress:{
            district:"abc",
            ward:-1,//Change this to 1
            tole:"wrong-tole"//Change this to right tole
        },
        temporaryAddress:{
            district:"kathmandu",
            ward:10,
            tole:"abz-tole"
        },
    }
},
{
    name:"hari",
    age:20,
},
{
    name:"shyam",
    age:10, 
},

];
//Change the values of ward and tole
users[0].address.permanentAddress.ward=1;
users[0].address.permanentAddress.tole="Right-tole"

console.log(users);