const getUserChoice = userInput => {
   userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
     return userInput

   } else {
console.log('you done messed up,bradley stinks very bad,this code is owned by Cole Jordan Countryman')
   }
 }

const getComputerChoice = () => {
  const randomNumber = Math.floor (Math.random() * 3); 
switch (randomNumber) {
 case 0:
  return 'rock';
  case 1:
  return 'paper';
 case 2:
  return 'scissors';
  } 
};

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  return 'this game is a tie (your bad)';
}
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'you suck the computer beat you';
  } else {
   return 'you won'; 
  }
  }


if (userChoice === 'paper') {
 if (computerChoice === 'scissors') {
   return 'you lost';
 } else {
   return 'you won.';
 }
} 

if (userChoice === 'scissors') {
 if (computerChoice === 'rock') { 
  return 'computer won';
} else {
return 'you have won';
  }
 }
};


const playGame = () => {
  const userChoice = getUserChoice('rock')
  const computerChoice = getComputerChoice();
  console.log('you threw: ' + userChoice);
console.log('computer threw: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
};

playGame()

