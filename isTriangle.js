const angles = document.querySelectorAll('input')
const checkBtn = document.querySelector('#check-btn')
const result = document.querySelector('#result')


const showMessage = (msg) => {
    result.style.display = 'block'
    result.innerText = msg
}

const calculateIsTriangle = (input1, input2, input3) => {
    const sumOfAngles = Number(input1) + Number(input2) + Number(input3)

    if(sumOfAngles === 180) {
        showMessage('These Angles Can Create a Triangle!')
    }else{
        showMessage('These Angles Can Not Create a Triangle!')
    }
}

const handleClick = () => {

    result.style.display = 'none'
    
    const angle1 = angles[0].value
    const angle2 = angles[1].value
    const angle3 = angles[2].value

    if(angle1 < 0 || angle2 < 0 || angle3 < 0){
        showMessage('Please add all positive angles')
    }else if(angle1 === '' || angle2 === '' || angle3 === ''){
        showMessage("Please Add All The Values")
    } 
    else{
        calculateIsTriangle(angle1, angle2, angle3)
    }
}

checkBtn.addEventListener('click', handleClick)