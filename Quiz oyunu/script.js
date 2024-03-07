var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

let questions = [{
    question: "Kızıl gezegen hangisidir?",
    imgSrc: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1580000/mars-1581171.jpg",
    choiceA: "Earth",
    choiceB: "Mars",
    choiceC: "Venus",
    choiceD: "Jupiter",
    correctAnswer: "B"
}, {
    question: "Mona Lisa eserinin ressamı kimdir?",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    choiceA: "Leonardo da Vinci",
    choiceB: "Vincent van Gogh",
    choiceC: "Pablo Picasso",
    choiceD: "Michelangelo",
    correctAnswer: "A"
}, {
    question: "Hangi okyanus en büyük?",
    imgSrc: "https://im.haberturk.com/l/2022/11/04/ver1667570464/3535831/jpg/640x360",
    choiceA: "Pacific Ocean",
    choiceB: "Atlantic Ocean",
    choiceC: "Indian Ocean",
    choiceD: "Arctic Ocean",
    correctAnswer: "A"
}, {
    question: "'Romeo and Juliet'i kim yazdı?",
    imgSrc: "https://tr.web.img4.acsta.net/pictures/bzp/01/12687.jpg",
    choiceA: "William Shakespeare",
    choiceB: "Jane Austen",
    choiceC: "Charles Dickens",
    choiceD: "Mark Twain",
    correctAnswer: "A"
}, {
    question: "Fransanın başkenti?",
    imgSrc: "https://www.arkitektuel.com/wp-content/uploads/2017/10/eiffel.png",
    choiceA: "Madrid",
    choiceB: "London",
    choiceC: "Paris",
    choiceD: "Berlin",
    correctAnswer: "C"
}, {
    question: "Türkiyenin başkenti?",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankara_from_bus_station.jpg/1200px-Ankara_from_bus_station.jpg",
    choiceA: "İstanbul",
    choiceB: "London",
    choiceC: "Ankara",
    choiceD: "Berlin",
    correctAnswer: "C"
}, {
    question: "Konstantinopolis günümüzde neresidir?",
    imgSrc: "https://ozhanozturk.com/wp-content/uploads/2017/09/kontantinopol-kurulus.jpg",
    choiceA: "İstanbul",
    choiceB: "London",
    choiceC: "Ankara",
    choiceD: "Berlin",
    correctAnswer: "A"
}];

var questionIndex = 0;

function getQuestion() {
    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " + (questionIndex + 1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 7!</p>";

    if (score < 3) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 7) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know your stuff!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
