import { useEffect } from 'react';
import './Clock.css';

function Clock() { 
    useEffect (() => {
        setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
    }, []);

    return (
             <div className="clock">
                <div className="hand hour" data-hour-hand></div>
                <div className="hand minute" data-minute-hand></div>
                <div className="hand second" data-second-hand></div>
            </div>  
    )
 
}

export default Clock;