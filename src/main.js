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
            "k-dot",
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
        correctAnswer: "the goat"
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
    return questions[index].correctAnswer === answer;
}

function getARandomQuestion() {
    let randomIndex = Math.floor(Math.random() * questions.length); // get a random index
    if (randomIndex >= questions.length || randomIndex < 0) { // check if the random index is out of bounds
        return null; // return null if it is
    }
    return randomIndex; // return the random index
}

let playerName = '';

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
function firstStep() {
    const questionIndex = getARandomQuestion();
    let answer = null;

    randomizeOptionsForAllQuestions();

    document.querySelector(".firststep").classList.remove("goaway");

    document.querySelector("#questionNumber").textContent = "Qwestion1";
    document.querySelector("#question").innerHTML = questions[questionIndex].questions;
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
    // get submit button
    const submitButton = document.querySelector("#submit-btn");
    // add event listener to submit button
    submitButton.addEventListener("click", function () { 
        checkAnswerForQuestion(questionIndex, answer); // returns either true or false depending on if the answer is correct
    });
}