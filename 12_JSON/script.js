// https://www.w3schools.com/whatis/whatis_json.asp 
// see the above w3school tutorial 

// JSON stands for JavaScript Object Notation jisky throgh ap data to browser to server vice versa send krty h

// JSON is a text format for storing and transporting data

// JSON is "self-describing" and easy to understand

// name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
// "firstName":"John"//bas 2 cheexy hoty h name and value



var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);
console.log(obj);


