//generators are fn 
//ye aisy fn hoty h jinki execution ko ap pause and resume krskty h
//done = false means ye fn completely execute ni hua h 
//star fn k sath b likh skty and fn k name k sath b

// function* simpleGenerator() 
// {
//     console.warn("Simple Generators")
//     yield 20
//     yield 30
//     yield 40
    
// }
// let SG =simpleGenerator()
// console.warn(SG.next());  //log hamay ek zyada bar krna hota h q k js ko malom ni h k ye fn execute hogya k nhi so yiled ki values 3 thi so humny consol.warn 4 dafa kia ab isny done = true dia 4th time mai
// console.warn(SG.next());
// console.warn(SG.next());
// console.warn(SG.next());
























//by default done= true hota
// function* simpleGenerator() 
// {
   
    
// }
// let SG =simpleGenerator()
// console.warn(SG.next());
















//real time example(Generation of Dynamic id)
function* simpleGenerator() 
{
   let i =0;
   while (true) 
   {
    i++;
    yield i
   
    
   }
    
}
let SG =simpleGenerator()
function newIdGenerate() {
    document.getElementById("newId").innerText = SG.next().value
    
}