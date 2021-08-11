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
let optionOneImage = document.getElementById('option-1');
let optionTwoImage = document.getElementById('option-2');
let optionThreeImage = document.getElementById('option-3');

function populate() {
  let randomIndexOne = generateRandomIndex(products);
  let randomIndexTwo = generateRandomIndex(products);
  let randomIndexThree = generateRandomIndex(products);
  
  let optionOne = products[randomIndexOne];
  optionOne.timesShown++;
  console.log(`${optionOne.name} was shown`,optionOne.timesShown);
  let optionTwo = products[randomIndexTwo];
  optionTwo.timesShown++;
  console.log(`${optionTwo.name} was shown`, optionTwo.timesShown);
  let optionThree = products[randomIndexThree];
  optionThree.timesShown++;
  console.log(`${optionThree.name} was shown`, optionThree.timesShown);
  
  optionOneImage.setAttribute('src', optionOne.filePath);
  optionOneImage.setAttribute('alt', optionOne.name);
  optionTwoImage.setAttribute('src', optionTwo.filePath);
  optionTwoImage.setAttribute('alt', optionTwo.name);
  optionThreeImage.setAttribute('src', optionThree.filePath);
  optionThreeImage.setAttribute('alt', optionThree.name);
}

populate();

optionOneImage.addEventListener('click', handleClick);
optionTwoImage.addEventListener('click', handleClick);
optionThreeImage.addEventListener('click', handleClick);

function handleClick(event) {
  populate();
  // console.log(`${event.target.alt} was clicked`);
} 

function generateRandomIndex(array){
  let min = 0;
  let max = array.length - 1;
  return Math.floor(Math.random() * (max - min + 1));
}