// mdn console
console.log('Message Log');
console.warn('Message Warn');
console.error('Message Error');
console.info('Message Infos');
// les variables et leurs types 
let name = "Thierno";
let old= 30;
let oldX = 30.11;
let x = null;
let y = undefined;
let bool = true;
console.log(`${typeof name} : ${name}`);
console.log(`${typeof old} : ${old}`);
console.log(`${typeof oldX} : ${oldX}`);
console.log(`${typeof x} : ${x}`);
console.log(`${typeof y} : ${y}`);
console.log(`${bool} : ${bool}`);
// les const
const a = 10;
console.log(`${a} : ${a}`);
// les arrays 
let ar = new Array(12, 23, true, "Pomme");
console.log(`${ar} : ${ar}`);
// other arrays
let fruits = ["pomme", "jus", "orange"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits.unshift("first"));
console.log(fruits);
fruits.push("last");
console.log(fruits);
console.log(fruits.reverse());
console.log(fruits.indexOf("pomme"));
// 
console.log(name.length);
// for, while, switch
for(let i = 0; i < 10; i++ ){
    console.log(`${i}`);
}
let j = 5;
while(j > 0){
    console.log("j:",j);
    j--;
}
let color  = "red";
switch(color){
    case "red":
        console.log(color); break;
    case "yellow":
        console.log(color); break;
    default:
        console.log("Inconnue");
}
// forEach, in, of
for(let i in fruits){
    console.log(fruits[i]);
}
for(let i of fruits){
    console.log(i);
}
// 
fruits.forEach((fruit) => {
    console.log(fruit);
});
// object
let person = {
    first: "Thierno",
    last: "Momama",
    old: 30,
    hobbies: ["Prière", "Dev", "Sport"],
    address: {
        city: "Vitry",
        dept: "Vald",
        cp: 94400
    }
}
console.log(`${typeof person}`);
const { first, last, hobbies, address: {city}} = person;
console.log(person);
hobbies.forEach(function(i){
    console.log(i);
});

console.log(city);
// map, filter, callbacks
const todos = [
    {
        id: 1, 
        name: "Todo One",
        isCompleted: true
    },
    {
        id: 2, 
        name: "Todo Two",
        isCompleted: false
    },
    {
        id: 3, 
        name: "Todo Three",
        isCompleted: true
    }
];
console.log(todos);
todos.forEach((todo) => {
    console.log(todo);
});
const filtre = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log("---------------");

filtre.forEach((todo) => {
    console.log(todo);
});

const emps = todos.map((todo) => {
    return todo.name;
});

console.log(emps);

const clbs = todos.filter((todo) => {
    return todo.isCompleted === true; 
}).map((todo) => {
    return todo.name;
});
console.log(clbs);
// 
function adSom(a, b){
    console.log(a+b);
}
adSom(4,3);
adMon = (a,b) => {
    return a+b;
};
console.log(adMon(5,6));
// methode 
function Person(firstName, lastName, oldName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.oldName = new Date(oldName); 
}
Person.prototype.getOld = function() {
    return this.oldName.getFullYear();
}
Person.prototype.fullName = function(){
    return `${this.firstName} : ${this.lastName}`;
}
let person1 = new Person("Thierno", "Momama", "11-22-1991");
console.log(person1);
console.log(person1.getOld());
console.log(person1.fullName());

class Humain{
    
    constructor(firstName, lastName, oldName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.oldName = new Date(oldName);   
    }
    getOld(){
        return this.oldName.getFullYear();
    }
    fullName(){
        return `${this.firstName} : ${this.lastName}`;

    }

}

const koodev = new Humain("KOO", "DEV", "11-11-2022");
console.log(koodev);
console.log(koodev.getOld());
console.log(koodev.fullName());
// DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msg = document.querySelector(".msg");
const users = document.querySelector('#users');
myForm.addEventListener('submit', loadSubmit);

function loadSubmit(e){
    e.preventDefault();
    let timer;
    if(nameInput.value === "" || emailInput.value === ""){
        clearTimeout(timer);
        msg.textContent = "Please enter Name and Email!";
        msg.style.backgroundColor="red";
        msg.style.color="white";
        timer = setTimeout(() => {
            msg.textContent = '';
        }, 5000);
        return;
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    users.appendChild(li);
    // 
    nameInput.value = '';
    emailInput.value = '';
}