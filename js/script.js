import { citaten } from './citaten.js';

// h1 & p aanpassen
document.querySelector('h1').innerText = 'Inspirerende citaten';
document.getElementById('geencitaten').remove();

// Voeg citaten toe d.m.v.functie
function voegCitaatObjectToe(citaatObject) {
  const artikel = document.createElement('article');
  artikel.innerHTML = `<h2>${citaatObject.titel}</h2><p>${citaatObject.citaat}</p><p class="auteur">${citaatObject.auteur}</p>`;
  artikel.classList.add(`${citaatObject.taal}`);
  document.querySelector('.citaten').insertAdjacentElement('beforeend', artikel);
}

// for loop
/* 
for (let i = 0; i < citaten.length; i++) {
  voegCitaatObjectToe(citaten[i]);
}
*/

// for ... of ... loop
/* 
for (const citaat of citaten) {
  voegCitaatObjectToe(citaat);
}
*/

// forEach (_iz nice!!_)
citaten.forEach(voegCitaatObjectToe);

// forEach fat arrow
/* citaten.forEach(citaat => { voegCitaatObjectToe(citaat) }); */

// andere loops gedemonstreerd op https://javascript.info/

// toggle button voor drie kolommen
const kolommenKnop = document.querySelector('#kolommen');
kolommenKnop.addEventListener('click', () => {
  document.querySelector('.citaten').classList.toggle('drie-kolommen')
});

// footer
document.body.insertAdjacentHTML('beforeend', '<footer><p>&copy; 2025</p></footer>');