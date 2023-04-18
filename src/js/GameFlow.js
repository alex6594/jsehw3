import Modal from './Modal';

export default class GameFlow {
  constructor() {
    this.sureHereWasHit();
    this.timeGoesOn();
    this.restart();
    this.countDown;
    this.goblinTime;
  }

  defineGoblinPosition() {
    const cells = document.querySelectorAll('.cell');
    const exGoblin = document.querySelector('.ex-id');
    let exId = 999;
    if (exGoblin) {
      exId = exGoblin.getAttribute('id');
      exGoblin.classList.remove('.ex-id');
    }
    const cellsArr = [...cells];
    let id = 0;
    do {
      id = Math.floor(Math.random() * (cellsArr.length));
    } while (id === exId);
    const cell = document.getElementById(id);
    cell.classList.add('goblined');
    cell.classList.add('ex-id');
  }

  hideGoblin() {
    const goblined = document.querySelector('.goblined');
    if (goblined) {
      goblined.classList.remove('goblined');
    }
  }

  increasePlayerScore() {
    const hitCounter = document.querySelector('.hit-counter');
    hitCounter.textContent = +hitCounter.textContent + 1;
    this.hideGoblin();
    clearInterval(this.goblinTime);
    if (hitCounter.textContent >= 5) {
      clearInterval(this.countDown);
      Modal.showModal();
      const modalText = document.querySelector('.modal-text');
      modalText.textContent = 'You win! Do you want another round?';
    } else {
      this.timeGoesOn();
    }
  }

  increaseGoblinScore() {
    const goblinCounter = document.querySelector('.goblin-counter');
    goblinCounter.textContent = +goblinCounter.textContent + 1;
    this.hideGoblin();
    clearInterval(this.goblinTime);
    if (goblinCounter.textContent >= 5) {
      clearInterval(this.countDown);
      Modal.showModal();
      const modalText = document.querySelector('.modal-text');
      modalText.textContent = 'You lose! Do you want another round?';
    } else {
      this.timeGoesOn();
    }
  }

  sureHereWasHit() {
    const field = document.querySelector('.field');
    field.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('goblined')) {
        this.increasePlayerScore();
      } else {
        this.increaseGoblinScore();
      }
    });
  }

  restart() {
    const body = document.querySelector('body');
    body.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('restart-button')) {
        Modal.hideModal();
        const timer = document.querySelector('.timer');
        timer.textContent = 3;
        const hitCounter = document.querySelector('.hit-counter');
        hitCounter.textContent = 0;
        const goblinCounter = document.querySelector('.goblin-counter');
        goblinCounter.textContent = 0;
        this.timeGoesOn();
      }
    });
  }

  timeGoesOn() {
    if (this.countDown) {
      clearInterval(this.countDown);
    }
    const timer = document.querySelector('.timer');
    timer.classList.remove('goblin-time');
    timer.textContent = 3;
    this.countDown = setInterval(() => {
      if (+timer.textContent > 0) {
        timer.textContent -= 1;
      } else if (+timer.textContent <= 0) {
        this.defineGoblinPosition();
        clearInterval(this.countDown);
        timer.classList.add('goblin-time');
        timer.textContent = 1.5;
        this.goblinTime = setInterval(() => {
          if (timer.textContent > 0) {
            timer.textContent = (timer.textContent - 0.1).toFixed(1);
          } else {
            clearInterval(this.goblinTime);
            timer.classList.remove('goblin-time');
            this.increaseGoblinScore();
            this.timeGoesOn();
          }
        }, 100);
      }
    }, 1000);
  }
}
