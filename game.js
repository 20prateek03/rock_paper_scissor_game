let modeBtn = document.querySelector("#mode");
let currmode ="light";
let body=  document.querySelector("body");

modeBtn.addEventListener("click",() => {
    if(currmode === "light"){
        currmode ="dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");
        modeBtn.innerHTML="Change to Light Mode"
    }
    else{
        currmode ="light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        modeBtn.innerHTML="Change to Dark Mode"
        body.classList.remove("dark");
    }

    console.log(currmode);
});



// game building
let userScore = 0;
let compScore =0;
let userWin = true;

const choices = document.querySelectorAll(".choice");
const msg1 = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const compChoiceGen = () =>{
    const options =["rock","scissor","paper"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawGame =() => {
    console.log("game draw");
    msg1.innerText="Game Draw";
    msg1.style.backgroundColor ="#8AB0AB";
};

const playGame = (userChoice) => {
    // console.log("Userchoice was ",userChoice);
    const compChoice = compChoiceGen();
    // console.log("Computer choice was",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else {
   
        if(userChoice === "rock"){
            userWin=compChoice === "paper" ? false : true;
        }
    
        else if(userChoice === "paper"){
               userWin = compChoice === "scissor" ? false : true;
            }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }       
};

const showWinner= (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        
        userscorePara.innerText = userScore;
        msg1.innerText=`YOU WIN!! Your ${userChoice} beats Computer's ${compChoice}`;
        msg1.style.backgroundColor ="green";
       
    }else{
        console.log("comp win");
        compScore++;
        compscorePara.innerText = compScore;
        msg1.innerText=`YOU LOSE :( Computer's ${compChoice} beats your ${userChoice}`;
        msg1.style.backgroundColor ="red";

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});
