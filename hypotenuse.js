const values = document.querySelectorAll('input')
const checkBtn = document.querySelector('#check-btn')
const result = document.querySelector('#result')


const showMessage = (msg) => {
    result.style.display = 'block'
    result.innerText = msg
}


const calculateHypotenuse = (base,height) => {
    const result = Math.sqrt(base * base + height * height)
    showMessage(`The length of Hypotenuse is ${result} cm`)
}


const handleClick = () => {
    result.style.display = 'none'

    const base = Number(values[0].value)
    const height = Number(values[1].value)


    if(base === 0 || height === 0){
        showMessage('Please add both the values')
    }else if(base < 0 || height < 0) {
        showMessage('Please add all positive values')
    }else{
        calculateHypotenuse(base,height)
    }
}

checkBtn.addEventListener('click', handleClick)