'use strict';
console.log('this is connected');

function Product(name) {
  this.name = name;
  this.filePath = `${name}.jpg`;
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

