// alert('hello, world');

// console.log(1);

// variables defining -- let/ const/ var-----------
// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// points = 50; the const value cant be changed
// console.log(points);

// var score = 75;
// console.log(score);

// ------------------------data types+++++++++++++++++++++++++++
// 1- number= (1,2,3,100,3.14)
// 2- String= "hello world"
// 3- Boolean= true/false
// 4- Null = explicitly set a variable with no value
// 5- undefined = for variables that have not yet been defined
// 6- Object= Array,Object literals, Function,dates etc
// 7- Symbol= used with Object

//------------ the above data types divided into 2 types primitive  / reference types
//------------ primitive type = the values will be stored in stack of the memory
// it inclides numbers , strings , booleans , null , undefined , symbols

//------------ reference types = the values will be stored in heap of the memory
// it includes all types of objects, obj literals , arrays , functions , dates
//............................ strings........
// console.log('hello, world');

// let email = 'kicha@gmail.com';
// console.log(email);

// // >>>>>>>>>>>>>>>>>>>>>>>>string concatenation
// let firstName = 'kicha';
// let lastName = 'kumar';

// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// // getting individual characters>>>>>>>>>>>>>>>>>>>>>
// console.log(fullName[2]);

// // string length;;;;;;;;;;;;;;;;;;;;;;;;;;;
// console.log(fullName.length);

// // string methods,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// console.log(fullName.toUpperCase());
// let result = fullName.toLocaleLowerCase();
// console.log(result);

// let index = email.indexOf('@');
// console.log('index of the @ sign:', index);

// ?????????????????????????????//////common string methods

// let email = 'kicha@thenetninja.co.in';

//let result = email.lastIndexOf('n');

//let result = email.slice(0,5);

//let result = email.substr(5,12);

//let result = email.replace('c', 'w');

// let result = email.replace('n', 'w');

// console.log(result);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< NUMBERS

// let radius = 10;
// let pi = 3.14;

// console.log(radius, pi);

//////////////////////////////////// math operators - +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shortcutsssssssss
// let likes = 10;

// likes = likes + 1;
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes.';
// console.log(result);

//............................. template strings
// const title = 'Best reads of 2023';
// const author = 'kicha';
// const likes = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way uses the ${} symbol and `  `

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// const gameName = new String('hitesh-hc-com')

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)  // not allow -ve value
// console.log(newString);

// const anotherString = gameName.slice(-8, 4) // allow -ve
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());  // trim white space


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ARRAYSSSSSSSSSSSSSSSSSSSSS

// let ninjas = ['krishna', 'kicha', 'hero'];

// ninjas[1] = 'krish';
// console.log(ninjas[1]);

// array length
// console.log(ninjas.length);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random.length)

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('hero');
// let result = ninjas.concat(['ken', 'crystal']); // add another array
// let result = random.push('ken');
// let result = random.pop(); // remove last element
// let result = random.unshift(9); // add @ 1st element
// let result = random.shift(); // remove @ 1st element

// spead() muliple array in 1 array
//let newArr = [...ninjas,...result]

// nested array to create new single array 
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//diff b/w slice & splice
//let result = ninjas.slice(0,1): // create the selected value & return new array wont effet org array
//let result = ninjas.splice(0,1): // remove the selected value & return new array from org array

// of () method used to convert indivual value into array

// console.log(result);
// console.log(ninjas);

// to convert the Array data type into string use .join method
//let newArr = random.join();
//console.log(typeOf newArr);

// to convert any data type into array
//console.log(Array.from("krishna"))

// to check d.t is an array
//console.log(Array.isArray("krishna"))

//>>>>>>>>>>>>>>>> null & undefined
// undefined
// let age;
// console.log(age, age + 3, `the age is ${age}`);

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> booleans & comparisons

// methods can return booleans
// let email = 'kicha@thenetninja.co.uk';
// let names = ['krishna', 'kicha', 'hero'];

// let result = email.includes('@');
// let result = names.includes('kicha');

// console.log(result);

// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'kicha';

// console.log(name == 'kicha');
// console.log(name == 'Kicha');
// // capaital K 
// console.log(name > 'crystal');
// //  k is greater then c in alphabets
// console.log(name > 'Kicha');
// // small k is greater then capital k
// console.log(name > 'Crystal');
// small k is greater then capital C
// console.log('kicha' > 'Crystal' );

