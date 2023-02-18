import modalWindow from './script/modal';
import render from './script/render';
import {getStorage} from './script/serviceStorage';

import './index.html';

import './css/normalize.min.css';
import './css/bootstrap.min.css';
import './css/style.css';

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


  // window.phoneBookInit = init;
  init('#app', 'Масяня');
}
