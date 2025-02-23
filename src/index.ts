let userName: string = "Vijay";
let age: number = 25;
let isExist: boolean = true;
let hobbies: string[] = ["Reading", "Coding", "Travelling"];
let mixed: (string | number)[] = ["Vijay", 25, "Reading"];
let mixed2: any[] = ["Vijay", 25, "Reading", true];
let person: object = {
  name: "Vijay",
  age: 25,
  isExist: true,
};

let person1: object = {
  name: "ajith",
  age: 25,
  isExist: true,
};


console.log(userName, age, isExist, mixed, mixed2, person);