import menuCards from '/templates/menu-cards.hbs';
import elMarkup from '/menu.json';

const cardBox = document.querySelector('.js-menu');

function createGallery(cards) {
  return cards.map(menuCards).join('');
}

const cardMarkup = createGallery(elMarkup);
cardBox.insertAdjacentHTML('beforeend', cardMarkup);
