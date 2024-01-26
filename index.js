//assigning the variables
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector('.quiz-section');

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
}

