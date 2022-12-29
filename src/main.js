// this is where the questions stored

const questions = [
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
            "10,080",
            "17,000",
            "8,960"
        ],
        correctAnswer: "10,080"
    },
    {
        questions: '121 Divided by 11 is?',
        options: [
            "11",
            "21",
            "12"
        ],
        correctAnswer: "11"
    },
    {
        questions: 'What is the Next Prime Number after 7?',
        options: [
            "11",
            "10",
            "14"
        ],
        correctAnswer: "11"
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
    if(questions[index].correctAnswer === answer) {
        return true;
    }
    else{
        return false;
    }
}

function getARandomQuestion() {
    let randomIndex = Math.floor(Math.random() * questions.length); // get a random index
    console.log(randomIndex);
    if (randomIndex >= questions.length || randomIndex < 0) { // check if the random index is out of bounds
        return null; // return null if it is
    }
    return randomIndex; // return the random index
    
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

function startQuiz() {

    playerName = document.getElementById("playerName").value;

    let slicedPlayerName = playerName.slice(0,1);
    slicedPlayerName = slicedPlayerName.toLocaleUpperCase();

    let restOfPlayerName = playerName.slice(1, playerName.length);
    restOfPlayerName = restOfPlayerName.toLocaleLowerCase();

    let newPlayerName = slicedPlayerName + restOfPlayerName;

    alert("hi " + newPlayerName + ", Good luck with ur game");

    document.querySelector(".start").classList.add("goaway");

    firstStep();
}



/*second function that removs the hidden property from the second div to 
show the first qwestion, then choose a random question from a random qwestionbox
and show 3 random anweres*/

//assining the random question 

function updateQuestionAndAnswers (questionIndex) {
        
    let whatQuestionDoWeHave = questions[questionIndex];

    const QuestionPlace = document.querySelector("#question");
    QuestionPlace.innerHTML = whatQuestionDoWeHave.questions;

    const ans1Button = document.querySelector("#ans1");
    ans1Button.innerHTML = questions[questionIndex].options[0];

    const ans2Button = document.querySelector("#ans2");
    ans2Button.innerHTML = questions[questionIndex].options[1];

    const ans3Button = document.querySelector("#ans3");
    ans3Button.innerHTML = questions[questionIndex].options[2];
       

}


let questionIndex = getARandomQuestion();
let answer = null;

function firstStep() {
    document.querySelector("#countdown-timer").classList.remove("goaway");

    const COUNTDOWN_DURATION = 10;

    const countdownTimer = document.querySelector("#countdown-timer");

    let countdownTime = COUNTDOWN_DURATION * 60;

    const countdownInterval = setInterval(() => {

        countdownTime--;

        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;

        countdownTimer.textContent = `${minutes}:${seconds}`;

        if(countdownTime <= 0) {
            clearInterval(countdownInterval);
        

            countdownTimer.textContent = "Time is up!";

        }
    },   1000);

    let questionNumber = 1;
   
    randomizeOptionsForAllQuestions();

    document.querySelector(".firststep").classList.remove("goaway");
    

    document.querySelector("#questionNumber").textContent = "Qwestion " + questionNumber;
    let randomQuestion = questions[questionIndex].questions;
    
    
    document.querySelector("#question").innerHTML = randomQuestion;
    
    //statements to change the style of the website based on the question group

    if (randomQuestion === q1 || randomQuestion === q2 || randomQuestion === q3 || randomQuestion === q4) {
        document.querySelector("html").classList.add("questiongroup1");
    }
    else if (randomQuestion === q5 || randomQuestion === q6 || randomQuestion === q7) {
        document.querySelector("html").classList.add("questiongroup2");

    }
    else if (randomQuestion === q8 || randomQuestion === q9 || randomQuestion === q10){
        document.querySelector("html").classList.add("questiongroup3");

    }

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

   
    
    console.log(questionIndex);
    // get submit button
     
    
    
    const submitButton = document.querySelector("#submit");

    const result = function (){
        
        questionNumber++;
        const checkResult = checkAnswerForQuestion(questionIndex, answer);
        console.log(checkResult); 
        
        document.querySelector("#questionNumber").textContent = "Qwestion " + questionNumber;
        // move to next question
        
        // check if there are more questions
        if (questionIndex < questions.length) {
            // update questionIndex to the index of the next question
            
           
            questionIndex++;
            // update question and answer options
            updateQuestionAndAnswers(questionIndex);
        }
        
        
        // else {

        //     // no more questions, display final result
        //      displayFinalResult();
        //  }
    }
    

    // add event listener to submit button
    submitButton.addEventListener("click", result);
}


