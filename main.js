// alert('Hello World');
//console
console.log('Message log');
console.info('Message Info');
console.warn('Message Warn');
console.error('Message Error');
//les constantes
const st = 30;
// st = 33;
console.log(st);
//les variables et leurs types
const firstName = "Thierno";
const lastName = "Momama";
const old = 30;
const x = 3.5;
const und = undefined;
const nul = null;

console.log("Bonjour Mr "+firstName+", vous avez "+old+" ans");
console.log(`${firstName} ${lastName}`);
console.log(typeof firstName);
console.log(firstName.length);
//les tableaux en js n°1
const tab = new Array(10, "fruits", true);
console.log(tab);
console.log(tab.length);
console.log(typeof tab);
//les arrays n°2
const fruits = ["pomme", "jus", "orange", true, 12];

console.log(fruits);
console.log(fruits.length);
console.log(Array.isArray(fruits));
// console.log(fruits.reverse());
fruits.unshift("Premier");
console.log(fruits);
fruits.push("Dernier");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf("pomme"));
console.log(fruits[1]);
//for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
//while
let i  = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}
//les objects en js
const person = {
    prenom : "Thierno",
    nom : "Momama",
    hobbies: ["Priere", "Dev", "Sport"],
    address: {
        city: "Vitry",
        cp: 94400,
        dept: "Vald"
    }
}
console.log(person);
console.log(typeof person);
console.log(person.hobbies);
console.log(person.address);
person.hobbies.push("KOOBAZ");
console.log(person);
const {prenom, nom, address: {city}} = person;
console.log(prenom, city);
//les arrays object
const todos = [
    {
        id: 1, 
        title: "One",
        read: true 
    },
    {
        id: 2, 
        title: "Two",
        read: false
    },
    {
        id: 3, 
        title: "Three",
        read: true 
    }
];

console.log(todos);
//for
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].title);
}
//forEach
todos.forEach(function(todo){
    console.log(todo);
});
//for of 
for(let todo of todos){
    console.log(todo);
}
//for i in array
for(let i in todos){
    console.log(todos[i]);
}
//map
const todoMap = todos.map((todo)=>{
    return todo.title;
});
console.log(todoMap);
console.log(typeof todoMap);
//filter
const todoFilter = todos.filter((todo)=>{
    return todo.read === true;
});
console.log(todoFilter);
//filterMap callback
const todoFilterMap = todos.filter((todo)=>{
    return todo.read === true;
}).map((todo)=> {
    return todo.title;
});
console.log(todoFilterMap);
for(let todo of todoFilterMap){
    console.log(todo);
}
//function 
function somme(a, b){
    return a+b;
}
console.log(somme(5,5));
const adSom = (a,b) => {
    return console.log(a+b);
}
adSom(4, 6);
//function object
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.birth = function(){
    return this.dob.getFullYear();
}
Person.prototype.fullName = function(){
    return console.log(`${this.firstName} ${this.lastName}`);
}
const th = new Person("Th", "MD", "11-22-1991");
console.log(th);
console.log(th.dob.getFullYear());

console.log(th.birth());
th.fullName();

class Humain{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirth(){
        return this.dob.getFullYear();
    }
    getFullNames(){
        return console.log(`${this.firstName} ${this.lastName}`);
    }
}
const ths = new Humain("Ths", "MDS", "11-22-1991");
console.log(ths);
console.log(ths.dob.getFullYear());

console.log(ths.getBirth());
ths.getFullNames();
//DOM 
const myForm = document.querySelector('#myForm');
const nameInput = document.querySelector('#nameIput');
const emailInput = document.querySelector('#emailInput');
const msg = document.querySelector('#msg');
const users = document.querySelector('#users');
//addEventListerner
myForm.addEventListener('submit', onSubmit);
//function onSubmit
function onSubmit(e){
    e.preventDefault();
    //si les valueurs sont vides
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please add Name and add Email';
        msg.style.backgroundColor='red';
        //setTimeOut
        setTimeout(() => {
            msg.remove();
        }, 5000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} :  ${emailInput.value}`));
        console.log(li);
        users.appendChild(li);
    }
    nameInput.value = '';
    emailInput.value = '';
}
