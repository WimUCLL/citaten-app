// citaten
const citaten = [{
  titel: 'To be',
  citaat: 'To be or not to be, that\'s the question.',
  auteur: 'William Shakespeare',
  taal: 'en'
},
{
  titel: 'Vandaag',
  citaat: 'Wat je vandaag moet doen, moet je doen zoals je morgen denkt dat je het had moeten doen.',
  auteur: 'Toon Hermans',
  taal: 'nl'
},
{
  titel: 'Penser',
  citaat: 'Je pense, donc je suis.',
  auteur: 'René Descartes',
  taal: 'fr'
}]

// h1 & p aanpassen
document.querySelector('h1').innerText = 'Inspirerende citaten';
document.getElementById('geencitaten').remove();

// Voeg citaten toe d.m.v.functie
function voegCitaatObjectToe(citaatObject) {
  artikel = document.createElement('article');
  artikel.innerHTML = `<h2>${citaatObject.titel}</h2><p>${citaatObject.citaat}</p><p class="auteur">${citaatObject.auteur}</p>`;
  artikel.classList.add(`${citaatObject.taal}`);
  document.querySelector('.citaten').insertAdjacentElement('beforeend', artikel);
}

citaten.forEach(citaat => { voegCitaatObjectToe(citaat) });

// toggle button voor drie kolommen
const kolommenKnop = document.querySelector('#kolommen');
kolommenKnop.addEventListener('click', () => {
  document.querySelector('.citaten').classList.toggle('drie-kolommen')
});

// footer
document.body.insertAdjacentHTML('beforeend', '<footer><p>&copy; 2025</p></footer>');