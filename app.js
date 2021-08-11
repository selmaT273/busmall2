'use strict';
console.log('this is connected');

function Product(name) {
  this.name = name;
  this.filePath = `img/${name}.jpg`;
  this.timesShown = 0;
  this.timesClicked = 0;
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

let votingRounds = 5;

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
  
  while (randomIndexOne === randomIndexTwo || randomIndexOne === randomIndexThree || randomIndexTwo === randomIndexThree){
    randomIndexOne = generateRandomIndex(products);
    randomIndexTwo = generateRandomIndex(products);
    randomIndexThree = generateRandomIndex(products); 
  }

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

  votingRounds-= 1;
}

populate();

optionOneImage.addEventListener('click', handleClick);
optionTwoImage.addEventListener('click', handleClick);
optionThreeImage.addEventListener('click', handleClick);

let footer = document.getElementById('footer');

function handleClick(event) {
  let productClicked = products.find(product => product.name === event.target.alt);
  productClicked.timesClicked+= 1;

  console.log(productClicked.timesClicked);

  if(votingRounds === 0){
    optionOneImage.removeEventListener('click', handleClick);
    optionTwoImage.removeEventListener('click', handleClick);
    optionThreeImage.removeEventListener('click', handleClick);
    

    for(let i = 0; i < products.length; i++){
      let productName = products[i].name;
      let productTimesShown = products[i].timesShown;
      let productVotes = products[i].timesClicked;
      footer.textContent += `${productName} was shown ${productTimesShown} times and was clicked on ${productVotes} times `;
    }
  };

  populate();
}



function generateRandomIndex(array){
  let min = 0;
  let max = array.length - 1;
  return Math.floor(Math.random() * (max - min + 1));
}