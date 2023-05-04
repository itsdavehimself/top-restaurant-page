import mainBurger from './burger-1.png';
import largeLogo from './bbb-logo-lrg.png';

export function createHome() {
  const mainDiv = document.querySelector('#content');
  const homeDiv = document.createElement('div');
  const mainImgDiv = document.createElement('div');
  const mainTextDiv = document.createElement('div');
  const heroLogoDiv = document.createElement('div');
  const heroBlurb = document.createElement('div');
  const burgerImg = document.createElement('img');
  const bigLogoImg = document.createElement('img');
  burgerImg.classList.add('burger-img');
  burgerImg.src = mainBurger;
  homeDiv.classList.add('home-div');
  mainImgDiv.classList.add('main-img-div');
  mainImgDiv.appendChild(burgerImg);
  mainTextDiv.classList.add('main-text-div');
  heroLogoDiv.classList.add('hero-logo-div');
  bigLogoImg.classList.add('big-logo-img');
  bigLogoImg.src = largeLogo;
  heroLogoDiv.appendChild(bigLogoImg);
  heroBlurb.classList.add('hero-blurb');
  heroBlurb.textContent = "Get ready to burger out at burgerburgerburgers! Our patties are a cut above the rest, and we've got buns of steel to match. Come see why our burgers are flippin' amazing!"
  mainDiv.appendChild(homeDiv);
  homeDiv.appendChild(mainImgDiv);
  homeDiv.appendChild(mainTextDiv);
  mainTextDiv.appendChild(heroLogoDiv);
  mainTextDiv.appendChild(heroBlurb);
};