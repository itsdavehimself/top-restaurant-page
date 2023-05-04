import restaurantMap from './map.png';

export function createContact() {
  const mainDiv = document.querySelector('#content');
  const contactDiv = document.createElement('div');
  const mapDiv = document.createElement('div');
  const contactInfoDiv = document.createElement('div');
  const map = document.createElement('img');
  const contactTitle = document.createElement('p');
  const contactStreet = document.createElement('p');
  const contactCity = document.createElement('p');
  const contactPhone = document.createElement('p');
  const contactEmail = document.createElement('p');

  contactDiv.classList.add('contact-main-div');
  mapDiv.classList.add('map-div');
  contactInfoDiv.classList.add('contact-info-div');
  contactTitle.classList.add('contact-title');
  contactTitle.setAttribute('id', 'title');
  contactTitle.textContent = "Wanna beef with us?";
  contactStreet.classList.add('contact-info');
  contactStreet.textContent = "123 Fake St"
  contactCity.classList.add('contact-info');
  contactCity.textContent = "Chicago, IL 60007"; 
  contactPhone.classList.add('contact-info');
  contactPhone.textContent = "123-345-7890";
  contactEmail.classList.add('contact-info');
  contactEmail.textContent = "beef@burgerburgerburgers.com";
  contactEmail.setAttribute('id', 'email');
  map.classList.add('map');
  map.src = restaurantMap;

  mainDiv.appendChild(contactDiv);
  contactDiv.appendChild(contactInfoDiv);
  contactInfoDiv.appendChild(contactTitle);
  contactInfoDiv.appendChild(contactStreet);
  contactInfoDiv.appendChild(contactCity);
  contactInfoDiv.appendChild(contactPhone);
  contactInfoDiv.appendChild(contactEmail);
  contactDiv.appendChild(mapDiv);
  mapDiv.appendChild(map);
}