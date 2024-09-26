"use strict";
//
//
// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= this.maxPrice) {
//       this.price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// const object = {
//   message: "Hello world",
//   getMessage() {
//     const message = "Hello earth";
//     return this.message;
//   },
// };
// console.log(object.getMessage());

// class Car {
//   static maxPrice = 50000;
//   static checkPrice(price) {
//     if (price > this.maxPrice) {
//       return `Error! Price exceeds the maximum`;
//     } else {
//       return `Success! Price is within acceptable limits`;
//     }
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// const lalal = new Car({ price: 500000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(lalal.price)); // "Error! Price exceeds the maximum"
let lalala = true;
console.log(typeof lalala);
lalala = String(lalala);
console.log(typeof lalala);
alert("5" - "1");
