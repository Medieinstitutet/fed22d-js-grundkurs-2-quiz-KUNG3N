// this is where the questions stored

let currentScore = 0;
let questionNumber = 1;


const countdownTimer2 = document.querySelector("#countdown-timer-2");

let countdownInterval2;

const startCountdownInterval2 = () => {
countdownTime2 = COUNTDOWN_DURATION_2;

clearInterval(countdownInterval2);

countdownInterval2 = setInterval(() => {
countdownTime2--;

countdownTimer2.textContent = `Time left: ${countdownTime2}`;

    if (countdownTime2 <= 0) {
    clearInterval(countdownInterval2);

    countdownTimer2.textContent = "Time is up!";
    }
    }, 1000);
};    

let questions = [
    {
        questions: 'Who was the Ancient Greek God of the Sun?',
        options: [
            "Apollo",
            "Hermis",
            "Zoes"
        ],
        correctAnswer: "Apollo"
    },
    {
        questions: 'What artist has the most streams on Spotify?',
        options: [
            "Drake",
            "The Weekend",
            "Ariana Grande"
        ],
        correctAnswer: "Drake"
    },
    {
        questions: 'What sports car company manufactures the 911?',
        options: [
            "Porsche",
            "Ferrari",
            "BMW"
        ],
        correctAnswer: "Porsche"
    },
    {
        questions: 'In what country is the Chernobyl nuclear plant located?',
        options: [
            "Ukraine",
            "Russia",
            "Serbia"
        ],
        correctAnswer: "Ukraine"
    },
    {
        questions: 'How many minutes are in a full week?',
        options: [
            "10.080",
            "17.000",
            "8.960"
        ],
        correctAnswer: "10.080"
    },
    {
        questions: '121 Divided by' +  11 + 'is?',
        options: [
            11,
            21,
            12
        ],
        correctAnswer: 11
    },
    {
        questions: 'What is the Next Prime Number after' + 7 + '?',
        options: [
            11,
            10,
            14
        ],
        correctAnswer: 11
    },
    {
        questions: 'who is this person?',
        options: [
            "rober downey jr",
            "iron man",
            "your uncel steve"
        ],
        correctAnswer: "rober downey jr"
    },
    {
        questions: 'whats this rappers name?',
        options: [
            "kendrick lamar",
            "kung fu kenny",
            "the goat"
        ],
        correctAnswer: "the goat"
    },
    {
        questions: 'what was this movies name?',
        options: [
            "the titanic",
            "titanic",
            "jack and rose story"
        ],
        correctAnswer: "titanic"
    }
]

/**
 * Randomizes the options for all questions
 * This function loops through the questions array and calls the randomizeOptionsForQuestion function
 * for each question
*/

function randomizeOptionsForAllQuestions() { 
    // loop through the questions array
    for (let i = 0; i < questions.length; i++) {
        const options = questions[i].options; // get the options for the current question
        const newOptions = [] // create a new array to store the randomized options
        while (options.length > 0) { // loop through the options array
            const randomIndex = Math.floor(Math.random() * options.length); // get a random index
            newOptions.push(options[randomIndex]); // add the option at the random index to the new array
            options.splice(randomIndex, 1); // remove the option at the random index from the options array
        }
        questions[i].options = newOptions; // set the options for the current question to the new array
    }
}

function checkAnswerForQuestion(index, answer) {
    console.log(questions[index].correctAnswer, answer)

    let res = true;
    if(questions[index].correctAnswer === answer) {
        currentScore++;
    }
    else{
        if (currentScore > 0) {
            currentScore--;
        }
        res = false;
    }

    document.getElementById("highscore").innerHTML = currentScore;
    return res;
}

function getARandomQuestion() {
    let randomIndex = Math.floor(Math.random() * questions.length); // get a random index
    if (randomIndex >= questions.length || randomIndex < 0) { // check if the random index is out of bounds
        return null; // return null if it is
    }
    return randomIndex; // return the random index  
}

