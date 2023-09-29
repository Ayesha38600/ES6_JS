//modules ki help sy hum ek file k fn , class , variables kisi aur file mai use krskty h
//resuse of code is done by modules
//reloading of html file will be fast
// modules 2 tra k hoty ... import , export  
// variable 
// import { message } from "./library.js";
// console.log(message);
// document.body.innerHTML = message;





// function 
// import { user } from "./library.js";
// user("Aysh");











//class
import { test } from "./library.js";
let a= new test();





//{message as msg}  istrha ye fn message ka humny rename krdya

//import * as Aysh from "./library.js";     is sy humny sary fn , class etc leli ab jab v use krna hoga aisy krna console.log(Aysh.message)  etc 













// default fn 
import{default as Ghaziyan} from "./library.js";
Ghaziyan();