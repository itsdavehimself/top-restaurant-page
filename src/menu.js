import burgerOne from './burger-1.png';
import burgerTwo from './burger-2.png';
import burgerThree from './burger-3.png';

export function createMenu() {
  const mainDiv = document.querySelector('#content');
  const menuDiv = document.createElement('div');
  const itemOne = document.createElement('div');
  const itemTwo = document.createElement('div');
  const itemThree = document.createElement('div');
  const itemOneInfo = document.createElement('div');
  const itemTwoInfo = document.createElement('div');
  const itemThreeInfo = document.createElement('div');
  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  const imgThree = document.createElement('img');
  const itemOneName = document.createElement('p');
  const itemTwoName = document.createElement('p');
  const itemThreeName = document.createElement('p');
  const itemOneDescr = document.createElement('p');
  const itemTwoDescr = document.createElement('p');
  const itemThreeDescr = document.createElement('p');
  const itemOnePrice = document.createElement('p');
  const itemTwoPrice = document.createElement('p');
  const itemThreePrice = document.createElement('p');

  menuDiv.classList.add('menu-div');
  itemOne.classList.add('menu-item');
  itemTwo.classList.add('menu-item');
  itemThree.classList.add('menu-item');
  itemOneInfo.classList.add('item-info');
  itemTwoInfo.classList.add('item-info');
  itemThreeInfo.classList.add('item-info');
  imgOne.classList.add('menu-img');
  imgOne.src = burgerOne;
  imgTwo.classList.add('menu-img');
  imgTwo.src = burgerTwo;
  imgThree.classList.add('menu-img');
  imgThree.src = burgerThree;
  itemOneName.classList.add('item-name');
  itemTwoName.classList.add('item-name');
  itemThreeName.classList.add('item-name');
  itemOneDescr.classList.add('item-description');
  itemTwoDescr.classList.add('item-description');
  itemThreeDescr.classList.add('item-description');
  itemOnePrice.classList.add('item-price');
  itemTwoPrice.classList.add('item-price');
  itemThreePrice.classList.add('item-price');
  itemOneName.textContent = "The Original BurgerBurgerBurger";
  itemOneDescr.textContent = "Two beef patties, two slices of American cheese, pickles, special house sauce, on our home-made bun"
  itemOnePrice.textContent = "$12.99";
  itemTwoName.textContent = "The OnionOnionOnion Burger";
  itemTwoDescr.textContent = "One beef patty, chedder cheese, our special sauce, topped with fried onions to the sky, on our home-made bun"
  itemTwoPrice.textContent = "$11.99";
  itemThreeName.textContent = "The ChickenChickenChicken";
  itemThreeDescr.textContent = "Fried chicken, pickles, slaw, sauce, green onions. The ultimate fried chicken sandwich"
  itemThreePrice.textContent = "$11.99";

  mainDiv.appendChild(menuDiv);
  menuDiv.appendChild(itemOne);
  itemOne.appendChild(imgOne);
  itemOne.appendChild(itemOneInfo);
  itemOneInfo.appendChild(itemOneName);
  itemOneInfo.appendChild(itemOneDescr);
  itemOneInfo.appendChild(itemOnePrice);
  menuDiv.appendChild(itemTwo);
  itemTwo.appendChild(imgTwo);
  itemTwo.appendChild(itemTwoInfo);
  itemTwoInfo.appendChild(itemTwoName);
  itemTwoInfo.appendChild(itemTwoDescr);
  itemTwoInfo.appendChild(itemTwoPrice);
  menuDiv.appendChild(itemThree);
  itemThree.appendChild(imgThree);
  itemThree.appendChild(itemThreeInfo);
  itemThreeInfo.appendChild(itemThreeName);
  itemThreeInfo.appendChild(itemThreeDescr);
  itemThreeInfo.appendChild(itemThreePrice);
}