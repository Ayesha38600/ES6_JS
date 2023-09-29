//Destructuring the array in JavaScript simply means extracting multiple values from data stored in objects and arrays.


// ye nichy wala poorana method h 
// let user = ["Aysh" , 20];
// let name = user[0];
// let age = user[1];
// console.log(name);
// console.log(age);









// ye destructuring wala method h dekho kitna chota and easy hogya 
// let user = ["Aysh" , 20 , "karachi"] ;
// let [name , age , city] = user
// console.log(name);
// console.log(age);
// console.log(city);

// when we remove city value so it will give undefined 
// let user = ["Aysh" , 20 ] ;
// let [name , age , city] = user
// console.log(name);
// console.log(age);
// console.log(city);

// when we default value set krna chahy 
// let user = ["Aysh" ,  , "karachi" ] ;
// let [name , age =20 , city] = user
// console.log(name);
// console.log(age);
// console.log(city);




// let user = ["Aysh" ,40  , "karachi" ] ;   // ab ye 40 age lega 
// let [name , age =20 , city] = user
// console.log(name);
// console.log(age);
// console.log(city);






// also work in nested Array 
// let user = ["Aysh" ,40  , ["female" , 250000] ];
// let [name , age , [gender , salary]] = user ;

// console.log(name);
// console.log(age);
// console.log([gender , salary]);














//in rest operator
// let user = ["Aysh" ,40  , "karachi"];
// let [name , ...argum] = user
// console.log(name);
// console.log(argum);










///in fn

// function user([name , age , city]) {
//     console.log(name);
//     console.log(age);
//     console.log(city);
    
// }
// user(["Aysh" ,40  , "karachi"]);

// or 



function user() {
   return ["Aysh" ,40  , "karachi"];
    
}
let [name , age , city] = user();
console.log(name);
console.log(age);
console.log(city);