// let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//?????????????????????????????????????? type conversion
// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
// let result = Boolean('0');
// let result = Boolean('');

// console.log(result, typeof result);

//>>>>>>>>>>>>>>>>>>> FOR loops (initializer;condition;expresion-increment/decrement)
//  use when we know the stating and ending value

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

// const names = ['krishna', 'kicha', 'hero'];

// for(let i = 0; i < names.length; i++){
//   console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

//{{{{{{{{{{{{{{{{{{[[[[[[[]]]]]]]}}}}}}}}}}}}}}}}}} while loops - declares the initializer outside the loop next
//  condition expresion after the console USE when u know the condition
// const names = ['krishna', 'kicha', 'hero'];
// let i = 0;

// while(i < 5){
//   console.log('loop: ', i);
//   i++;
// }

// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

// let i = 8;
// while(i > 5){
//   console.log('loop: ', i);
//   i--;
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> do while loops USE if the condition doesn't match atleast exceute in do function
// let i = 5;

// do{
//   console.log('val of i is: ', i);
//   i++;
// } while(i < 5);

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] if statements
// const age = 25;

// if(age > 20){
//   console.log('you are over 20 years old');
// }

// const ninjas = ['krishna', 'kicha', 'hero'];

// if(ninjas.length > 3){
//   console.log("that's a lot of ninjas!");
// }else{
//     console.log("less ninjas")
// }

// const password = 'p@ssword';

// if(password.length >= 8){
//   console.log('that password is long enough');
// }

//[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]] else if statements

// const password = 'p@ssword123456';

// if(password.length >= 18){
//   console.log('that password is mighty strong');
// } else if(password.length >= 8){
//   console.log('that password is long enough');
// } else {
//   console.log('password should be at least 8 characters long');
// }

// else if statements with logical oprerators helps to satisfy multiple condition
// const password = 'p@ss12';

// // in first cond logical && opr which must satisfy both cond
// if(password.length >= 12 && password.includes('@')){
//   console.log('that password is mighty strong');
// }
// // in this logical || any one cond matches 
// else if(password.length >= 8 || password.includes('@') && password.length > 5){
//   console.log('that password is strong enough');
// } else {
//   console.log('that password is not strong enough');
// }
////////////////////////////////// Logical NOT

// const user = false;

// if(!user){
//   // do something
//   console.log('you must be logged in to continue');
// }
// // it revers the Boolean valus
// console.log(!true);
// console.log(!false);

// break & continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//    console.log('your score',scores[i])
 
//    if(scores[i] === 0){
//     continue;
//   }

//   console.log('your score:', scores[i]);

//   if(scores[i] === 100){
//     console.log('congrats, you got the top score!');
//     break;
//   }
// }

// falsy value 
// false, null, undefind, 0, -0, Nan, "", BigInt 0n

// Truthy value
// true, [], "0", '0', " ", {}, function() {}
// false == 0 - true
// false == '' - true
// 0 == '' - true

// ------------------------switch statements its strict equality checker
// const grade = 'D';

// switch(grade){
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got a B!');
//     break;
//   case 'C':
//     console.log('you got a C!');
//     break;
//   case 'D':
//     console.log('you got a D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }

// continue skip the condition & execute loop

// variables & block scope
//glpbal scope
// let age = 30;
// let name = 'krishna';
// if(true){

// //   local scope
//   let age = 40;
//   let name = 'kicha';
//   console.log('inside 1st code block:', age, name);

//   if(true){
//     let age = 50;
//     console.log('inside 2nd code block:', age, name);
//   }
// }

// console.log('outside code block:', age, name);

// NULLISH COALESCING OPERATOR (??): NULL UNDEFIND
//  it checks the safety of null value
// let val = 5 ?? 10;
// let val = null ?? 10;
// let val = undefind ?? 10;

// // TERNARY OPERATOR - ?
// condition ? true : false
// const banana = 50
// banana >= 30 ? console.log("less than 50") : console.log("more than 50")

//---------=====================================
// Function() block of code that performs tasks & can be called anywhere from the prog
//  also it is not associated with any objrct or class

// function declaration - in this function is not stored in var
// kicha();// the hoisting in js allows to call fun before the declaration

