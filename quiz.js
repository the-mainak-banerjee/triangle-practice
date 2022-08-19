const quizForm = document.querySelector('#quiz-form')
const submitButton = document.querySelector('#submit-button')
const result = document.querySelector('#result')
const radioButtons = document.querySelectorAll('input')
const correctAnswers = ['An angle that measures less than 90', 'Equilateral', 'Hypotenuse', '5, 5√3, 10', '10.4 Degree', 'Scalene triangle', 'Greater Than The third Side', '90 Degree', '(base * height)/2', 'Scalene Triangle']

const showMessage = (msg,color) => {
    result.style.display = 'block'
    result.innerText = msg
    result.style.borderColor = color
}

const styleInputs = () => {

    for(let i=0; i<radioButtons.length; i++){
        if(radioButtons[i].className === 'right'){
            radioButtons[i].style.accentColor = 'green'
        }else{
            radioButtons[i].style.accentColor = 'red'
        }
    }

    
}

const calculateTotalScore = () => {
    let score = 0;
    let index = 0;

    let formResults = new FormData(quizForm)

    for(let data of formResults.values()){
        if(data === correctAnswers[index]){
            score += 1
        }
        index+=1
    }

    showMessage(`Your Score is ${score}`,'#10b981')
    styleInputs()

}

const submitButtonHandler = () => {

    let counter = 0;

    for(let i=0; i<radioButtons.length ; i++) {
        if(radioButtons[i].checked){
            counter+=1
        }
        console.log(radioButtons[i].value)
    }

    if(counter === radioButtons.length/3){
        calculateTotalScore()
    }else{
        showMessage('Please select all Options First', 'red')
    }
}


submitButton.addEventListener('click', submitButtonHandler)
