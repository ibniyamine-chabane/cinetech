


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
  
// display the movies on Air  
fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options)
  .then(response => response.json())
  .then(data => { 
      data.results.forEach(movies => {
       
      const moviesContainer = document.getElementsByClassName('movies-container')[0];
      const containerCard = document.createElement('div');// a reprendre 
      containerCard.classList.add('movie-card');
      moviesContainer.appendChild(containerCard);
      
      const {original_title, poster_path, backdrop_path, release_date, id} = movies;
      containerCard.innerHTML = `<a href="detail/${id}"><img id="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Nom du film"></a>
                                <h2 id="movie-name">${original_title}</h2>
                                <p id="movie-date">` + frenchDate(release_date) + `</p>`; 
       
        // console.log(movies);
    });
        
  })
  .catch(err => console.error(err));


// display the series on Air 
fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-FR&page=1', options)
  .then(response => response.json())
  .then(data => {
        data.results.forEach(series => {
       
      const seriesContainer = document.getElementsByClassName('series-container')[0];
      const containerCard = document.createElement('div');
      containerCard.classList.add('serie-card');
      seriesContainer.appendChild(containerCard);
      
      const {name, poster_path, backdrop_path, first_air_date, id} = series;
      
      //formate the date in french way
      
      
      containerCard.innerHTML = `<a href="detail/${id}"><img id="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Nom du film"><a/>
                                <h2 id="movie-name">${name}</h2>
                                <p id="movie-date">` + frenchDate(first_air_date) + `</p>`; 
       
        // console.log(series);
    })

  })  
  .catch(err => console.error(err));