// function kicha(){
//     console.log('he is a hero');
// }
// // function expresion - in this function stored in var & hoisting does not support
// const krishna = function(){
//     console.log('the god')
// };
// krishna();

// Immidiate invoke function expressions [ IIFE ] = execute just after the expression & to avoid global scopic var pollution
// wrapping ( ) to the function & invoke without fun name ( ) ( )

// regular fun
// (function bike() { // named IIFE
//   console.log("kicha")
// }) (); // must close fun with ;

// Arrow fun
// ( (name) => {
//    console.log(`name is ${name}`)
// } ("kicha);
//-------------------------- ARGUMENT & PARAMETERS
// here work is parameter & helping is agrument
// const krishna = function(work = 'helping',time = 'everytime'){
        // console.log(`the god ${work} ${time}`)
//     };
//     krishna();
    // overwriting
// krishna('mario', 'morning');
// while 2nd time the mario over ride by on helping
// krishna('mario');

//--------------------------- return statements

// const calcArea = function(radius){
//     let area = 3.14 * radius**2; 
//     return area;
//         //or
//     //  return 3.14 * radius**2;
//   }
  
//   const area = calcArea(8);
//   console.log('area is:', area);

//------------------------------------ arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// Implicit (assum return) arrow function
// whenever we use { } must use return keyword & ( ) not required

// to return an obj = assign in ( )

// cont addTwo = (num1 + num2) => {(name: "kicha")}


// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is:', area);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

// const greet = () => 'hello, world';
// const result= greet();
// console.log(result);

// let kicha = () => 'practise ';
// console.log(kicha());


// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }
// console.log(bill([10,15,30], 0.2));

// arrow which not shorten the nested loops
// const bill = (products, tax) =>{
//     let total = 0;
//     for(let i=0;i< products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

//REST parameter helps to excute multiple values with 1 parameter

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// ========= diff b/w regular fun & arrow fun

// function bike() {
//    let name = "kicha"

//     console.log(this); // here this refers to window obj & allow argument
// }
// bike();

// const bike = () => {
//     let name = "kicha"
//     console.log(this); // refer empty { } & not allow arg
    
// }
// bike();

//------------------- diff b/w function and method is m-associate with obj or class
// const name = 'shaun';

// // function

// const greet = () => {
//   return 'hello';
// };

// let resultOne = greet();
// console.log(resultOne);

// // method

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//------------------------ callbacks & forEach
// let people = ['krishna', 'kicha', 'krish', 'none', 'hero'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// }
// people.forEach(logPerson);

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

//----------------------Object is same as in real life it consist key-value pair
// singleton
// Object.create
// const user = new object()

// object literals

// object with symbol
// const mySym = Symbol("key1")

// let user = {
//   name: 'krishna', // name is string
//   "full name": "krishna Mudhale", // we cant access by . op
//    [mySym]: "mykey1",  // symbol
//   age: 30,
//   email: 'kicha@thenetninja.co.in',
//   location: 'india',
//   blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.age);
// console.log(user["name");
// console.log(JsUser[mySym])


// user.age = 35;
// console.log(user.age);
// console.log(user.name);

// // another method to access the key from obj
// console.log(user['name']);
// user['name'] = 'kicha';
// console.log(user['name']);

// console.log(typeof user);

// object literals

// let user = {
//   name: 'krishna',
//   age: 30,
//   email: 'kicha@thenetninja.co.uk',
//   location: 'india',
//   blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//   login: function(){
//     console.log('the user logged in');
//   },
//   logout(){
//     console.log('the user logged out');
//   },
//   logBlogs(){
//     // access the blogs here & (this ) is global obj or window obj used to get obj properties
//     console.log('the user written the below blogs:');
//     this.blogs.forEach(blog => {
//       console.log(blog);
//     });

//   }
// };

// user.logBlogs();
// user.login();
// user.logout();

// const name = 'kicha';
// Object.freeze(name) // we cant access after freeze
// name.toUpperCase();

//------------------- cresting Array of Object
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // methodused to combine

//const obj3 = {...obj1, ...obj2} // spread combine 2 arr
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// const blogs= [
//   {title:'why mac & cheese rules',likes: 30 },
//   {title:'10 things to make with marmite',likes: 50 }
// ]

