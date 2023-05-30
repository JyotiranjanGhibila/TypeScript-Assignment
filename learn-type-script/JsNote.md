//1  Hoisting in JS

// console.log(x)

// var x=10
// getName()
// function getName(){
//      console.log('Hello')
// }
//2  How function work in JS and Enviroment Variable

// var x=1
// a()
// b()
// console.log(x)
// function a(){
//      var x=10
//      console.log(x)
// }

// function b(){
//      var x=100
//      console.log(x)
// }

//3  This Key work and Sortest Js Programm
//  window===this   true
// -> whenever any js programm is run a global execution context , gloabal Object and alogn with 'this ' variable is created

//4 undefined vs notdefined
// -> undifined indicates that a variable has been declared but not assign any value, while 'not difined' indicates that a variable does not exis.

// console.log(x)
// var x=10
// console.log(x)
// console.log(xx)

//6 The scope chain and lexical enviroment

// function parent(){
//     var x=102
//     child()
//     function child(){
//         console.log(x)
//     }
// }
// parent()

//7 let const and Temporal Dead Zone
//  console.log(x)        //can't acces x before initialization
//  let x=12            //different memory alocation for let and const
//  var zz=220           // global memory allocation

//8 Block Scope and Shadowing in JS
// ->block is defined by {} .
// -> block is also known as compund statement
// -> A block scope variable means that the variable difined within a block will not accessible from outside the block

// Shadowing
//  let x =100
//  {
//     x=10
//  }
//  const y=200
//  {
//     const y=20
//  }
//  var z=300
//  {
//     var z=30
//  }

//9 Closures

// A closures is the combinatin of a function bundled together with the lexixcal enviroment.

//   function x(){
//     var a=12
//     function y(){
//         console.log(a)
//     }
//     y()
//   }
//   x()

//   function paren(){
//     var x=45;
//     function child(){
//         console.log(x)
//     }
//     return child
//   }

//   var z=paren()
//   console.log(z)
//   z()

//    function z(){
//     var a=100
//     function y(){
//         var b=50
//         function x(){
//             console.log(b, a)
//         }
//         x()
//     }
//     y()
//    }
//    z()

// Uses of Closures :- module design pattern , currying , memoize , maintain state in async world setTimeouts , iterators and many more

// function x(){
//    var i=120
//    setTimeout(function(){
//       console.log(i)
//    },3000)
//    console.log('JS not wait for other ')
// }
// x()

//Closures interview ques

// function x(){
//    for(var i=1;i<=5;i++){
//       setTimeout(function(){
//          console.log(i)
//       },i*1000)
//    }
// }            //o.p-> 6 6 6 6 6 because var is global scoped
// x()

// function x(){
//    for(let i=1;i<=5;i++){
//       setTimeout(function(){
//          console.log(i)
//       },i*1000)
//    }                   //o.p-> 1 2 3 4 5 because let is blocked scope and it create new copy every time this loop is execute.
// }
// x()
//smart interview ask do this without usign let variable

// function grandparen(){
//    for(var i=1; i<=5; i++){
//       function parant(val){
//          setTimeout(function(){
//             console.log(val)
//          },val*1000)
//       }
//       parant(i)
//    }
// }                     //o.p-> 1 2 3 4 5 because its form a closures
// grandparen()

// function Outer(){
//    var x=10;
//    function Inner(){
//       console.log(x)
//    }
//    return Inner;
// }
// var close=Outer();
// close()

// function Outer(b){
//    function Inner(){
//       console.log(x,b)
//    }
//    let x=15;
//    return Inner
// }
// Outer("Hello JS")()
//  Advantages of Closures are data hiding ,data encapsulation , etc.

//data hiding

// function Counter() {
//   let C = 0;
//   this.increment = function () {
//     C++;
//     console.log(C);
//   };
//   this.decrement = function () {
//     C--;
//     console.log(C);
//   };
// }

// let Count = new Counter();

// Count.increment(); //o.p 1 2 1
// Count.increment();
// Count.decrement();
//Disadvantages of Closures : The variables declared inside a closure are not garbage collected.
//Too many closures can slow down the application. (duplication of code in the memory).

//9i ) Garbage collectin in javascript
// Some high-level languages, such as javascript , utilize a form of utomatic memory management
// known as garbage collection (GC). The purpose of garbage collector is to monitor memory
// allocation and determine when a block of allocated memory is no longer needed and
// reclaim it.
//ex:-
//  function x(){
//    var a=5,b=20
//    function y(){
//       console.log(a)
//    }
//    return y
//  }
// x()()
// console.log(b)

// 11) Callback function : First class function || First calss citizens

// A callback function is a function passed into another function as an argument, wich is then invoked
// inside the outer function to complete some kind of action or

//ex1
// setTimeout(function(){
//   console.log("after 5 sec")
// },5000)

// function x(y){
//   console.log("x")
//   y()
// }

// x(function y(){
//   console.log("y")
// })
//ex2

