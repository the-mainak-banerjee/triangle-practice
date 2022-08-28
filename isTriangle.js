const angles = document.querySelectorAll('input')
const checkBtn = document.querySelector('#check-btn')
const result = document.querySelector('#result')


const showMessage = (msg, color) => {
    result.style.display = 'block'
    result.innerText = msg
    result.style.borderColor = color
}

const calculateIsTriangle = (input1, input2, input3) => {
    const sumOfAngles = Number(input1) + Number(input2) + Number(input3)

    if(sumOfAngles === 180) {
        showMessage('These Angles Can Create a Triangle!', '#10b981')
    }else{
        showMessage('These Angles Can Not Create a Triangle!', '#10b981')
    }
}

const handleClick = () => {

    result.style.display = 'none'
    
    const angle1 = Number(angles[0].value)
    const angle2 = Number(angles[1].value)
    const angle3 = Number(angles[2].value)

    if(angle1 < 0 || angle2 < 0 || angle3 < 0){
        showMessage('Please add all positive angles', 'red')
    }else if(angle1 === '' || angle2 === '' || angle3 === ''){
        showMessage("Please Add All The Values", 'red')
    }else if(angle1 === 0 || angle2 === 0 || angle3 === 0){
        showMessage('Angle can not be zero', 'red')
    } 
    else{
        calculateIsTriangle(angle1, angle2, angle3)
    }
}

checkBtn.addEventListener('click', handleClick)