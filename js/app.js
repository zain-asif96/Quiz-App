function startQuiz() {
    document.getElementById('btn').style.visibility = "hidden";
    return displayQuestion();
}

var position = 0;
var test;
var test_status;
var question;
var option;
var options;
var optionA;
var optionB;
var optionC;
var optionD;
var score = 0;

var questions = [
    ["The 17th Asian Games were held in?",
        "2016",
        "2014",
        "2009",
        "None of the above.",
        "B"
    ],

    ["The Coldstream Guards is the oldest continuously serving regiment in the Army, belongs to which Country?",
        "Japan",
        "Iceland",
        "UK",
        "USA",
        "C"
    ],

    ["How many sports were played in summer Olympic 2016?",
        "42",
        "20",
        "18",
        "28",
        "D"
    ],

    ["Famous British Physicist Stephen Hawking died at the age of?",
        "76",
        "84",
        "97",
        "101",
        "A"
    ]
];

function $(arg) {
    return document.getElementById(arg);
}

function displayQuestion() {
    test = $("test");
    if (position >= questions.length) {
        test.innerHTML = "<h2 class='result-content'>You got " + score + " of " + questions.length + " questions correct!</h2>";
        $("test_status").innerHTML = "Test Completed.";
        position = 0;
        score = 0;
        return false;
    }

    $("test_status").innerHTML = "Question " + (position + 1) + " of " + questions.length;
    question = questions[position][0];
    optionA = questions[position][1];
    optionB = questions[position][2];
    optionC = questions[position][3];
    optionD = questions[position][4];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='options' value='A'>" + optionA + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='B'>" + optionB + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='C'>" + optionC + "<br>";
    test.innerHTML += "<input type='radio' name='options' value='D'>" + optionD + "<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()' class='answer-btn'>Submit Answer</button>";
}

function checkAnswer() {
    options = document.getElementsByName("options");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            option = options[i].value;
        }
    }
    if (option == questions[position][5]) {
        score++;
    }
    position++;
    displayQuestion();
}