// document.getElementById("clickme").addEventListener("click",function xyz(){
//   console.log("btn clicked")
// })
//ex3
// function closerFun(){
//   let count=0
//   document.getElementById("clickme").addEventListener("click",function xyz(){
//     console.log("btn clicked",++count)
//   })
// }
// closerFun()

//12) Event Loop:

//ex1

// console.log("start")

// setTimeout(function cbT(){
//    console.log("cb after 5sec ohh really ?")
// },5000)

// fetch(`https://jsonplaceholder.typicode.com/posts/1`)
// .then(function cbF(){
//     console.log("geting data after server return")
// })

// console.log("end")

//ex2 concurrency model in js:
// javascript concurrency model based on an event loop, wich basically execute the code and
// process event. JavaScript handle concurrency by default with an asyncronous programming
//model using event loop , callback , promises or asyn await

// console.log("start")

// setTimeout(function cbT(){
//    console.log("cb after 5sec ohh really ?")
// },5000)
// console.log("end")

// let startTime=new Date().getTime()
// let endTime=startTime;

// while(endTime<startTime+10000){
//     endTime=new Date().getTime()
// }
// console.log("while exprire")

//13) Higher Order Function || Functional programming:
// A function wich takes a another function as an argument or return a function doing some action .

//ex1

// function x(){
//     console.log("x is the callback function ")
// }
// function y(x){
//     x()
//     console.log("y is the higher order function ")
// }
//ex 2 pro)

// let radius = [3, 1, 5];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference=function (radius){
//     return 2*Math.PI*radius
// }
// const diameter=function (radius){
//     return 2*radius
// }

// function calculation(radius, logic) {
//   let res = [];
//   for (let i = 0; i < radius.length; i++) {
//     res.push(logic(radius[i]));
//   }
//   return res;
// }
// console.log(calculation(radius, area));
// console.log(calculation(radius, circumference));
// console.log(calculation(radius, diameter));

//Higher order function are Map, Filter , Reducer
//       Map
//ex1-
//    let arr=[2,4,5]
//    let double=function(x){
//     return x*2
//    }
//    let res=arr.map(double)
//    console.log(res)
// ex2- convert to binary
//   let output=arr.map(function(x){
//     return x.toString(2)
//   })
//   console.log(output)

//      Filter

let arr = [2, 9, 77, 0, 8];
// let isOdd=function(x){
//     return x%2!==1
// }
// // let res=arr.filter((isOdd))
// let res=arr.filter(function(x){
//     return x%11==0
// })
// // let res=arr.filter((x)=>x==0)
// console.log(res)

// Reducer : this function takes two argument first is a function and another is a value wich takes accumulator

// const res=arr.reduce(function(acc,curr){
//     acc=acc+curr
//     return acc
// },0)
// console.log(res)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

// let users = [
//   { firstName: "Bikash", lastName: "Ghibil", age: 21 },
//   { firstName: "Amit", lastName: "Pal", age: 27 },
//   { firstName: "Santosh", lastName: "Sharma", age: 25 },
//   { firstName: "Ranjan", lastName: "Kumar", age: 23 },
//   { firstName: "Rev", lastName: "Junghare", age: 21 },
// ];

// let res=users.reduce(function(acc,curr){
//       if(acc[curr.age]){
//         acc[curr.age]++
//       }else{
//         acc[curr.age]=1
//       }
//       return acc
// },{})
// console.log(res)

//14)
// Call Apply Bind:-
// Call:- function borrowing from other objects and use it with the data of some other obj.
// and pass the arguments indivisually
// Apply:- pass the argumnets in a array list also ['s','x','d'] like so on

// let name1={
//     firstName:"Bikash",
//     lastName: "ghibila",
//     printFullName:function(){
//         console.log(this.firstName+" "+this.lastName)
//     }
// }
// name1.printFullName()
// let name2={
//     firstName:"x",
//     lastName: "y",
// }
// name1.printFullName.call(name2)

//15) What is callback hell::- 
// -> An asyncronous function requires callback as a return parameter.
//when multiple asyncronous functions are chained together then the callback
// hell situatin comes up.
// -> To avoid callback hell, envent queues and promises are used. 

//16)Promise: A promise is an object represent the eventual complition of
// an asyncronous operation ex- let promise=fetch(`api.com`)

// callback hell and inversion of controll :

// const cart = ["shoes", "pants", "kurta"];

//  createOrder(cart,function(orderId){
//     proceedToPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo,function(){
//             updateWalletBalance();
//         })
//     })
//  })

//  // pyramid of dom
//  //promis chain:-
//  createOrder(cart)
//  .then((orderId)=>proceedToPayment(orderId))
//  .then((paymentInfo)=>showOrderSummary(paymentInfo))
//  .then((paymentInfo)=>updateWalletBalance(paymentInfo))
// own Promise

// const promise = createOrder(cart);
// console.log(promise);

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     //createOrder  validatedCart orderid
//     if (!validateCart(cart)) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//     // login for createOrder
//     const orderId = "1544";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 2000);
//     }
//   });
// }

// function validatedCart(cart) {
//   return true;
// }
