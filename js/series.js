const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzE1NDdkYWE4MmNhY2ZhODY0ZWUxZjY3ODA0M2QwNyIsInN1YiI6IjY0NjIwMzVmNmUwZDcyMDE1YzBmNzY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1toCtEaeEdjRPpSqNHZrOtz7j10GONgCJQ6nPKBuFJg'
  }
};

// Fonction pour formater la date au format français avec la classe Date
function frenchDate(frenchdateString) {
  const dateStr = frenchdateString;
  const date = new Date(dateStr);

  const moisEnFrancais = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const jour = date.getDate().toString().padStart(2, '0');
  const mois = moisEnFrancais[date.getMonth()];
  const annee = date.getFullYear().toString();
  const dateFormatee = `${jour} ${mois} ${annee}`;
  return dateFormatee;
}

// i initialise first the variable of current page in localstorage for 
//staying in the same page if i refresh the page.
let currentPage = localStorage.getItem('currentPage') || 1;
let totalPages = 0;

function updateCurrentPage() {
  localStorage.setItem('currentPage', currentPage);
}

function updatePagination() {
  const prevButton = document.getElementById('prev');
  const currentSpan = document.getElementById('current');
  const nextButton = document.getElementById('next');

  prevButton.textContent = 'Précédent';
  nextButton.textContent = 'Suivant';

  // if (currentPage === 1) {
  //   prevButton.classList.add('disabled');
  // } else {
  //   prevButton.classList.remove('disabled');
  // }

  // if (currentPage === totalPages) {
  //   nextButton.classList.add('disabled');
  // } else {
  //   nextButton.classList.remove('disabled');
  // }

  currentSpan.textContent = `Page ${currentPage} sur ${totalPages}`;
}

function updateSeries(series) {
  const seriesContainer = document.getElementById('series-container');
  seriesContainer.innerHTML = '';

  series.forEach(serie => {
    const containerCard = document.createElement('div');
    containerCard.classList.add('serie-card');
    seriesContainer.appendChild(containerCard);

    const {name, poster_path, backdrop_path, first_air_date, id} = serie;
    containerCard.innerHTML = `<a href="detail/serie/${id}"><img id="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Nom du film"><a/>
                                <h2 id="serie-name">${name}</h2>
                                <p id="serie-date">` + frenchDate(first_air_date) + `</p>`;
  });
}

function fetchSeries() {
  const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${currentPage}`;
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      totalPages = data.total_pages;
      updateSeries(data.results);
      updatePagination();
    })
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', fetchSeries);

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');



prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateCurrentPage()
    fetchSeries();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    updateCurrentPage()
    fetchSeries();
  }
});


    