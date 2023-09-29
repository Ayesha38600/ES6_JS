//./ iska matlb h k relative path dery
// variable 
export let message = "ES6 modules";













// function 
export function user(name) {
    console.log(`hello ${name}`);
    
}












//class
export class test{
    constructor(){
        console.log("constructor Method");
    }
}











//2nd method
// export{message , user , test}; //ye 2nd method h and phir upr 3no sy export hata do aisy bar bar likhny ki need ni









// ......................default fn ..ye anonymous fn hota h and ye poori library wali file ko represent kra
export default function () {
console.log("hello");
    
}