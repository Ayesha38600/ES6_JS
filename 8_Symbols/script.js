// Symbol is a new primitive data type introduced in ES6.
// It's used to create unique and

// non-enumerable(non-enumerable" means that a property is hidden and won't show up when you try to list or count the properties of an object) property keys for objects.


// Symbols help prevent naming collisions in objects and libraries.
// // Example:



// Create a Symbol
const mySymbol = Symbol('description');

// Use the Symbol as an object property key
const obj = {
  [mySymbol]: 'This is a symbol property'
};

// Access the property using the Symbol
console.log(obj[mySymbol]); // Output: This is a symbol property















//WeakMap

// WeakMap is used in JavaScript for specific scenarios where you want to associate data with objects without preventing those objects from being garbage collected when they are no longer needed.
// Create a WeakMap
const weakMap = new WeakMap();

// Create objects to use as keys
// const obj1 = {};
// const obj2 = {};

// // Associate data with these objects in the WeakMap
// weakMap.set(obj1, 'Data for obj1');
// weakMap.set(obj2, 'Data for obj2');

// // Retrieve data from the WeakMap
// console.log(weakMap.get(obj1)); // Output: Data for obj1
// console.log(weakMap.get(obj2)); // Output: Data for obj2

// Note: If obj1 and obj2 are no longer referenced, the associated data can be garbage collected.







//weakSet

// WeakMap stores key-value pairs, while WeakSet stores only object references. 


// Create a WeakSet
const weakSet = new WeakSet();

// Create objects
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Check if an object exists in the WeakSet
console.log(weakSet.has(obj1)); // true

// Remove an object from the WeakSet
weakSet.delete(obj2);

// Check if an object still exists in the WeakSet
console.log(weakSet.has(obj2)); // false

// Now, if obj1 and obj2 are no longer referenced elsewhere, they can be garbage collected, and the WeakSet will automatically remove them.
