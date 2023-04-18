export default class SidePanel {
  constructor() {
    this.createSidePanel();
    this.createTimer();
    this.createPlayerScore();
    this.createGoblinScore();
  }

  createSidePanel() {
    const body = document.querySelector('body');
    const sidePanel = document.createElement('div');
    sidePanel.className = 'side-panel';
    body.append(sidePanel);
  }

  createTimer() {
    const sidePanel = document.querySelector('.side-panel');
    const timerField = document.createElement('div');
    timerField.className = 'timer-field';
    sidePanel.append(timerField);
    const timeNote = document.createElement('p');
    timeNote.className = 'note';
    timeNote.textContent = 'Goblin jumps in:';
    timerField.append(timeNote);
    const timer = document.createElement('p');
    timer.className = 'timer';
    timerField.append(timer);
    timer.textContent = 3;
  }

  createPlayerScore() {
    const sidePanel = document.querySelector('.side-panel');
    const playerScore = document.createElement('div');
    playerScore.className = 'player-score';
    sidePanel.append(playerScore);
    const playerNote = document.createElement('p');
    playerNote.className = 'note';
    playerNote.textContent = 'Times goblin was screwed:';
    playerScore.append(playerNote);
    const hitCounter = document.createElement('p');
    hitCounter.className = 'hit-counter';
    playerScore.append(hitCounter);
    hitCounter.textContent = 0;
  }

  createGoblinScore() {
    const sidePanel = document.querySelector('.side-panel');
    const goblinScore = document.createElement('div');
    goblinScore.className = 'goblin-score';
    sidePanel.append(goblinScore);
    const goblinNote = document.createElement('p');
    goblinNote.className = 'note';
    goblinNote.textContent = 'Times player missed the target:';
    goblinScore.append(goblinNote);
    const goblinCounter = document.createElement('p');
    goblinCounter.className = 'goblin-counter';
    goblinScore.append(goblinCounter);
    goblinCounter.textContent = 0;
  }
}
