/*Set variables  for score counting + cpu choice
const choice= [ "Rock","Paper","Scissor"];
let humanScore =0;
let cpuScore = 0;
var i=1

while (i<=3){
    //get user input + generate cpu answer
    user()
    i++;
}
if(humanScore = cpuScore){
    alert("it's a tie")
}
else{

    humanScore> cpuScore ? alert('you\'re the winner at ' + humanScore +' points'): alert('cpu wins at ' + cpuScore+ ' points')
}

function user()
{
        let answer= prompt("Make Thy Choice.\n Rock, Paper, Scissor?");
        let cpuAns = cpu();

        if ((answer === "Rock" && cpuAns ==="Scissor") 
            || (answer === "Scissor" && cpuAns ==="Paper" ) 
            || (answer === "Paper" && cpuAns ==="Rock" ))
        {

            alert("CPU Chose " + cpuAns + " You win")
            humanScore++;

        }
        else if(answer === cpuAns)
        {
            alert("CPU Chose " + cpuAns + " It's a tie")

        }
        else
        {
            alert("CPU Chose " + cpuAns + " You lose ")
            cpuScore++;
        }
}
function cpu()
{
    return choice[Math.floor(Math.random() * 3)]
}
*/

document.addEventListener("DOMContentLoaded", function() {
     //CONST and VARS
    const choice= [ "rock","paper","scissor"];
    const btns = document.querySelectorAll('button') ;
    const disp = document.querySelector('.display');
    const scoredisplay = document.querySelector("#scorecard")
    let humanScore =0;
    let cpuScore = 0;
    scoredisplay.innerHTML = "<span>" +humanScore  +"/"+cpuScore +"</span>"

    //Set Event Listeners on Buttons
    btns.forEach(button => {
        button.addEventListener("click" , ( e) => { 
            let userChoice ="";
            let target =e.target.id ;
            if (target === "rock")
            {
                disp.innerHTML = "ROCK! ...Solid choice...";
                userChoice= "rock";
            }
            else if (target === "paper")
            {
                disp.innerHTML = "PAPER... ";
                userChoice= "paper";
            }
            else {
                disp.innerHTML = "Sharp choice";
                userChoice = "scissors";
            } 
            let cpuChoice = getCpuChoose();    
            getWinner(userChoice,cpuChoice)

            })   
        });
    
    //CPU Random Choice
    function getCpuChoose() {
        return choice[Math.floor(Math.random() * 3)]
    }

    //CPU Random Choice
    function getWinner(userChoice, cpuChoice){

        let choice = "";
        if (   (userChoice === "rock" && cpuChoice === "scissors" ) 
            || (userChoice === "scissors" && cpuChoice === "paper" ) 
            || (userChoice === "paper" && cpuChoice === "rock" ))
        {
            choice= "CPU Chose " + cpuChoice + ".\n You win!!";
            humanScore++;
        }
        else if(userChoice === cpuChoice)
        {
            choice="CPU Chose " + cpuChoice + ".\n It's a tie";
        }
        else
        {
            choice="CPU Chose " + cpuChoice + ".\n You lose";
            cpuScore++;
        }
        disp.innerHTML=choice;
        scoredisplay.innerHTML = "<span>" +humanScore  +"/"+cpuScore +"</span>"

    }
});


