// classes 
// kisi v object ko creat krny ka template bnaty h and wo template ye btata h k kisi obj ki kia kia properties and fns hoskty h 
// Data secure rehta h 
//js mai ye special fn hota h 
//constructor kisi v class ka wo fn hota h jo sabsy phly execute hota h and uska kamm hota h k class ki properties ko initialize krna 



// har class k pas only one constructor hota h us sy zyada ni hoskty


// syntax 
// class ClassName {
//     constructor(parameters) {
//       // Constructor code here
//     }
  
//     method1() {
//       // Method code here
//     }
  
//     method2() {
//       // Method code here
//     }
  
//     // Additional methods and properties can be defined here
//   }
  




class person {
constructor (uName , uAge)
   {
    this.name = uName ;
    this.age = uAge;
   }
   details(){
    console.log(`the name of person is ${this.name} and ${this.age} is the Age of `);
   }
}

let p = new person("Aysh" , 20)
p.details();
let q = new person("Ghaziyan" , 27)
q.details();

// is sy dekho ye faida hua ek bar class bnali aur bar bar use krlo like p , q , r etc 