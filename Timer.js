// Nom    :
// Prénom :
// Groupe :

class Timer {
    constructor(milliSeconds, seconds, minutes, lapCount) {
        this.milliSeconds = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.lapCount = 1;
    }

    updateLap() {
        return this.lapCount++;
    }

    updateTime() {
       return this.milliSeconds++;
    }
}





























