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
    questionCounter(1);
    headerScore();
}



let questionsCount = 0;
let questionNumb = 1;
let userScore = 0;


// add a click event listener to the next button
const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    // Check if there are more questions
    if(questionsCount < questions.length - 1){
        questionsCount++;
        showQuestions(questionsCount);
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    }else{
        console.log('Question Completed');
    }

}
const optionList =document.querySelector('.option-list');

// getting questions and options from array
function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML = optionTag;

    const option = optionList.querySelectorAll('.option');
    for (let i= 0; i <option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');

    }
}

//function to check if the answer is correct or not
function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionsCount].answer;
    let allOptions = optionList.children.length;
    if(userAnswer == correctAnswer){
        answer.classList.add('correct')
        userScore += 1;
        headerScore();
    }
    else{
        answer.classList.add('incorrect')

        //if the answer is incorrect then automatically select the correct answer
        for(let i =0; i <allOptions;i++){
            if(optionList.children[i].textContent == correctAnswer){
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    // if user selected an option then disable all options
    for(let i =0; i < allOptions;i++){
        optionList.children[i].classList.add('disabled');
        // remove onclick attribute after user selected an option
        optionList.children[i].removeAttribute('onclick'); 
    }
    nextBtn.classList.add('active');
}

//function to show the next question
function questionCounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

//function to show the result
function headerScore(){
    const headeScoreText = document.querySelector('.header-score');
    headeScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

