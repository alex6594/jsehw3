export default class Modal {
  static createModal() {
    const body = document.querySelector('body');
    const modalWindow = document.createElement('div');
    modalWindow.className = 'modal-window';
    const modalText = document.createElement('p');
    modalText.className = 'modal-text';
    body.append(modalWindow);
    modalWindow.append(modalText);
    const restartButton = document.createElement('p');
    restartButton.className = 'restart-button';
    modalWindow.append(restartButton);
    restartButton.textContent = 'Restart!';
  }

  static showModal() {
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.style.display = 'flex';
  }

  static hideModal() {
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.style.display = 'none';
  }
}
