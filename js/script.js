import { citaten } from './citaten.js';

// h1 & p aanpassen
document.querySelector('h1').innerText = 'Inspirerende citaten';
document.getElementById('geencitaten').remove();

// Voeg citaten toe d.m.v.functie
let citaatLengte = 0;
function voegCitaatObjectToe(citaatObject) {
  const artikel = document.createElement('article');
  artikel.innerHTML = `<h2>${citaatObject.titel}</h2><p>${citaatObject.citaat}</p><p class="auteur">${citaatObject.auteur}</p>`;
  artikel.classList.add(`${citaatObject.taal}`);
  document.querySelector('.citaten').insertAdjacentElement('beforeend', artikel);
  if (citaatObject.citaat.length > citaatLengte)
    citaatLengte = citaatObject.citaat.length
}

// toon citaten
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

// statistieken
/* function citatenLengte() {
  let langsteCitaat = '';
  for (const cit of citaten) {
    if (cit.citaat.length > langsteCitaat.length)
      langsteCitaat = cit;
  }
  return langsteCitaat;
}
const langsteCitaatTekst = citatenLengte()
 */

const langsteCitaatZoeker = () => {
  let langste = '';
  for (const ciz of citaten) {
    console.log(ciz)
    if (langste.length < ciz.citaat.length) {
      langste = ciz;
    }
  }
  return langste;
}

const langsteCitaatTekst = langsteCitaatZoeker()


// console.log(44, typeof langsteCitaatTekst())


document.querySelector('#aantalCitaten').innerText += ' ' + citaten.length;
document.querySelector('#langsteCitaat').innerText = `Langste citaat: (${langsteCitaatTekst.citaat.length} letters, auteur: ${langsteCitaatTekst.auteur}) "${langsteCitaatTekst.citaat}"`;