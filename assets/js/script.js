var gameStarted = false;
var gameReset = $('#reset')
var timeEl = $('.time');
var startGame = $('#start');
var secondsLeft = 6;
var questThemeInput = $("#question-theme");
var questFullInput = $("#question-full");
var answerAInput = $("#answer-a");
var answerBInput = $("#answer-b");
var answerCInput = $("#answer-c");
var answerDInput = $("#answer-d");
var currentQuestion = -1;
var answerCorrect = 1;
var answerIncorrect = 0;
var totalScore = 0;

var questionBank = [
    ['Shapes',
    'Pick "Square".',
    'Square',
    'Circle',
    'Pentagon',
    'Nonagon',
    'a'],
    ['Colors',
    'Pick "Yellow".',
    'Orange',
    'Yellow',
    'Green',
    'Puce',
    'b'],
    ['Measurements of distance',
    'Pick "Kilometers".',
    'Inches',
    'Parsec',
    'Kilometers',
    'Farsee',
    'c']
];

function runTimer() {
    if (gameStarted === true) {
        // get rid of "begin" button
        // add question and answers buttons
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.text("Timer: " + secondsLeft + "s");

            if(secondsLeft === 0) {
            console.log("Timer Ended");
            clearInterval(timerInterval);
            gameStarted = false;
            confirm("Your time ran out!");
            // show score
            // prompt for initials
            // store initials
            // show high scores
            }

        }, 1000);
    }
}



function resetGame() {

    gameStarted = false;
    currentQuestion = -1;
    secondsLeft = 60;
    startGame.show();
    answerAInput.hide();
    answerBInput.hide();
    answerCInput.hide();
    answerDInput.hide();
    questThemeInput.text('Proficiency quiz');
    questFullInput.text('Are you ready to take a proficiency quiz?');
    totalScore = 0;
}

function scoreGame() {

}

function nextQuestion() { 
    if (currentQuestion != questionBank.length - 1) {
        currentQuestion++;
        questThemeInput.text(questionBank[currentQuestion][0]);
        questFullInput.text(questionBank[currentQuestion][1]);
        answerAInput.show();
        answerAInput.text(questionBank[currentQuestion][2]);
        answerBInput.show();
        answerBInput.text(questionBank[currentQuestion][3]);
        answerCInput.show();
        answerCInput.text(questionBank[currentQuestion][4]);
        answerDInput.show();
        answerDInput.text(questionBank[currentQuestion][5]);
        console.log(totalScore);
    } else {
        console.log(totalScore);
        console.log("End of question bank");
    }
}

startGame.click(function() {
    startGame.hide();
    gameStarted = true;
    runTimer();
    console.log("Start button was clicked");
    nextQuestion();
});

answerAInput.click(function() {
    console.log("Answer A was clicked.");
    if (questionBank[currentQuestion][6] === 'a') {
        totalScore++;
    };
        nextQuestion();
});

answerBInput.click(function() {
    console.log("Answer B was clicked.");
    if (questionBank[currentQuestion][6] === 'b') {
        totalScore++;
    };
        nextQuestion();
});

answerCInput.click(function() {
    console.log("Answer C was clicked.");
    if (questionBank[currentQuestion][6] === 'c') {
        totalScore++;
    };
        nextQuestion();
});

answerDInput.click(function() {
    console.log("Answer D was clicked.");
    if (questionBank[currentQuestion][6] === 'd') {
        totalScore++;
    };
        nextQuestion();
});

gameReset.click(resetGame);