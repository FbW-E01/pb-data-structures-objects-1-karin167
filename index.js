// 1
// let person = {
//     fullName: 'Karin Yahud',
//     age :26,
//     city: 'Berlin'
// }
// for (let key in person){
//     console.log(key,person[key]);
// }


//2 ( 2 ways...)

 const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
//  foo: function () {
//      let arr = [];
//     for (let key in getObjectValues){
//         arr.push(getObjectValues[key]);
        
//     }
//     return arr;
//  }

}

//way number one

//  const foo = function (getObjectValues) {
//      let arr = [];
//     for (let key in getObjectValues){
//         arr.push(getObjectValues[key]);
        
//     }
//     return arr;
//  }
 

//way two
  const getObjectValues2 = obj => {
    return Object.entries(obj);
 };
  console.log(getObjectValues2(getObjectValues));

//   keys 
//   entries
//   values


///3

let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: 'Paris',
  fun: function () {
    let test = this.firstName + " " + this.lastName + ' is a ' + this.age + ' years old ' + this.job + ' in ' + this.city;
    return test; 
  }
}
console.log(person.fun());



// function sum (a, b ){
//     return a * b
// }
// console.log(sum(2,4));

const  objectTo = obj => Object.entries(obj);
console.log(objectTo({
  A: 1,
  B: 2,
  C: 3,
}
));