function randomizeQuestions(){
    const currQuestions = questions;
    const randomQuestions = []
    while (currQuestions.length > 0) { // loop through the options array
        const randomIndex = Math.floor(Math.random() * currQuestions.length); // get a random index
        randomQuestions.push(currQuestions[randomIndex]); // add the option at the random index to the new array
        currQuestions.splice(randomIndex, 1); // remove the option at the random index from the options array
    }
    questions = randomQuestions;
}

let playerName = '';
//question group 1
const q1 = questions[0].questions; 
const q2 = questions[1].questions;
const q3 = questions[2].questions;
const q4 = questions[3].questions;
//question group 2
const q5 = questions[4].questions; 
const q6 = questions[5].questions;
const q7 = questions[6].questions;
//question group 3
const q8 = questions[7].questions;
const q9 = questions[8].questions; 
const q10 = questions[9].questions;
// runing the first code to start the quiz
document.querySelector("#start-btn").addEventListener("click", startQuiz);

/*first function that stores the input and makes it look professional,
runs the alert to welcome the player and add the hidden property to the div
then runs the second funtion firststep.*/

let nameOfPlayerAlertShown = false;

function startQuiz() {

    playerName = document.getElementById("playerName").value;

    if(playerName.length === 0){
        alert("Please provide a name, we want to track you :)")
        return
    }

    let slicedPlayerName = playerName.slice(0,1);
    slicedPlayerName = slicedPlayerName.toLocaleUpperCase();

    let restOfPlayerName = playerName.slice(1, playerName.length);
    restOfPlayerName = restOfPlayerName.toLocaleLowerCase();

    let newPlayerName = slicedPlayerName + restOfPlayerName;

    if(!nameOfPlayerAlertShown) {

    alert("hi " + newPlayerName + ", Good luck with ur game");
    nameOfPlayerAlertShown = true;

    }

    document.querySelector(".start").classList.add("goaway");

    firstStep();
}

// move to next question
let answeredQuestions = [];

function updateQuestionAndAnswers(index) {

    // check if all questions have been answered
    if (answeredQuestions.length === questions.length) return;


    // add the index of the current question to the answeredQuestions array
    answeredQuestions.push(index);

    const question = questions[index].questions;

    document.querySelector("#question").textContent = question;

    document.querySelector("#ans1").textContent = questions[index].options[0];
    document.querySelector("#ans2").textContent = questions[index].options[1];
    document.querySelector("#ans3").textContent = questions[index].options[2];

    //showing respectiv pics to respective questions
    if (question === q8) {
        document.querySelector(".ironman").classList.remove("goaway");
        document.querySelector(".kendrick").classList.add("disappear");
        document.querySelector(".titanic").classList.add("disappear");
    }
    if (question === q9) {
        document.querySelector(".kendrick").classList.remove("goaway");
        document.querySelector(".ironman").classList.add("disappear");
        document.querySelector(".titanic").classList.add("disappear"); 
    }
    if (question === q10) {
        document.querySelector(".titanic").classList.remove("goaway");
        document.querySelector(".ironman").classList.add("disappear");
        document.querySelector(".kendrick").classList.add("disappear");
    }

    //removing the old styles before implementing new ones

    document.querySelector("html").classList.remove("questiongroup1", "questiongroup2", "questiongroup3");

    if (question === q1 || question === q2 || question === q3 || question === q4) {
        document.querySelector("html").classList.add("questiongroup1");
      } else if (question === q5 || question === q6 || question === q7) {
        document.querySelector("html").classList.add("questiongroup2");
      } else if (question === q8 || question === q9 || question === q10) {
        document.querySelector("html").classList.add("questiongroup3");
      }

    countdownTime2 = COUNTDOWN_DURATION_2;

}

const COUNTDOWN_DURATION_2 = 60;
let countdownTime2 = COUNTDOWN_DURATION_2;
let questionIndex = 0;

let answer = null;

/*second function that removs the hidden property from the second div to 
show the first qwestion, then choose a random question from a random qwestionbox
and show 3 random anweres*/

