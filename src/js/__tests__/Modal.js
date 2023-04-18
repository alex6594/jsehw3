/**
 * @jest-environment jsdom
 */
import Modal from '../Modal';

test('whether modal window could be created', () => {
  Modal.createModal();
  Modal.showModal();
  const modalWindow = document.querySelector('.modal-window');
  expect(modalWindow.style.display).toBe('flex');
});
