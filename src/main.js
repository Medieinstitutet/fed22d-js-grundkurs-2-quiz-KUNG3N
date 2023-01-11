//variables
let currentScore = 0;
let questionIndex = 0;
let answer = null;
let questionNumber = 1;
let answeredQuestions = [];
let playerName = '';
let nameOfPlayerAlertShown = false;
let countdownInterval2;

//eventlisterners
document.querySelector("#start-btn").addEventListener("click", startQuiz);
document.querySelector("#repeat").addEventListener("click", repeat)
document.querySelector("#submit").addEventListener("click", submit);

//timers
const countdownTimer2 = document.querySelector("#countdown-timer-2");
const countdownTimer = document.querySelector("#countdown-timer");

const COUNTDOWN_DURATION_2 = 60;
let countdownTime2 = COUNTDOWN_DURATION_2;

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

//information array
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
            "jack and rose"
        ],
        correctAnswer: "titanic"
    }
]

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

//randomQuestionGenerator:)
function randomizeQuestions(){
    const currQuestions = questions;
    const randomQuestions = []
    while (currQuestions.length > 0) { 
        const randomIndex = Math.floor(Math.random() * currQuestions.length); 
        randomQuestions.push(currQuestions[randomIndex]);
        currQuestions.splice(randomIndex, 1);
    }
    questions = randomQuestions;
}

function getARandomQuestion() {
    let randomIndex = Math.floor(Math.random() * questions.length); 
    if (randomIndex >= questions.length || randomIndex < 0) {
        return null;
    }
    return randomIndex; 
}

//randomAnswereGenerator:)
function randomizeOptionsForAllQuestions() { 
    for (let i = 0; i < questions.length; i++) {
        const options = questions[i].options; 
        const newOptions = [] 
        while (options.length > 0) { 
            const randomIndex = Math.floor(Math.random() * options.length); 
            newOptions.push(options[randomIndex]); 
            options.splice(randomIndex, 1);
        }
        questions[i].options = newOptions;
    }
}

//collecting information for the score
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

/*first page function to collect player name with a failsafe if no name was put.
a little welcome message and calling the question function*/
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

/*calling the randomQuestionGenerator and applying the question timer. calling the randomAnswereGenerator 
then displaing them in */
function firstStep() {
    randomizeQuestions();
    questionIndex = 0;
    questionNumber = 1;

    document.querySelector("#countdown-timer").classList.remove("goaway");

    const COUNTDOWN_DURATION = 10;

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
    document.querySelector(".firststep").classList.remove("goaway");

    randomizeOptionsForAllQuestions();

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

    //chaingng the style of the website based on the question group
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

//displaing new random wuestions and answeres everytime the submit button is clicked
function updateQuestionAndAnswers(index) {

    if (answeredQuestions.length === questions.length) return;


    answeredQuestions.push(index);

    const question = questions[index].questions;

    document.querySelector("#question").textContent = question;

    document.querySelector("#ans1").textContent = questions[index].options[0];
    document.querySelector("#ans2").textContent = questions[index].options[1];
    document.querySelector("#ans3").textContent = questions[index].options[2];

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

//mostly hiding stuff and showing one thing
function displayFinalResult() {
    document.querySelector(".firststep").classList.add("goaway");
    document.querySelector("#countdown-timer").classList.add("goaway");
    document.querySelector("#countdown-timer-2").classList.add("goaway");
    document.querySelector("html").classList.remove("questiongroup1", "questiongroup2", "questiongroup3");
    document.querySelector(".final").classList.remove("goaway");
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

    if (questionIndex < questions.length) {
        updateQuestionAndAnswers(questionIndex);
        
    }else {
        displayFinalResult();
    }
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