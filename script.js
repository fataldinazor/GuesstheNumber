'use strict';

// let rNumber=Math.ceil(Math.random()*20);
// console.log(rNumber);

// const checkbtn=document.querySelector('.check');
// let highScore=0, currentScore=20;
// let lowNumber=document.querySelector('.message');
// let highNumber=document.querySelector('.message');
// let correctNumber=document.querySelector('.message');
// let showOrg=document.querySelector('.number');
// let currScore=document.querySelector('.score');

// checkbtn.addEventListener('click',()=>{
//     let guess=Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);
//     if(guess<1 || guess>20)
//     {
//         document.querySelector('.message').textContent='Enter a Number between the range of 1-20';
//     }
//     else{
//         if(guess<rNumber){
//             lowNumber.textContent='Too Low😴'
//             currentScore--;
//             currScore.textContent=currentScore;
//         }
//         else if(guess>rNumber){
//             highNumber.textContent='Too High🤑';
//             currentScore--;
//             let currScore=document.querySelector('.score');
//             currScore.textContent=currentScore;
//         }
//         else {
//             correctNumber.textContent='Correct Number🙌';
//             showOrg.textContent=rNumber;
//             document.querySelector('body').style.backgroundColor = '#60b347';
//             document.querySelector('.number').style.width = '30rem';
//             if(highScore<currentScore){
//                 let hiScore=document.querySelector('.highscore');
//                 hiScore.textContent=currentScore;
//             }
//         }
//     }
    
// });
//     document.querySelector('.again').addEventListener('click', ()=>{
//         rNumber=Math.ceil(Math.random()*20);
//         console.log(rNumber);
//         currentScore=20;
//         showOrg.textContent='?';
//         currScore.textContent=currentScore;
//     })

let rNumber=Math.ceil(Math.random()*20);
console.log(rNumber);

let score=20,highScore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
};

document.querySelector('.check').addEventListener('click',()=>{
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

if(!guess){
    displayMessage('No Number!');
}
else if(guess===rNumber){
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = rNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.with='30rem';

    if(score>highScore)
    {
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
}
else if(guess!==rNumber){
    if(score>1){
      displayMessage(guess>rNumber ? '📈 Too high!' : '📉 Too low!')
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
        displayMessage('You Lost the Game')
        document.querySelector('.score').textContent = 0;
    }
}
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    rNumber = Math.ceil(Math.random() * 20) ;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  