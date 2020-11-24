import "./styles.css";

// const showMatrix = (size) => {
//   const container = document.getElementById("container");
//   let html = "";
//   for (let i = 0; i < size; i++) {
//     html += '<div class="row">';
//     for (let j = 0; j < size; j++) {
//       html += `<div class="column" data-row="${j}" data-column="${i}"></div>`;
//     }
//     html += "</div>";
//   }
//   container.innerHTML = html;
//   container.addEventListener('click', (e) => {
//     const cell = e.target;
//     console.log(cell.getAttribute('data-row'),cell.getAttribute('data-column'));
//   });
// };

// showMatrix(3);

// s1 = facebook, s2 = obo (boo, oob, acf)

// const isSubstring = (s1, s2) => {
//   let count = 0;
//   const s2Arr = s2.split('');
//   for(let s of s1) {
//     const index = s2Arr.indexOf(s);
//     if(index > -1){
//       s2Arr.splice(index, 1);
//       count++;
//     } else {
//       count = 0;
//     }
//     if(count === s2.length){
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isSubstring('facebook', 'caf'));
// console.log(isSubstring('facebook', 'eok'));
// console.log(isSubstring('facebook', 'obok'));

// Function.prototype.custombind = function (context, ...args) {
//   const func = this;
//   return (...innerArgs) => {
//     return func.call(context, ...args, ...innerArgs);
//   }
// }

// const obj = {
//   name: 'sharad',
//   n: 1
// };

// const func = function (n1, n2) {
//   return n1+n2+this.n;
// };
// const boundfunc = func.custombind(obj, 2);
// const result = boundfunc(3);
// console.log(result);

// const obj = {

// };
// console.log('here');
// Object.prototype.watch = function (key, callback) {
//   console.log('watch executed');
//   Object.defineProperty(this, key, {
//     set: function(newValue) {
//       //this[key] = newValue;
//       callback();
//     }
//   });
// };

// function Person() {
//   this.name = 'sharad';
// };

// var p = new Person();
// p.watch('name', () => console.log('property changed'));
// p.name = 'foobar';

// watch, takes a property name, callback
// executes the callback when property changes

const arr = [12, 7, 2, 45];
console.log(arr.sort((a, b) => a - b));
