const values = document.querySelectorAll('input')
const checkBtn = document.querySelector('#check-btn')
const result = document.querySelector('#result')

const showMessage = (msg) => {
    result.style.display = 'block'
    result.innerText = msg
}


const calculateArea = (base,height) => {
    const result = (base * height) * 0.5
    showMessage(`The Value Of area is ${result} cm`)
}

const handleClick = () => {

    result.style.display = 'none'

    const base = Number(values[0].value)
    const height = Number(values[1].value)

    if(base === 0 || height === 0){
        showMessage('Please add all the values')
    }else if(base < 0 || height < 0){
        showMessage('Values should be Positive')
    }else{
        calculateArea(base,height)

    }  

    
}


checkBtn.addEventListener('click', handleClick)