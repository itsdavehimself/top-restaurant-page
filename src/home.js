export function createHome() {
  const mainDiv = document.querySelector('#content');
  const heroDiv = document.createElement('div');
  const mainImgDiv = document.createElement('div');
  const mainTextDiv = document.createElement('div');
  const heroLogo = document.createElement('div');
  const heroText = document.createElement('div');
  const heroImg = document.createElement('img');
  const bigLogo = document.createElement('img');
  heroImg.classList.add('hero-img');
  heroDiv.classList.add('hero-div');
  mainImgDiv.classList.add('main-img-div');
  mainImgDiv.appendChild(heroImg);
  mainTextDiv.classList.add('main-text-div');
  heroLogo.classList.add('hero-logo');
  bigLogo.classList.add('big-logo');
  heroLogo.appendChild(bigLogo);
  heroText.classList.add('hero-text');
  heroText.textContent = "Get ready to burger out at burgerburgerburgers! Our patties are a cut above the rest, and we've got buns of steel to match. Come see why our burgers are flippin' amazing!"
  mainDiv.appendChild(heroDiv);
  heroDiv.appendChild(mainImgDiv);
  heroDiv.appendChild(mainTextDiv);
  mainTextDiv.appendChild(heroLogo);
  mainTextDiv.appendChild(heroText);
};