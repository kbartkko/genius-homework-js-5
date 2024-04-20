// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//     name: "name",
//     age: 100,
//     speciality: "speciality",
//     showInformation: function (marks, missedClasses) {
//         console.group(`${this.name} info:`);
//         console.log(`My name is ${this.name}.`);
//         console.log(`My age is ${this.age}.`);
//         console.log(`My speciality is ${this.speciality}.`);
//         console.log(`My average mark is ${marks}.`);
//         console.log(`I have ${missedClasses} missed classes.`);
//     }
// };

// const Max = {
//     name: "Maks",
//     age: 30,
//     speciality: "acountant",

// }

// const Kate = {
//     name: "Kateryna",
//     age: 22,
//     speciality: "developer",
// }


// const Ihor = {
//     name: "Ihor",
//     age: 25,
//     speciality: "decigner",
  
// }

// student.showInformation.call(Max, "5", "1");
// student.showInformation.apply(Kate, ["4", "2"]);
// student.showInformation.bind(Ihor, "3","12")();


// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const infoButton = {
//     showInfo() {
//         console.log(this.name + " is " + this.meaning);
//     },
// };

// const html = {
//     name: "HTML",
//     meaning: "HyperText Mark-up Language.",
// };

// const css = {
//     name: "CSS",
//     meaning: "Cascading Style Sheets.",
// };

// infoButton.showInfo.bind(html)();
// infoButton.showInfo.apply(html);
// infoButton.showInfo.call(html);



// document.querySelector('#html').addEventListener('click', infoButton.showInfo.bind(html));
// document.querySelector('#css').addEventListener('click', infoButton.showInfo.bind(css));

// infoButton.showInfo.bind(css)();
// infoButton.showInfo.apply(css);
// infoButton.showInfo.call(css);




// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) ojrange 89, 3,


// function showInfoShop(name, price, quantity) {
//     return function (name, price) {
//         return `${name} costs ${price}`;
//     };
// };

// const banana = showInfoShop("banana", "30", "4,5");
// console.log(banana("banana", "30", "4,5"));

// const cherry = showInfoShop("cherry", "58", "1,3");
// console.log(banana("cherry", "58", "1,3"));

// const orange = showInfoShop("orange", "89", "3");
// console.log(banana("orange", "89", "3"));





   


