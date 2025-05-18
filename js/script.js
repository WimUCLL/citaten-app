// h1 & p aanpassen
document.querySelector('h1').innerText = 'Inspirerende citaten';
document.querySelector('#geencitaten').innerText = '';

// Citaat toevoegen - oldskool
const titel = 'To be';
const citaat = 'To be or not to be, that\'s the question.';
const auteur = 'William Shakespeare';
const taal = 'en';
const artikel = document.createElement('article');
artikel.innerHTML = `<h2>${titel}</h2><p>${citaat}</p><p class="auteur">${auteur}</p>`;
artikel.classList.add(`${taal}`);
document.querySelector('section.citaten').appendChild(artikel);

// Citaat verwijderen - oldskool
document.getElementById('geencitaten').remove();