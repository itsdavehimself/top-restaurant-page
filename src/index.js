import { createHeader, mainDiv, homeBtn, menuBtn, contactBtn } from './header.js';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createContact } from './contact.js';
import './style.css';

function openHome() {
  mainDiv.removeChild(mainDiv.lastChild);
  homeBtn.classList.add('btn-current');
  menuBtn.classList.remove('btn-current');
  contactBtn.classList.remove('btn-current');
  createHome();
}

function openMenu() {
  mainDiv.removeChild(mainDiv.lastChild);
  homeBtn.classList.remove('btn-current');
  menuBtn.classList.add('btn-current');
  contactBtn.classList.remove('btn-current');
  createMenu();
}

function openContact() {
  mainDiv.removeChild(mainDiv.lastChild);
  homeBtn.classList.remove('btn-current');
  menuBtn.classList.remove('btn-current');
  contactBtn.classList.add('btn-current');
  createContact();
}

homeBtn.addEventListener('click', openHome);
menuBtn.addEventListener('click', openMenu);
contactBtn.addEventListener('click', openContact);

createHeader();
createHome();