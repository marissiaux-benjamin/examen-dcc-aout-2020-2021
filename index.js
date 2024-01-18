timer1 = new Timer(0, 0, 0, 1);
let prefixeMilliSeconds = 0;
let prefixeSeconds = 0;
let prefixeMinutes = 0;
let intervalId;
let timeOutId;

document.querySelector('.app__timer').textContent = `${prefixeMinutes}${timer1.minutes}:${prefixeSeconds}${timer1.seconds}:${prefixeMilliSeconds}${timer1.milliSeconds}`;
document.querySelectorAll('button').forEach(btnElement => {
    btnElement.addEventListener('click', () => {
        if (btnElement.classList.contains('app__controls__start')) {
            if (document.querySelector('.app__controls__start').textContent === 'Démarrer') {
                document.querySelector('.app__controls__start').textContent = document.querySelector('.app__controls__start').dataset.alternate;
                document.querySelector('.app__controls__start').dataset.alternate = 'Démarrer';
                intervalId = setInterval(() => {
                    document.querySelector('.app__timer').textContent = `${prefixeMinutes}${timer1.minutes}:${prefixeSeconds}${timer1.seconds}:${prefixeMilliSeconds}${timer1.updateTime()}`;
                    if (timer1.milliSeconds >= 10) {
                        prefixeMilliSeconds = '';
                    }
                    if (timer1.seconds >= 10) {
                        prefixeSeconds = '';
                    }
                    if (timer1.minutes >= 10) {
                        prefixeMinutes = '';
                    }
                    if (timer1.milliSeconds === 100) {
                        timer1.seconds++;
                        timer1.milliSeconds = 0;
                    }
                    if (timer1.seconds === 60) {
                        timer1.minutes++;
                        timer1.seconds = 0;
                    }
                }, timeOutId = 10);
                if (document.querySelector('.app__controls__lap').textContent === 'Effacer') {
                    document.querySelector('.app__controls__lap').textContent = document.querySelector('.app__controls__lap').dataset.alternate;
                    document.querySelector('.app__controls__lap').dataset.alternate = 'Effacer';
                }
            } else {
                document.querySelector('.app__controls__start').textContent = document.querySelector('.app__controls__start').dataset.alternate;
                document.querySelector('.app__controls__start').dataset.alternate = 'Stop';
                document.querySelector('.app__controls__lap').textContent = document.querySelector('.app__controls__lap').dataset.alternate;
                document.querySelector('.app__controls__lap').dataset.alternate = 'Tour';
                clearInterval(intervalId);
                clearTimeout(timeOutId);
            }
        } else {
            if (document.querySelector('.app__controls__lap').textContent === 'Tour') {
                document.querySelector('.app__laps').insertAdjacentHTML('beforeend', `<li class="app__lap">
 <span class="app__lap-count">Tour ${timer1.updateLap()}</span>
 <time class="app__lap-value" datatype="XX:YY:ZZ">${prefixeMinutes}${timer1.minutes}:${prefixeSeconds}${timer1.seconds}:${prefixeMilliSeconds}${timer1.milliSeconds}</time>
</li>`);
            }else {
                timer1.milliSeconds = 0;
                timer1.seconds = 0;
                timer1.minutes = 0;
                timer1.lapCount = 1;
                prefixeMilliSeconds = 0;
                prefixeSeconds = 0;
                prefixeMinutes = 0;
                document.querySelector('.app__laps').innerHTML = '';
                document.querySelector('.app__timer').textContent = `${prefixeMinutes}${timer1.minutes}:${prefixeSeconds}${timer1.seconds}:${prefixeMilliSeconds}${timer1.milliSeconds}`;

            }
        }
    });
});





























