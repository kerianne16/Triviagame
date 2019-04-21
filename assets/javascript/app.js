var pos = 0;
var correct = 0;
var timer = 15;
var quiz, quiz_status, question, choice, choices, chA, chB, chC;
var timeInterval;

var questions = [
    ["In what place was Christmas once illegal?", "Russia", "Brazil", "England", "C"],
    ["How many pounds of pressure do you need to rip off your ear?", "11", "5", "8", "C"],
    ["What is the longest running American animated TV show?", "Pokemon", "The Simpsons", "Family Guy", "B"],
    ["What is the name of Jon's direwolf in Game of Thrones?", "Ghost", "Snowflake", "Roger", "A"]
];
console.log(questions);

function get(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = get("test");
    if (pos >= questions.length) {
        get("quiz").innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("quiz_status").innerHTML = "Quiz Completed";

        pos = 0;
        correct = 0;
        clearInterval(timeInterval);
        return false;
    }

    get("quiz_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];

    get("quiz_question").innerHTML = question;
    get("quiz").innerHTML = '';
    get("quiz").innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    get("quiz").innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    get("quiz").innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    get("quiz").innerHTML += "<button onclick='checkAnswer () '>Submit Answer</button";
}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    get('error').innerHTML = '';

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }

    if (choice == questions[pos][4]) {
        correct++;
    }
    pos++;

    renderQuestion();
}

function resetGame() {
    pos = 0;
    correct = 0;
    renderQuestion();
}

function gameTimer() {
    if (timer === 0) {
        timer = 15;
        get('error').innerHTML = "Timer ran out, game will reset"
        resetGame();
    } else {
        timer = timer - 1;
    }
    get('timer').innerHTML = timer;
}

timeInterval = setInterval(gameTimer, 1000)


window.addEventListener("load", renderQuestion, false);

