// var me ={
//     fName:"Reetu",
//     lName:"Basyal",
//   married:true,
//     husband:"Nirmal";
// };
// console.log(me);
// let a = 5;

// Get the <h1> element by its ID
//  document.getElementById('myHeading').innerHTML = "New Text";

//  heading.innerHTML = "New Text";
// let flag = 0;
// let key = document.getElementById("click");

// function onClick(){
//   if(flag==0){
//     key.innerHTML="Click Me again :-)"
// flag= 1 ;
//   }
//   else{
//     key.innerHTML="Click Me"
//     flag=0;
//   }
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = "I have changed!";
//   }
// let array=[ 'apple','ball','zebra', 'cat', 'dog',]
// console.log(array.sort())
// console.log(array.reverse())
// let c = array.length
// for(i=0;i<c;i++){
//     document.write(array[i]+"<br>");
//     // document.write(<br> </br>)

// }

// let search = "cat";
// let name="index of"+search+array.indexOf(search);

// document.write(name);

// alert("Hello World!")
// confirm("Want to proceed firther")
// var forRojan=prompt("gali_gloch")

// // IF_ELSE
// if(forRojan=="yes"){
//   alert("Rojan is gay")
// }
// else{
//   alert("Rojan is not gay")

// }
// let age = prompt("Enter you'r age")
// let age = document.getElementById("age");

// if(age <=12){
//   alert("you are a  child");
// }
// else if(age  >=13&& age<= 19){
//   alert("you are a tneeger");

// }
// else if(age > 19&& age <=70){
//   alert("you'r life is FUCKED!");

// }
// else{
//   alert("you'r DEAD!");

// }
//   let date  = new Date().getDay();
// let day;

// switch (date){
// case 0:
// day = "Sunday"
// break;
// case 1:
// day = "Monday"
// break;
// case 2:
// day = "Tuesady"
// break;
// case 3:
// day = "Wednesday"
// break;
// case 4:
// day = "Thursday"
// break;
// case 5:
// day = "Friday"
// break;
// case 6:
// day = "Saturdau"
// break;

// }
// alert("Today is  : "+day);
// let a =prompt("Enter_firstNumber");
// let b = prompt("lastName");
// let operation = prompt("Operation_perform");
// if (a=="" || b==""  || operation=="") {
//isNan = for string ture & for numbers false
//   alert("Can't perform operation on 'Null' value");
// }
// else if(isNaN(a)==true || isNaN(b)==true ) {
// alert("Please, Only enter integres ")
// }
// else {
//  a = parseInt(a);
//  b=parseInt(b);
//   let result;
//   switch (operation) {
//     case "+":
//       result = a + b;
//       break;
//     case "-":
//       result = a - b;
//       break;
//     case "*":
//       result = a * b;
//       break;
//     case "/":
//       if (b==0) {
//         alert("can't divide by zero!")
//       } else {
//         result = a / b;
//       }
//       break;
//     case "%":
//       result = a % b;
//       break;

//     default:
//       alert("Invalid Operation!");
//   }
//   alert("Result: " + result);
// }

// function onClick(){
//   alert("Submitted")
// }

// Lopps in js
// let arr = ["a","d","h","i"];
// for(item in arr){
//   console.log(item);
// }
// for(item of arr){
//   console.log(item)
// }
// let i =1;
//while loop
// while(i<5){
//         console.log("the value i is"+ i);
//         i++;
// }
//Do while loop

// do{
//   console.log(i)
//   i--;
// }
// while(i>-4);
// var a = prompt("enter temp in celcius ")
// function convert(b){
//   var b = a * (9/5) + 32;
//   return b;
// }
// let c = convert(a)
// alert(c)
// let input=prompt("Enter your fav fruit")
// let arr = ["apple", "banana", "pineapple", "grapes"];
// let flag = false;

// for(item of arr)
// {
//   if(item === input)
//     flag=true;
// }
// for(i in arr){
//   if(arr[i] === input)
//     flag=true;

//     if(flag===true){   or SIMPLY var b = i;
//         break;
//     }
// }
// flag ? alert("Found in index "+i) : alert("Not Found");
// let b = ["apple","banana","mango","grapes"]
// let c = b.forEach(myFunction);
// function myFunction(value){
//   console.log(value +" guy");
// }