function firstStep() {
    randomizeQuestions();
    questionIndex = 0;
    questionNumber = 1;

    document.querySelector("#countdown-timer").classList.remove("goaway");

    const COUNTDOWN_DURATION = 10;

    const countdownTimer = document.querySelector("#countdown-timer");

    let countdownTime = COUNTDOWN_DURATION * 60;

    const countdownInterval = setInterval(() => {

        countdownTime--;

        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;

        countdownTimer.textContent = `QUIZ Time remaining: ${minutes}:${seconds}`;

        if(countdownTime <= 0) {
            clearInterval(countdownInterval);
        

            countdownTimer.textContent = "Time is up!";

        }
    },   1000);

    document.querySelector("#countdown-timer-2").classList.remove("goaway");

       
    randomizeOptionsForAllQuestions();

    document.querySelector(".firststep").classList.remove("goaway");
    

    document.querySelector("#questionNumber").textContent = "Qwestion " + questionNumber;
    let randomQuestion = questions[questionIndex].questions;
    
    
    document.querySelector("#question").innerHTML = randomQuestion;

    document.querySelector("#ans1").innerHTML = questions[questionIndex].options[0];
    document.querySelector("#ans2").innerHTML = questions[questionIndex].options[1];
    document.querySelector("#ans3").innerHTML = questions[questionIndex].options[2];

    document.querySelector("#ans1").addEventListener("click", function () { 
        answer = questions[questionIndex].options[0];
    });
    document.querySelector("#ans2").addEventListener("click", function () {
        answer = questions[questionIndex].options[1];
    });
    document.querySelector("#ans3").addEventListener("click", function () {
        answer = questions[questionIndex].options[2];
    });

    //style changer
    if (randomQuestion === q1 || randomQuestion === q2 || randomQuestion === q3 || randomQuestion === q4) {
        document.querySelector("html").classList.add("questiongroup1");
    }
    else if (randomQuestion === q5 || randomQuestion === q6 || randomQuestion === q7) {
        document.querySelector("html").classList.add("questiongroup2");

    }
    else if (randomQuestion === q8 || randomQuestion === q9 || randomQuestion === q10){
        document.querySelector("html").classList.add("questiongroup3");

    }
}

 function submit (){
    questionNumber++;
    
    const checkResult = checkAnswerForQuestion(questionIndex, answer);
    
    questionIndex++;

    document.querySelector("#questionNumber").textContent = "Qwestion " + questionNumber;

    startCountdownInterval2();

    document.querySelector(".ironman").classList.add("goaway");
    document.querySelector(".kendrick").classList.add("goaway");
    document.querySelector(".titanic").classList.add("goaway");

    // check if there are more questions
    if (questionIndex < questions.length) {
        // update question and answer options
        updateQuestionAndAnswers(questionIndex);
        
    }else {

    // no more questions, display final result
    displayFinalResult();

    // stop countdown timer
    clearInterval(countdownInterval);
    }
}


// const numCorrectAnswers = answer.filter((answer) => answer.isCorrect).length;

function displayFinalResult() {
    document.querySelector(".firststep").classList.add("goaway");
    document.querySelector("#countdown-timer").classList.add("goaway");
    document.querySelector("#countdown-timer-2").classList.add("goaway");
    document.querySelector("html").classList.remove("questiongroup1", "questiongroup2", "questiongroup3");
    document.querySelector(".final").classList.remove("goaway");
}



function repeat () {
    // document.querySelector(".final").classList.add("goaway");

    // playerName = prompt("Please enter your name:");

    // alert("Hello " + playerName + " lets go again!")

    // if(!playerName || playerName.length === 0){
    //     repeat();
    // }

    // firstStep();

    //okej this is basically cheating HAHA but because the function is not workign like it shoudl imma just put this here for now

    location.reload();
}

document.querySelector("#repeat").addEventListener("click", repeat)
document.querySelector("#submit").addEventListener("click", submit);