// console.log(blogs);

// applying the Array Object in blogs
// let user = {

// name: 'krishna',
// age: 30,
// email: 'kicha@thenetninja.co.uk',
// location: 'india',
// blogs: [{title:'why mac & cheese rules',likes: 30 },
// {title:'10 things to make with marmite',likes: 50 }],
// login: function(){
//   console.log('the user logged in');
// },
// logout(){
//   console.log('the user logged out');
// },
// logBlogs(){
//   // access the blogs here & (this ) is global obj or window obj 
//   console.log('the user written the below blogs:');
//   this.blogs.forEach(blog => {
//     console.log(blog,blog.title,blog.likes);
//   });

// }
// };

// user.logBlogs();
// user.login();
// user.logout();

// const name = 'kicha';
// name.toUpperCase();


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor

//============== de-structuring of the obj
// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

//////////////////////////////// Math obj
// console.log(Math);
// console.log(Math.PI);

// const area = 6.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

//------------- primitive values  - when we change the value of var it does not effect the other value
//  bcz in stack each value stored in diff location

// let scoreOne = 20;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${[scoreOne]}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 30;
// console.log(`scoreOne: ${[scoreOne]}`, `scoreTwo: ${scoreTwo}`);

// ------------- reference value - when we change the value of var it will effect the other value
//  bcz it stored in heap (the value will be stored only once)

// const userOne = {name: 'kicha', age: 21};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userOne.age = 30;
// console.log(userOne,userTwo);

// DOM- document object model = it describes the html pages as hierarchical tree  of nodes  created by the browser 
// html is root node or how a document lookks in a visual way too

//-------------------- queryselector 
// const para = document.querySelector('p');
// console.log(para);

// const paras = document.querySelectorAll('p');
// console.log(paras);

// const para1 = document.querySelector('div.name');
// console.log(para1);

//------------------------ getElementById
// const head = document.getElementById('first');
// console.log(head);

//---------------------- getElementsByClassName
// const hero = document.getElementsByClassName('error');
// console.log(hero);
// console.log(hero[0]);

//-------------------------- getElementsByTagName
// const here = document.getElementsByTagName('p');
// console.log(here);
// console.log(here[0]);

// const para = document.querySelector('p');

 // u can change the html content with innerText &
// para.innerText = 'hello world';

// console.log(para.innerText);
// const para = document.querySelector('p');

// const come = document.querySelectorAll('p');

// come.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new text';
// });
// to write new h2 Element in html with innerHTML

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS NEW H2</h2>';


// const content = document.querySelector('.content');
// const people = ['krishna','kicha','hero'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

//--------------------------- GET & SET Attributes

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.youtube.com');
// link.innerText = 'youtube';

// const msg = document.querySelector('p');

// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: orange');

//--------------------- USING  CSS STYLE PROPERTIES CAN CHANGE PROPERTIEY
// const title = document.querySelector('h1');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';// remove all margin

//------------------- ADDING & REMOVING CLASSES
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');

// //here textContent will show all txt content even its in span & innerText cant show span
// paras.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('success');
//     }
// });

// const title = document.querySelector('.title');

// title.classList.toggle('text');
// // this line remove the toggled text
// title.classList.toggle('text');

//------------------------ parent child relations
// const article = document.querySelector('article');

// console.log(article.children);
// // to apply foreach function convert html collection into Array
// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

// const  title = document.querySelector('h2');

// console.log(title.nextSibling);
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// console.log(title.previousElementSibling);
// console.log(title.nextElementSibling.parentElement.children);

//-------------------- Event basics
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   console.log('you clicked me');
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // console.log('item clicked');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
//     e.target.style.textDecoration = 'line-through';
//   });
// });

//-------------------- create & delete Element
// remove the complete area
// const ul = document.querySelector('ul');
// // ul.remove();

// const button = document.querySelector('button');
// button.addEventListener('click', () =>{
//     // ul.innerHTML += '<li>something new</li>' //addtion
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append();//add last
//     ul.prepend(li);//add top
// })
// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     e.target.remove();
//   });
// });

// ----------------EVENT bubbling--when we have multiple events after the execution of first event move to parent event
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = 'something new to do';
//   ul.prepend(li);  
// });

// // const items = document.querySelectorAll('li');

