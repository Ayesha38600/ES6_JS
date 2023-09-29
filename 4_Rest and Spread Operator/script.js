// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 1));














//Rest 
// (all arguments ko collect krky array bna k dega)



// function add(a, b ,...restOperator) {
//     console.log(restOperator);
   
//     return null;

// }

// console.log(add(3, 1 , 8, 9, 5,7 ,0));   // 8, 9, 5 , 7 , 0 rest operators h thats why array miljana h baqi rest operators ka q k uska respective parameter nhi h 























//spread 
//ye collect ni balky spread krega .








let names = ["Aysh" , "Ghaziyan" , "Umme Hani"];
function persons(name1 , name2, name3) {
console.log(name1 , name2, name3);
    
}
persons(names[0], names[1] , names[2]); //without spread
persons(...names); //with spread












//Rest operator and spread also object mai b use hota h
//Rest
let students = {
     names: "Aysh" ,
     age :20 ,
     hobby :"Mountain Climbing"

}

// // let age = students.age;  1
// // let {age} = students; //2 ,,,,, 1 and 2 equal h bilkul
// let {age , ...restStudents} = students;     //hum ye chahty h k age k elawa sara ek dusry object mai miljy to ye tariqa use krngy
// console.log(restStudents);























//spread
let newStudent = {
    ...students,   // poory upr waly students object ki value yhn daldi newStudent mai 
    names:"Syed Muhammad Yazdan"   // names phly Aysh ta ab ye hogya edit kia      
}
console.log(newStudent);