//NESTED FUNCTION

// function myName(){
//   let name = prompt("your name is?")
//   function displayName(){
//     alert(name)
//   }
// displayName();
// }
// myName();

// function person(){
//   this.name = "Aakash";
//   this.class="bachelor";
//   this.address="tellottma"

// }
// const man = new person();
// console.log(man)
// console.log(man.name)

//Event listerner

// let body = document.querySelector('body')
// body.addEventListener("load",function load(){    FInd THE MISTAKE
//   alert("yes baby, you are loaded!!")
// })
//Recursive function
// function count(num) {
//   console.log(num);
//   if (num > 0) {
//     num = num - 1;
//     count(num);
//   } else {
//     return;
//   }
// }
// count(10);
// let a = document.getElementById("myHeading");
// function mouseOver() {
//   a.innerHTML = "Gayab!!";
// }

// let p = document.getElementById("p");
// let q = document.getElementById("q");
// p.style.display = "none";
// q.style.display = "none";
// let boolen = true;

// function valueReturn(e) {
//   let namee = document.getElementById("name").value;
//   let password = document.getElementById("password").value;
//   let cpassword = document.getElementById("cpassword").value;
//   // let email = documetn.getElementById("email").value;

//   console.log(namee, password, cpassword);
//   e.preventDefault();
//   if (namee === "" || password === "" || cpassword === "") {
//     alert("please,Fillup the form compeletely");
//     boolen = false;
//   } else if (password.length < 8) {
//     p.style.display = "block";
//     boolen = false;
//   } else p.style.display = "none";
//   if (password !== cpassword) {
//     q.style.display = "block";
//     boolen = false;
//   } else q.style.display = "none";
//   if (boolen) {
//     alert("Form has been submitted successfully");
//   }
//   return boolen;
// }

//APPANDING ELEMENTS
// const newDev = document.createElement("span");
// let p = document.querySelector("p");
// p.appendChild(newDev).innerHTML = "HEllo Baby";

// function valueReturn() {
//   // e.preventDefault();
//   const name = document.getElementById("name").value;
//   const password = document.getElementById("password").value;
//   const cPassword = document.getElementById("cpassword").value;
//   let span = document.querySelectorAll("span");

//   for (item of span) {
//     item.textContent = "";
//   }

//   let flag = true;
//   if (name === "") {
//     let errorBox = document.createElement("span");
//     errorBox.innerHTML = "Please, enter the Name";
//     document.querySelector(".name").appendChild(errorBox);
//     flag = false;
//   } else if (name.length < 4) {
//     let errorBox = document.createElement("span");
//     errorBox.innerHTML = "Name must have at least 4 characters";
//     document.querySelector(".name").appendChild(errorBox);
//     flag = false;
//   }

//   //password
//   if (password === "") {
//     let errorBox = document.createElement("span");
//     errorBox.innerHTML = "Please,Enter the Password";
//     document.querySelector(".password").appendChild(errorBox);
//     flag = false;
//   } else if (password.length < 8) {
//     let errorBox = document.createElement("span");
//     errorBox.innerHTML = "Password must contain at least 8 characters ";
//     document.querySelector(".password").appendChild(errorBox);
//     flag = false;
//   }
//   //cPassword
//   if (password !== cPassword) {
//     let errorBox = document.createElement("span");
//     errorBox.innerHTML = "Password doesn't match ";
//     document.querySelector(".cpassword").appendChild(errorBox);
//     flag = false;
//   }
//   return flag;
// }

//REMOVE CHILD
// function handleDelete() {
//   let awa = document.getElementById("fruit");
//   let input = document.getElementById("number").value;
//   awa.removeChild(awa.children[input - 1]);
// }
//REPLACE CHILD
// function handleClick() {
//   const input = document.getElementById("name").value;
//   let add = document.createTextNode(input);
//   let element = document.getElementById("fruit").children[0];
//   console.log(element);
//   element.replaceChild(add, element.childNodes[0]);
//   console.log(element.childNodes[0]);
// }

//MAKING LIST & ADDING IT TO  DOM
function handleClick() {
  let naya = document.createElement("li");
  let text = document.createTextNode("citrus");
  let fruit = document.getElementById("fruit");
  fruit.insertBefore(naya, fruit.children[1]);
  naya.appendChild(text);
}
