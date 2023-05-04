import headerImg from './bbb-logo.png';

export const mainDiv = document.querySelector('#content'),
homeBtn = document.createElement('button'),
menuBtn = document.createElement('button'),
contactBtn = document.createElement('button');

export function createHeader() {
  const headerDiv = document.createElement('div');
  const headerLogoDiv = document.createElement('div');
  const navBtns = document.createElement('div');
  const headerLogoImg = document.createElement('img');
  homeBtn.classList.add('btn-current');
  headerDiv.classList.add('header-div');
  headerLogoDiv.classList.add('header-logo-div');
  headerLogoImg.classList.add('header-img');
  headerLogoImg.src = headerImg;
  headerLogoDiv.appendChild(headerLogoImg);
  navBtns.classList.add('nav-btns');
  mainDiv.appendChild(headerDiv);
  headerDiv.appendChild(headerLogoDiv);
  headerDiv.appendChild(navBtns);
  homeBtn.classList.add('nav-button');
  menuBtn.classList.add('nav-button');
  contactBtn.classList.add('nav-button');
  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";
  navBtns.appendChild(homeBtn);
  navBtns.appendChild(menuBtn);
  navBtns.appendChild(contactBtn);
};