// // items.forEach(item => {
// //   item.addEventListener('click', e => {
// //     console.log('event in LI');
// //     e.stopPropagation();// stops to moving from next parent event
// //     e.target.remove();
// //   });
// // });

// ul.addEventListener('click', e => {
// //   console.log('event in UL');
// //   console.log(e.target, e);
//   if(e.target.tagName === 'LI'){
//     e.target.remove();
//   }
// });

//--------------- dom events = copy , mouse move , coursor

// for copy
// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () =>{
//     console.log('OI! MY CONTENT IS COPYRIGHT')
// });

// // for mouse
// const box = document.querySelector('.box');
// box.addEventListener('mousemove', e => {
// box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX,e.pageY);
// })

// pop up
// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close');

// button.addEventListener('click', () => {
//   popup.style.display = 'block';
// });

// close.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

// popup.addEventListener('click', (e) => {
//   if(e.target.className === 'popup-wrapper'){
//     popup.style.display = 'none';
//   }
// });

//-- form events
// const form = document.querySelector('.signup-form');
// // const username = document.querySelector('#username');//if we have id in form html username not required

// form.addEventListener('submit', e => {
//   e.preventDefault();//preventDefault helps to notauto refresh the page
//   // console.log('form submitted');
//   // console.log(username.value);
//   console.log(form.username.value);
// });

// ------------------------------REGEX = helps match the patterns ^- used to start with $-for end

// const username = 'krishna';
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);

// // if(result){
// //   console.log('regex test passed :)');
// // } else {
// //   console.log('regex test failed :(');
// // }

// let result = username.search(pattern);// return the int num of the pattern

// console.log(result);
//------------------------------ validation of form
// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');
// const usernamePattern = /^[a-zA-Z]{6,12}$/;

// // validation
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const username =  form.username.value;

//   if(usernamePattern.test(username)){
//     feedback.textContent = 'that username is valid!'
//   } else {
//     feedback.textContent = 'username must contain only letters & be between 6 & 12 characters';
//   }
// });

// live feedback

// form.username.addEventListener('keyup', e => {
//   if(usernamePattern.test(e.target.value)){
//     form.username.setAttribute('class', 'success');
//   } else {
//     form.username.setAttribute('class', 'error');
//   }
// });
// ---------------------------------ARRAY METHODES (FILTER()) = it return the new obj which mates the cond

// const scores = [10,30,40,50,15,22,5];
// const filteredScores = scores.filter(score => score > 20);
// console.log(filteredScores);

// const users = [
//   {name: 'krishna', premium: true},
//   {name: 'kicha', premium: false},
//   {name: 'krish', premium: false},
//   {name: 'kris', premium: true}

// ];
// const premiumUsers = users.filter(user => user.premium);
// console.log(premiumUsers);

//----------------------------------------MAP METHODE = create new obj without changing original obj
// const sales = [10,20,50,40,60,80,70,5];
// const salePrice = sales.map(price => price / 2);
// console.log(salePrice)

// const products = [
//   {name: 'gold price', price: 50},
//   {name: 'ice cream', price: 40},
//   {name: 'dosa', price: 20},
//   {name: 'pizza', price: 30},
//   {name: 'role', price: 25},
//   {name: 'burger', price: 90}
// ];
// const saleProducts = products.map((product) => {
//  if(product.price > 30){
//   return {name: product.name, price: product.price / 2}
//   } else {
//     return product;
//   }
// });
// console.log(saleProducts,products);

//-------------------------------------- REDUCE methode = return any value based on org array
// const scores = [10,20,50,40,60,80,70,30];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 60){
//         acc++;
//     } 
//     return acc;
// }, 0);
// console.log(result);

// const scores = [
//       {player: 'mario', score: 50},
//       {player: 'ice cream', score: 40},
//       {player: 'mario', score: 20},
//       {player: 'pizza', score: 30},
//       {player: 'role', score: 25},
//       {player: 'mario', score: 90}
//     ];

//     const marioTotal = scores.reduce((acc, curr) => {
//         if(curr.player === 'mario'){
//             acc += curr.score;
//         }
//         return acc;
//     }, 0);
//     console.log(marioTotal);

// ------------------------------ FIND methode 
// const scores = [10,20,50,40,11,80,70,30];
// const firstHighScore = scores.find(score => score > 50);
// console.log(firstHighScore);

