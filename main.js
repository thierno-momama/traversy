// alert('Hello World');
// mdn console
console.log('Is an Log Message');
console.warn('Is an Warn Message');
console.info('Is an Infos Message');
console.debug('Is an Debug Message');
console.error('Is an Error Message');
// String, Numbers, Boolean, Null, Undefined
const name = 'Thierno';
const age = 31;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
// typeof 
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
// cncatenation
console.log('My name is '+name+' , and i am '+age+' years old');
// Template String
console.log(`Hello my name is : ${name} and i am ${age} years old`);
// methode string
const s = "Hello World";
console.log(s.length);
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
const tech = "Technology, PC, Mobile";
console.log(tech.split(', '));
console.log(typeof tech.split(''));
// Array Number
const numbers = new Array(12, 90, 3, 7);
console.log(typeof numbers);
console.log(numbers);
console.log(numbers[1]);
// Array - multiples values
const fruits = ["pomme", "orange", "jus", 12, true];
console.log(typeof fruits);
console.log(fruits);
console.log(fruits.indexOf("pomme"));
fruits.unshift("raisin");
fruits.push("Monagos");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
// object
const person = {
   firstName : 'Thierno',
   lastName: 'Momama',
   age: 31,
   hobbies: ['Dieu', 'Dev', 'Music'],
   address: {
    city: 'Vitry-Sur-Seine',
    dept: 'Val-De-Marne',
    cp: 944000
   } 
}
console.log(typeof person);
console.log(person);
console.log(person.hobbies[0]);
console.log(person.address.city);
const { firstName, lastName, hobbies, address: {city}} = person;
console.log(firstName);
console.log(hobbies);
console.log(city);
person.email = 'thierno-momama@gmail.com';
console.log(person);
// array object todos
const todos = [
    {
        id: 1, 
        name: "Todo One",
        isCompleted: true
    },
    {
        id: 2, 
        name: "Todo One",
        isCompleted: false
    },
    {
        id: 3, 
        name: "Todo Two",
        isCompleted: true
    }
];
console.log(typeof todos);
console.log(todos);
// for of
for(let todo of todos){
    console.log(todo.name);
}
// for in
for(let i in todos){
    console.log(todos[i].isCompleted);
}
// for
for(let i = 0; i < todos.length; i++){
    console.log(todos[i]);
}
// forEach, map, filter
todos.forEach(function(todo){
    console.log("==>", todo);
});
let todosMap = todos.map((todo) => {
    return todo.name;
});
console.log(todosMap);
let todoFilter = todos.filter((todo) => {
    return todo.isCompleted === true;
});
console.log(todoFilter);
// callback filter map
let todoCallback = todos.filter((todo) => {
    return todo.isCompleted === true;
}).map((todo) => {
    return todo.name;
});
console.log(todoCallback);
todos.push({id: 4, name: "Todo Four", isCompleted: true});
console.log(todos);
// while, switch, terniaire
let j = 10;
while( j > 0){
    j = j - 1;
    console.log("---:", j);
}
let k = 9;
console.log(k < 10 ? "Petit" : "Grand");
let color = "blue";
switch(color){
    case "blue" :
        console.log(color); break;
    case "red":
        console.log(color);break;
    case "yellow":
        console.log(color);break;
    default: 
        console.log("Couleur de drapeau inconnue");
}
// funtion adSome
function adSome(a, b){
    return a+b;
}
console.log(adSome(4, 5));
let dSum = (a, b) => {
    console.log(a+b);
};
dSum(3,3);
// function constructor
function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthday = function(){
        return this.dob.getFullYear();
    };
}
Person.prototype.fullname = function(){
    console.log(`${this.firstname} - ${this.lastname}`);
}
// instantiation
const person1 = new Person('Thierno', 'Momama', '11-22-1991');
const person2 = new Person('KOO', 'DEV', '12-03-2022');
console.log(person1);
console.log(person2);
console.log(person1.getBirthday());
person1.fullname();
// 
class Humain {
    //constructor
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    getBirthday(){
        return this.dob.getFullYear();
    }
    fullname(){
        console.log(`${this.firstname} - ${this.lastname}`);
    }
}
const human1 = new Humain('Thierno', 'Momama', '11-22-1991');
const human2 = new Humain('KOO', 'DEV', '12-03-2022');
console.log(human1);
console.log(human2);
console.log(human1.getBirthday());
human1.fullname();
// DOM
console.log(window);
// select form
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    let timer;
    if(nameInput.value === '' || emailInput.value === ''){
        clearTimeout(timer);
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        timer = setTimeout(() => {
            msg.innerHTML = ''; 
        msg.classList.remove('error');

        }, 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        
        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}