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
  'cthulu',
  'dog-duck',
  'dragon',
  'pen',
  'pen-sweep',
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

// populate 3 products side by side
let optionOne = document.getElementById('option-1');
let optionTwo = document.getElementById('option-2');
let optionThree = document.getElementById('option-3');

optionOne.setAttribute('src', products[0].filePath);
optionTwo.setAttribute('src', products[1].filePath);
optionThree.setAttribute('src', products[2].filePath);