//------------------------ SORT methode = return the new array 
// const scores = [10,20,50,40,11,80,5,70,30];
// // scores.sort();//this will not applicable with single digit
// // scores.reverse();
// scores.sort((a,b) => a - b);
// console.log(scores);


// const player = [
//       {player: 'mario', score: 50},
//       {player: 'ice cream', score: 40},
//       {player: 'mario', score: 20},
//       {player: 'pizza', score: 30},
//       {player: 'role', score: 25},
//       {player: 'mario', score: 90}
//     ];

// player.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if(b.score > a.score){
//         return 1;
//     } else {
//         return 0;
//     }
// });
// console.log(player);

// the above methode can be shorted 
// player.sort((a,b)=> b.score - a.score);
// console.log(player);

//----------------------------- CHAINING METHODE = multiple array methodes

// const products = [
//   {name: 'gold price', price: 50},
//   {name: 'ice cream', price: 40},
//   {name: 'dosa', price: 20},
//   {name: 'pizza', price: 30},
//   {name: 'role', price: 25},
//   {name: 'burger', price: 90}
// ];
// // const filterd = products.filter(product => product.price > 20);
// // const promos = filterd.map(product => {
// //     return `the ${product.name} is ${product.price / 2} pounds`;
// // });
// // console.log(promos);

// // the above methode can be shorted 
// const promos = products
//  .filter(product => product.price > 20)
//  .map(product => `the ${product.name} is ${product.price / 2} pounds`);
// console.log(promos);

// ---------------------------------DATE & TIME Object
// const now = new Date();

// console.log(now);
// console.log(typeof now);

// //year,months,day,times
// console.log('getFullYear:' , now.getFullYear());
// console.log('getMonth:' , now.getMonth());
// console.log('getDate:' , now.getDate());
// console.log('getDay:' , now.getDay());
// console.log('getHours:' , now.getHours());
// console.log('getMinutes:' , now.getMinutes());
// console.log('getSeconds:' , now.getSeconds());

// // timestamps
// console.log('timestamps:', now.getTime())

// //date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

//-------------------- timestamps
//const before = new Date('02/01/2019 7:30:59');
// const before = new Date('February 1 2019 7:30:59');
// const now = new Date();

// const diff = now.getTime() - before.getTime();
// // const diff = now - before;

// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(`the before date was ${mins} mins ago`);
// console.log(`the before date was ${hours} hours ago`);
// console.log(`the before date was ${days} days ago`);

// // converting timestamps to dates
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));

//-------------------- digital clock 
// const clock = document.querySelector('.clock')
// const tick = () => {
//     const now = new Date();

//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

//     const html = `
//     <span>${h}</span> : 
//     <span>${m}</span> : 
//     <span>${s}</span>
//     `;
//     clock.innerHTML = html;
// };

// setInterval(tick, 1000);
//----------------------------- date fns library
// const now = new Date();

// console.log(dateFns.isToday(now));

// // formatting options
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd, Do MMMM, YYYY'));

// // comparing dates
// const before = new Date('September 4 2023 12:00:00');

// console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));


// ------SYNCHRONOUS js = run one statement at a time (for fetching from db it takes 2-3 min & blocks the next line )

//------------------------ ASYNCHRONOUS js = start something now & finish it later{it takes the callback arg to fetch from db}
// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fierd');

// });
// console.log(3);
// console.log(4);
//------------------------ HTTP Request = make HTTP requests to get data from another server 
//                                        | we make these request to (API endpoint)= last point in url

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     // console.log(request,request.readyState);

//     //--------------- readyState has 5 steps
//     // 0 = UNSENT - client has been created. open() not called yet
//     // 1 = OPENED - open() has been called
//     // 2 = HEADERS_RECEIVED - send() has been called. & headers & status are available
//     // 3 = LOADING - downloading, responseText holds portial data
//     // 4 = DONE - the opration done

//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// })

// request.open('GET','https://jsonplaceholder.typicode.com/todos/');
// request.send();

//--------------------------------- Response status
// 100 Continue
// 200 OK
// 300 Multiple Choices
// 400 Bad Request
// 402 payment required
// 404 Not Found
// 500 Internal Server Error
