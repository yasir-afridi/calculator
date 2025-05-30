// // const users = ["user1", "user2", "user3"]

// // const askUser = prompt("Enter your Username");
// // let findUser;
// // for (let i = 0; i < users.length; i++){
// // let user = users[i];

// // if(user == askUser){
// //     user ? alert("login") : alert("Not found")
// // }
// // if(!user == askUser){
// //     alert("not found");
// // }
// // }
// // // findUser = user;
// // }else if{
// //     alert("login")
// // }else{
// //     alert("Not found");
// // }
// // // // if (findUser == askUser){
// // // //     alert("Login");
// // //  }else{
// // //     alert("Not found");
// https://meet.google.com/hzq-nxzs-bdg

// // [subjects]
// const sub = [
//   "English",
//   "Urdu",
//   "Islamiat",
//   "Math",
//   "Computer Science",
//   "Physics",
// ];
// const marks = []; // scope / hoisting
// const totalMarks = 600;
// let obtainMarks = 0;
// //
// for (let i = 0; i < sub.length; i++) {
//   const enterMarks = +prompt(`Enter ${sub[i]} marks out of 100.`);
//   marks.push(enterMarks);
// }

// // sum
// for (let i = 0; i < marks.length; i++) {
//   obtainMarks += marks[i];
// }

// const percentage = Math.floor((obtainMarks / totalMarks) * 100); // .00 .toFixed(2)

// if (percentage >= 90) {
//   alert(`A+ ${percentage}`);
// } else if (percentage >= 80 && percentage < 90) {
//   alert(`A ${percentage}`);
// } else if (percentage >= 70 && percentage < 80) {
//   alert(`B ${percentage}`);
// } else if (percentage >= 60 && percentage < 70) {
//   alert(`C ${percentage}`);
// } else if (percentage >= 50 && percentage < 60) {
//   alert(`D ${percentage}`);
// } else {
//   alert(`Fail ${percentage}`);
// }

// const users = ["user1", "user2", "user3"]

// // const askUser = prompt("Enter your Username");
// // let findUser;
// // for (let i = 0; i < users.length; i++){
// // let user = users[i];

// // if(user == askUser){
// //     user ? alert("login") : alert("Not found")
// // }
// // if(!user == askUser){
// //     alert("not found");
// // }
// // }
// // // findUser = user;
// // }else if{
// //     alert("login")
// // }else{
// //     alert("Not found");
// // }
// // // // if (findUser == askUser){
// // // //     alert("Login");
// // //  }else{
// // //     alert("Not found");
// https://meet.google.com/hzq-nxzs-bdg

// // [subjects]
// const sub = [
//   "English",
//   "Urdu",
//   "Islamiat",
//   "Math",
//   "Computer Science",
//   "Physics",
// ];
// const marks = []; // scope / hoisting
// const totalMarks = 600;
// let obtainMarks = 0;
// //
// for (let i = 0; i < sub.length; i++) {
//   const enterMarks = +prompt(`Enter ${sub[i]} marks out of 100.`);
//   marks.push(enterMarks);
// }

// // sum
// for (let i = 0; i < marks.length; i++) {
//   obtainMarks += marks[i];
// }

// const percentage = Math.floor((obtainMarks / totalMarks) * 100); // .00 .toFixed(2)

// if (percentage >= 90) {
//   alert(`A+ ${percentage}`);
// } else if (percentage >= 80 && percentage < 90) {
//   alert(`A ${percentage}`);
// } else if (percentage >= 70 && percentage < 80) {
//   alert(`B ${percentage}`);
// } else if (percentage >= 60 && percentage < 70) {
//   alert(`C ${percentage}`);
// } else if (percentage >= 50 && percentage < 60) {
//   alert(`D ${percentage}`);
// } else {
//   alert(`Fail ${percentage}`);
// }

// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log("add")

//ek function banae login k leye

// function login(username, password, email) {
//   const userPassword = "123abc";
//   const userName = "user1";
//   const userEmail = "user@gmail.com";
//   console.log(username, email);
//   if ((!username && !email) || !password) {
//     return "Please enter user credentials";
//   }

