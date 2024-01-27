//assigning the variables
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector('.quiz-section');
const quizBox =document.querySelector('.quiz-box');

// Add a click event listener to the startBtn element
startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

// Add a click event listener to the exitBtn element

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

//Add a click event listener to the continuebtn element
continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
}

let questionsCount = 0;

// add a click event listener to the next button
const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    questionsCount++;
    showQuestions(questionsCount);
}

// getting questions and options from array
function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index]}.numb.${questions[index].question}`;
}


