
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzE1NDdkYWE4MmNhY2ZhODY0ZWUxZjY3ODA0M2QwNyIsInN1YiI6IjY0NjIwMzVmNmUwZDcyMDE1YzBmNzY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1toCtEaeEdjRPpSqNHZrOtz7j10GONgCJQ6nPKBuFJg'
    }
  };
  
// function to formate the date in french way with Date class
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
    return dateFormatee
  }


const recupFetch = fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        data.results.forEach(movies => {
        
            const moviesContainer = document.getElementsByClassName('movies-container')[0];
            const containerCard = document.createElement('div');// a reprendre 
            containerCard.classList.add('movie-card');
            moviesContainer.appendChild(containerCard);
            
            const {original_title, poster_path, backdrop_path, release_date, id} = movies;
            containerCard.innerHTML = `<a href="detail/movie/${id}"><img id="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Nom du film"></a>
                                      <h2 id="movie-name">${original_title}</h2>
                                      <p id="movie-date">` + frenchDate(release_date) + `</p>`; 
             
              // console.log(movies);
          })

          //pagination part 

          const currentPage = 1;
          nextPage = currentPage + 1; 


          const current = document.getElementById('current');
          const previous = document.getElementById('prev');
          const next = document.getElementById('next');
          current.innerHTML = currentPage;
          previous.innerHTML = currentPage - 1;
          next.innerHTML = nextPage;
          
          next.addEventListener('click' , () => { const recupFetch = fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${nextPage}`, options) } )
    })  

    .catch(err => console.error(err));