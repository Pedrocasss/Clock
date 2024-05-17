function handleTransition(element, value) {
    if (value === 0) {
        element.style.transition = 'none';
    } else {
        element.style.transition = '';
    }
}

function setDate(){
    const now = new Date();
    /* --------------------SECONDS---------------------- */
    const seconds = now.getSeconds();
    console.log(seconds);
    const secondDegrees = ((seconds / 60) * 360) +90;
    console.log(secondDegrees);
    const seconHand = document.querySelector('.second-hand');
    handleTransition(seconHand, seconds);
    seconHand.style.transform = `rotate(${secondDegrees}deg)`;
    /* --------------------MINUTES---------------------- */
    const minutes = now.getMinutes();
    console.log(minutes);
    const minuteDegrees = ((minutes / 60) * 360) +90;
    console.log(minuteDegrees);
    const minuteHand = document.querySelector('.min-hand');
    handleTransition(minuteHand, minutes);
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    /* --------------------HOURS---------------------- */
    const hours = now.getHours();
    console.log(hours);
    const hoursDegrees = ((hours / 12) * 360) + 90;
    console.log(hoursDegrees);
    const hourHand = document.querySelector('.hour-hand');
    handleTransition(hourHand, hours);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}
setInterval(setDate, 1000);
