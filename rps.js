//Set variables  for score counting + cpu choice
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