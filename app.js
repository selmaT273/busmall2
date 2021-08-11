'use strict';
console.log('this is connected');

function Product(name) {
  this.name = name;
  this.filePath = `img/${name}.jpg`;
  this.timesShown = 0;
};

const imageNames = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'tauntaun',
  'unicorn',
  'water-can',
  'wine-glass',
  'sweep'
];

let products = [];

for(let i = 0; i < imageNames.length; i++) {
  products.push(new Product(imageNames[i]));
}

console.log(products);

// populate 3 random products side by side
let optionOne = document.getElementById('option-1');
let optionTwo = document.getElementById('option-2');
let optionThree = document.getElementById('option-3');

optionOne.setAttribute('src', products[generateRandomIndex(products)].filePath);
optionTwo.setAttribute('src', products[generateRandomIndex(products)].filePath);
optionThree.setAttribute('src', products[generateRandomIndex(products)].filePath);

optionOne.addEventListener('click', handleClick);
optionTwo.addEventListener('click', handleClick);
optionThree.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(event.target);
} 

function generateRandomIndex(array){
  let min = 0;
  let max = array.length - 1;
  return Math.floor(Math.random() * (max - min + 1));
}