//   if (username != userName && email != userEmail) {
//     return "User not Found";
//   }

//   if (password != userPassword) {
//     return "Incorrect Password";
//   }
//   alert("login");
//   return {
//     userName,
//     userEmail,
//   }; // object
// }

// const userName = prompt("Enter your username.");
// const email = prompt("Enter you email.");
// const password = prompt("Enter your password.");

// const loggedInUser = login(userName, password, email);
// console.log(loggedInUser);
// console.log(loggedInUser.userEmail);
// console.log(loggedInUser.userName);

// function login(username = "n"){
// return (username)
// }
// console.log(login());

// function greet(name, cb) {
//   console.log(`Hello, ${name}`);
//   cb();
// }
// function sayGoodBye() {
//   console.log("Good Bye");

// }
// greet("Yasir", sayGoodBye);
// function fullName(n = 0, cb) {
//   const newCb = cb(10);
//   return {n, newCb};
// }
// const callback = (a) => a;
// console.log(fullName(0, callback));
// const element = document.getElementById("greeting");
// const username = prompt ("Enter your name");

// element.innerHTML = `hello,<em>${username}!</em>`
// const element = document.getElementById("greeting");
// const username = prompt("Enter your name");
// element.innerHTML = `Hello, <em>${username}!</em>`;
// console.log(element);
// const fruits = document.getElementsByClassName("fruit");
// console.log(fruits.length); // apple
// const list = document.querySelector("#food");
// console.log(list);
// for (const key in list) {
//   const element = list[key];
//   console.log(element.innerHTML);
// }
// const element = document.querySelector("ul#food li:nth-child(2)");
// console.log(element);
//
// const taskInput = document.getElementById("task-input");
// const addTaskBtn = document.getElementById("add-task-btn");
// const taskList = document.getElementById("task-list");

// let tasks = [];

// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText) {
//     const task = {
//       text: taskText,
//       completed: false,
//     };
//     task.push(task);
//        renderTasks();
//        taskInput.value = '';
//   }

// }
// function deleteTask(index) {
//   tasks.splice(index, 1);
  
//   renderTasks();
// }

// function toggleTaskCompleted(index) {
//   tasks[index].completed = !tasks[index].completed;
  
//   renderTasks();
// }

// function renderTasks() {
//   taskInput.innerHTML = "";
//   tasks.forEcha((task, index) => {
//     const taskElement = document.createElement("li");
//     textElement.textContent = task.text;
//     if (task.completed) {
//       taskElement.classList.add("completed");
//     }
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', () => deleteTask(index));
//     taskElement.appendChild(deleteButton);
//     taskElement.addEventListener('click', () => toggleTaskCompleted(index));
//     taskList.appendChild(taskElement)
//   });
// }

// addTaskBtn.addEventListener("click", addTask, deleteTask, toggleTaskCompleted);

// renderTasks();
// const btn = document.getElementById("red");
// const clickHandler = () => {
//   document.body.style.background = "yellow";
//   document.body.innerHTML = <h1>BANG!!!</h1>;
// };
// btn.addEventListener("click", clickHandler);
// document.addEventListener("click", clickHandler);
https://meet.google.com/iih-gcbj-rtm

// input element
const display = document.querySelector('#inputBox');
console.log(display);

// number btns
const numBtn = document.querySelectorAll('.num');
console.log(numBtn);

// all operators
const operators = document.querySelectorAll('.operator');
console.log(operators);

// clear btn
const clear = document.querySelector('.clear');
console.log(clear);

// equal btn
const equal = document.querySelector('.equal');
console.log(equal);

// form
const form = document.forms.calculator;

form.addEventListener('submit', e => e.preventDefault());

// bugg
numBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        display.value += btn.innerText;
    })
});

operators.forEach((opt)=>{
    opt.addEventListener('click', ()=>{
        display.value += opt.innerText; 
    })
})