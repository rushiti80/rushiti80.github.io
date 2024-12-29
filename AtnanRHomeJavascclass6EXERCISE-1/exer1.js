// Number type
let number = 42;
console.log("Number:", number); // or alert("Number: " + number);

// String type
let string = "Hello, world!";
console.log("String:", string); // or alert("String: " + string);

// Boolean type
let boolean = true;
console.log("Boolean:", boolean); // or alert("Boolean: " + boolean);

// Object type
let person = {
    name: "Alice",
    age: 30
};
console.log("Object:", person); // or alert("Object: " + JSON.stringify(person));

// Array type
let array = [1, 2, 3, 4, 5];
console.log("Array:", array); // or alert("Array: " + array);

// Null type
let nullValue = null;
console.log("Null:", nullValue); // or alert("Null: " + nullValue);

// Undefined type
let undefinedValue;
console.log("Undefined:", undefinedValue); // or alert("Undefined: " + undefinedValue);

// Symbol type
let symbol = Symbol('unique');
console.log("Symbol:", symbol); // alert cannot print Symbol directly, but we can show its description
console.log("Symbol description:", symbol.description);

// BigInt type
let bigIntValue = 9007199254740991n;
console.log("BigInt:", bigIntValue); // or alert("BigInt: " + bigIntValue);
