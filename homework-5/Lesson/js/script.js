//замикання

// function createNewNumber(n) {
//     return function (num) {
//         return n + num;
//     };
// };

// const addFive = createNewNumber(5);
// console.log(addFive(10));



// function createUrl(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     };
// }

// const comUrl = createUrl("com");
// const comUa = createUrl("ua")

// console.log(comUrl("ua"));
// console.log(comUa("google"))


//_________________________//
//_________________________//
//this

// function hello() {
//   console.log("hello", this);
// }

// hello();

// const user = {
//     name: 'Kate',
//     age: 22,
//     sayHello: hello
// };

// user.sayHello();
//-----

// function abc() {
//     console.log("Hello!")
//     console.log(this);
// }

// document.querySelector("p").onclick = abc;

// function changeColor() {
//     console.log(this);
//     this.style.background = "green";
// }

// document.querySelector("div").onclick = changeColor;

// function changeColor() {
//     this.style.background = "green";
// }

// let user = document.querySelectorAll("div");
// user.forEach(function (element) {
//     element.onclick = changeColor;
// });

//-----------

// const showList = () => {
//     console.log(this);
// }

// showList();

// const list = {
//     names: ["Ann", "Olga", "Kate"],
//     showList: showList,
// };
// list.showList();

//========= bind

// function hello() {
//   console.log(this);
// }

// const user = {
//     name: "Ivan",
//     age: 30,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function (city) {
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`City is ${city}`)


//     }
// };


// user.info()

// const Ann = {
//   name: "Anna",
//   age: 23,
// };

// user.info.bind(Ann)("Kyiv");

// const Nata = {
//   name: "Natalia",
//   age: 50,
// };

// user.info.bind(Nata, "Odesa")();

// user.info.bind(Ann)("Kyiv");

// const nataInfo = user.info.bind(Nata, "Odesa");
// nataInfo();

//========= call

// const userInfo = {
//   name: "name",
//   age: 98,
// logInfo: function (job) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// userInfo.logInfo.call(Vano, 'developer');


//apply

// const showUserInfo = {
//   name: name,
//   age: 87,
//     logInfo: function (job, city) {
//     console.group(`${name} info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Age is : ${this.age}`);
//     console.log(`Job is : ${job}`);
//     console.log(`City is : ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: 45,
// };

// showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]);

///////////////////////////////////
///////////////////////////////////


// const message = function (name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// }
// const Bukovel = { hotel: "Bukovel" };
// const Turist = { hotel: "Turist" };

// message.call(Bukovel,"Ivan", "5")
// message.call(Turist, "Ivan", "3")

// message.apply(Bukovel, ["Ihor", "5"])
// message.apply(Turist, ["Kate", "3"])

// message.blind(Bukovel, "Maks", "5")();
// message.blind(Turist, "Ola", "4")()


////////
// const cart = {
//     showItems(){
//     console.log("В корзині:", this.items)
//      } 
// }
 
// const woman = {
//     items: ["Сукня, туфлі"],
// };

// const man = {
//     items: ["Костюм, рубашка"],
// };

// const child = {
//     items: ["Майка, шорти"]
// };

// cart.showItems.bind(man)();

// document.querySelector('#wom').addEventListener('click', cart.showItems.bind(woman));
// document.querySelector('#man').addEventListener('click', cart.showItems.bind(man));
// document.querySelector('#kid').addEventListener('click', cart.showItems.bind(child));


// ////

// const infoCar = {
//     name: "BMW",
//     model: "M7",
//     color: 'white',
//     showInfo: function () {
//         console.log("Car: " + this.name + " Model: " + this.model + " Color: " + this.color);
//     },
// };
// infoCar.showInfo();

// car2 = {
//     name: "Opel",
//     model: "XX",
//     color: 'red',
// }

// infoCar.showInfo.call(car2);
// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.apply(car2);
