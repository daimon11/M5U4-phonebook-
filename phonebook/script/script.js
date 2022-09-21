import modalWindow from './modules/modal.js';
import render from './modules/render.js';
import {getStorage} from './modules/serviceStorage.js';

const {renderPhoneBook, renderContacts} = render;

const {
  hoverRow,
  modalControl,
  deleteControl,
  formControl,
} = modalWindow;

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const {
      list,
      logo,
      btnAdd,
      btnDel,
      formOverlay,
      form,
    } = renderPhoneBook(app, title);

    // Функционал

    const data = getStorage();

    const allRow = renderContacts(list, data);

    const { closeModal } = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list, data);
    formControl(form, list, closeModal, data);
  };


  window.phoneBookInit = init;
}
