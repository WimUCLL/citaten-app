// h1 & p aanpassen
document.querySelector('h1').innerText = 'Inspirerende citaten';
document.querySelector('#geencitaten').innerText = '';

// Citaat toevoegen - oldskool
/* 
const titel = 'To be';
const citaat = 'To be or not to be, that\'s the question.';
const auteur = 'William Shakespeare';
const taal = 'en';
const artikel = document.createElement('article');
artikel.innerHTML = `<h2>${titel}</h2><p>${citaat}</p><p class="auteur">${auteur}</p>`;
artikel.classList.add(`${taal}`);
document.querySelector('section.citaten').appendChild(artikel);
*/

// Citaat verwijderen - oldskool
document.getElementById('geencitaten').remove();

// Nieuw citaat toeboegen - EXTREMELY un-DRY
/* 
const titel2 = 'Vandaag';
const citaat2 = 'Wat je vandaag moet doen, moet je doen zoals je morgen denkt dat je het had moeten doen.';
const auteur2 = 'Toon Hermans';
const taal2 = 'nl';
const artikel2 = document.createElement('article');
artikel2.innerHTML = `<h2>${titel2}</h2><p>${citaat2}</p><p class="auteur">${auteur2}</p>`;
artikel2.classList.add(`${taal2}`);
document.querySelector('section.citaten').appendChild(artikel2);
*/

// Voeg citaten toe d.m.v.functie
function voegCitaatToe(titel, citaat, auteur, taal) {
  artikel = document.createElement('article');
  artikel.innerHTML = `<h2>${titel}</h2><p>${citaat}</p><p class="auteur">${auteur}</p>`;
  artikel.classList.add(`${taal}`);
  document.querySelector('.citaten').insertAdjacentElement('beforeend', artikel);
}

voegCitaatToe('To be', 'To be or not to be, that\'s the question.', 'William Shakespeare', 'en');
voegCitaatToe('Vandaag', 'Wat je vandaag moet doen, moet je doen zoals je morgen denkt dat je het had moeten doen.', 'Toon Hermans', 'nl');
voegCitaatToe('Penser', 'Je pense, donc je suis.', 'René Descartes', 'fr');

// Voeg footer toe
// manier A
/* 
const footer = document.createElement('footer');
footer.innerHTML = '<p>&copy; 2025</p>';
document.body.insertAdjacentElement('beforeend', footer);
*/
// manier B
document.body.insertAdjacentHTML('beforeend', '<footer><p>&copy; 2025</p></footer>');
