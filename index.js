let userScore=0;
let compScore=0;
let drawScore=0;
const userScores=document.getElementById("user-score");
const compScores=document.getElementById("comp-score");
const drawScores=document.getElementById("draw-score");

const choices=document.querySelectorAll(".choice");

// computer option generator ....

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};

//  Game draw statement print...........

const drawGame=()=> {
    drawScore++;
    drawScores.innerText=drawScore;
    document.getElementById("mssg").innerText="Game draw 🤷‍♂️ Play again 😎";
    document.getElementById("mssg").style.backgroundColor="black";
};

// user winner result print...

const showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin){
        
        userScore++;
        userScores.innerText=userScore;
        document.getElementById("mssg").innerText=`Congrates You Win ! 👑🎉 Your ${userChoice} beats ${compChoice}`;
        document.getElementById("mssg").style.backgroundColor="green";

    }
    else{
      
        compScore++;
        compScores.innerText=compScore;
        document.getElementById("mssg").innerText=` You Lose 😢 | Computer Win ! ${compChoice} beats ${userChoice}`;
        document.getElementById("mssg").style.backgroundColor="red";
    }

};

// Game logic and function.............

const playGame=(userChoice)=>{

    //Generate comp choice
    const compChoice= genCompChoice();
    
    if(userChoice=== compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

//   event listener on click........................

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});