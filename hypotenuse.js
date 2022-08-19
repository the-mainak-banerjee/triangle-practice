const values = document.querySelectorAll('input')
const checkBtn = document.querySelector('#check-btn')
const result = document.querySelector('#result')


const showMessage = (msg, color) => {
    result.style.display = 'block'
    result.innerText = msg
    result.style.borderColor = color
}


const calculateHypotenuse = (base,height) => {
    const result = Math.sqrt(base * base + height * height)
    showMessage(`The length of Hypotenuse is ${result} cm`, '#10b981')
}


const handleClick = () => {
    result.style.display = 'none'

    const base = Number(values[0].value)
    const height = Number(values[1].value)


    if(base === 0 || height === 0){
        showMessage('Please add both the values', 'red')
    }else if(base < 0 || height < 0) {
        showMessage('Please add all positive values', 'red')
    }else{
        calculateHypotenuse(base,height)
    }
}

checkBtn.addEventListener('click', handleClick)