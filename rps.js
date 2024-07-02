// so the concept is to to play a game that will work on the 6 option of playing it

// const ro = document.getElementsByName('rock')
// const pe = document.getElementsByName('paper')
// const sc = document.getElementsByName('scissors')

// even, computer win, player wins = there is three proablities === in this three probabilities if
// rock + paper = paper
// rock + sicssors = rock 
// paper + rock = paper
// paper + scissors = scissors
// scissors + rock = rock
// scissors + paper = scissors
// or when it comes the same one it's going to be 'even'
// function rps (){
//     if(ro === ro && pe === pe && sc === sc){
//         return 'Tie or Even'
//     }
//     else if(ro > sc){
//         return 'player win' 
//     }
//     else{
//         return 'computer win'
//     }
// }
// document.getElementById('result').onclick = innerHtml


// const buttons = document.querySelectorAll('button');
// const resultElement = document.getElementById('result');

// buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const playchoice = button.name;
//             const computerChoice = getRandomChoice();
    
//             const result = playGame(playchoice, computerChoice);
//             resultElement.innerText = result;
//         });
//     });

// function playGame(playchoice){
//     const choice = ['rock','paper','seicssors']
//     const computerChoice = choice[Math.floor(math.random()*choice.length)];

//     let result;
//     if(playchoice === computerChoice){
//         result = 'Tie'
//     } 
//     else if(
//         (playchoice === 'rock' && computerChoice === 'sciessors')||
//         (playchoice === 'scissors' && computerChoice === 'paper')||
//         (playchoice === 'paper' && computerChoice === 'rock')
//     ){
//         result = 'You Won'
//     }
//     else{
//         result = 'Computer Won'
//     }
//     document.getElementById('result').innerText = `player chose ${playchoice}, computer chose ${computerChoice}.${result}`

// }


// const buttons = document.querySelectorAll('button');
// const resultElement = document.getElementById('result');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const playerChoice = button.name;
//         const computerChoice = getRandomChoice();

//         const result = playGame(playerChoice, computerChoice);
//         resultElement.innerText = result;
//     });
// });

// function getRandomChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// function playGame(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) {
//         return 'Tie or Even';
//     } else if (
//         (playerChoice === 'rock' && computerChoice === 'scissors') ||
//         (playerChoice === 'paper' && computerChoice === 'rock') ||
//         (playerChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         return 'Player wins';
//     } else {
//         return 'Computer wins';
//     }
// }

        // const bottons = document.querySelector(button)
        // const popResult = document.getElementById('result')

        // const evenListening =  (click, => {
        //     bottons.addEventListener(button){
        //         popResult = computer.math.random(math.floor()* max)
        //         playerChoice = player.button
        //     }
        // })

        // function computerpick (){
        //     computerplay === computer.math.random(math.floor()* max{
        //         result = bottons
        //     })
        // }

        // function playGames (){
        //     if(computerpick === playerpick){
        //         result = 'Tie'
        //     }
        //     else if(
        //         (playerpick = 'rock' && computerpick = 'scissors')||
        //         (playerpick = 'sicssors' && computerpick = 'paper')||
        //         (playerpick = 'paper' && computerpick = 'rock')
        //     ){
        //         result = 'You Won'
        //     }
        //     else{
        //         result = 'Computer won'
        //     }
        // }


const buttons = document.querySelectorAll('.button'); // Assuming your buttons have a class 'button'
const popResult = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const playerChoice = this.id; // Assuming your buttons have unique IDs

    const computerChoice = computerPick(); // Call the function to get the computer's choice

    playGame(playerChoice, computerChoice);
  });
});

function computerPick() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    popResult.textContent = 'Tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    popResult.textContent = 'You Won';  
  } else {
    popResult.textContent = 'Computer Won';
  }
}



