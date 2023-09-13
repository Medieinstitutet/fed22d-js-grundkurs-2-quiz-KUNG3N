// En lista med frågor, svarsalternativ, rätt svar och grupper för frågesporten
const questions = [
    { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Venus', 'Jupiter'], answer: 'Jupiter', group: 'group1' },
    { question: 'Which celestial body is known as the "Red Planet"?', options: ['Venus', 'Mars', 'Mercury'], answer: 'Mars', group: 'group1' },
    { question: 'What is the main component of the Sun?', options: ['Oxygen', 'Hydrogen', 'Helium'], answer: 'Hydrogen', group: 'group1' },
    
    { question: 'Which civilization is known for constructing the pyramids?', options: ['Roman', 'Greek', 'Egyptian'], answer: 'Egyptian', group: 'group2' },
    { question: 'Who was the king during the golden age of the Babylonian empire?', options: ['Cyrus the Great', 'King Tutankhamun', 'Hammurabi'], answer: 'Hammurabi', group: 'group2' },
    { question: 'Which civilization invented the concept of the zero in mathematics?', options: ['Greeks', 'Mayans', 'Indians'], answer: 'Indians', group: 'group2' },
    
    { question: 'Who wrote the novel "Moby-Dick"?', options: ['Mark Twain', 'Herman Melville', 'Charles Dickens'], answer: 'Herman Melville', group: 'group3' },
    { question: 'Which novel is set in the fictional town of Maycomb during the Great Depression?', options: ['To Kill a Mockingbird', 'Pride and Prejudice', 'The Catcher in the Rye'], answer: 'To Kill a Mockingbird', group: 'group3' },
    { question: 'Who is the protagonist in "1984" by George Orwell?', options: ['Samwise Gamgee', 'Holden Caulfield', 'Winston Smith'], answer: 'Winston Smith', group: 'group3' },
    { question: 'Which novel begins with the line, "Call me Ishmael."?', options: ['Moby-Dick', 'A Tale of Two Cities', 'Great Expectations'], answer: 'Moby-Dick', group: 'group3' },
];

// Definiera initiala spelparametrar
let currentIndex = -1;
let selectedAnswer = null;
let score = 0;
let timeLeft = 5 * 60;
let countdownInterval = null;

// Funktion för att blanda elementen i en array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Funktion som uppdaterar nedräkningstimern på skärmen
function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById('countdown').innerText = `Time left : ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        endQuiz();
    }
}

// Starta quizzet när start-knappen klickas på
document.getElementById("start-btn").addEventListener('click', () => {
    shuffleArray(questions);
    countdownInterval = setInterval(updateCountdown, 1000);
    document.querySelector('.start').classList.add('hidden');
    document.querySelector('.question-section').classList.remove('hidden');
    nextQuestion();
});

// Kontrollera svar när skicka-knappen klickas på
document.getElementById("submit").addEventListener('click', () => {
    if (selectedAnswer === questions[currentIndex].answer) {
        score++;
    }
    if (currentIndex < questions.length - 1) {
        nextQuestion();
    } else {
        endQuiz();
    }
});

// Lyssna på klickhändelser för varje svarsalternativ
document.querySelectorAll('#options button').forEach(button => {
    button.addEventListener('click', function() {
        selectAnswer(this.innerText);
    });
});

// Funktion för att visa nästa fråga
function nextQuestion() {
    currentIndex++;
    const questionObj = { ...questions[currentIndex] };
    const shuffledOptions = [...questionObj.options];
    shuffleArray(shuffledOptions);
    
    document.getElementById('question').innerText = questionObj.question;

    const buttons = document.querySelectorAll('#options button');
    buttons.forEach((btn, idx) => {
        // Remove the selected state for every button when a new question appears
        btn.classList.remove('selected'); 
        
        if (shuffledOptions[idx]) {
            btn.innerText = shuffledOptions[idx];
            btn.style.display = 'inline-block';
        } else {
            btn.style.display = 'none';
        }
    });

    const body = document.querySelector('body');
    
    body.classList.remove('group1', 'group2', 'group3');

    body.classList.add(questionObj.group);
}

// Funktion för att sätta det valda svaret
function selectAnswer(answer) {
    selectedAnswer = answer;
}

// Funktion för att avsluta frågesporten
function endQuiz() {
    clearInterval(countdownInterval);

    document.querySelector('.question-section').classList.add('hidden');
    document.querySelector('.end-section').classList.remove('hidden');
    document.getElementById('score').innerText = `Your score: ${score}/${questions.length}`;

    const timeTaken = 5 * 60 - timeLeft;
    const minutesTaken = Math.floor(timeTaken / 60);
    const secondsTaken = timeTaken % 60;
    const scoreElem = document.getElementById('score');
    scoreElem.innerHTML += `<br>Time taken: ${minutesTaken} minutes ${secondsTaken} seconds`;
}

// Funktion för att starta om frågesporten
document.getElementById("restart").addEventListener('click', () => {
    window.location.reload();
});