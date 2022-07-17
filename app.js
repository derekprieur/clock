const hourHandElement = document.querySelector('[data-hour-hand]')
const minuteHandElement = document.querySelector('[data-minute-hand]')
const secondHandElement = document.querySelector('[data-second-hand]')

setInterval(updateClock, 1000)

function updateClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    rotation(secondHandElement, secondsRatio)
    rotation(minuteHandElement, minutesRatio)
    rotation(hourHandElement, hoursRatio)
}

function rotation(element, rotationRatio) {
    element.style.setProperty('--rotate', rotationRatio * 360)
}

updateClock()