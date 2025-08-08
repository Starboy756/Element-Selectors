// Element Selectors = Methods used to target and manipulate HTML Elements
//                  Allow you to select multiple HTML elements from DOM

// document.getElementById()        // Element or Null
// document.getElementsClassName()  // HTML collection
// document.getElementsByTagName()  // HTML collection
// document.querySelector()         // Element or Null first element returns only
//                                     can also select class with .class                          
// document.querySelectorAll()      // NodeList

//---------ByClassName-----------

//const fruits = document.getElementsByClassName("fruits")

// for (let fruit of fruits){
//     fruit.style.backgroundColor = "yellow"
// }
//  Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow"
//  });

// -------ByTagName---------


const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
 // -no Array is formed in this method-

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightGreen";
// }

// --Array is formed in this method--

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow"
// })

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen"
// })

// - ------querySelector()---------

// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

// - ------querySelectorAll()---------

const foods = document.querySelectorAll("li");

console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})