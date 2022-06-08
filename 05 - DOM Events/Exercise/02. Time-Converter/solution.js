function attachEventsListeners() {
    let allButtons = Array.from(document.querySelectorAll('input[type=button]'));

    let daysField = document.getElementById('days');
    let hoursField = document.getElementById('hours');
    let minutesField = document.getElementById('minutes');
    let secondsField = document.getElementById('seconds');

    
    for (let button of allButtons) {
        button.addEventListener('click', function(e) {
            let days = Number(daysField.value);
            let hours = Number(hoursField.value);
            let minutes = Number(minutesField.value);
            let seconds = Number(secondsField.value);

            if (e.target.id === 'daysBtn') {
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (e.target.id === 'hoursBtn') {
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (e.target.id === 'minutesBtn') {
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;
            } else { 
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
            }

            daysField.value = days;
            hoursField.value = hours;
            minutesField.value = minutes;
            secondsField.value = seconds;
        })
    }
}