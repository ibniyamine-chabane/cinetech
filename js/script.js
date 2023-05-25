
// alert("Bonjour Nejiv")

// fetch('/test')
// .then(response => response.json())
// .then(data => {
//     const apikey = data.API_KEY;
//     alert(apikey);   
// })


// fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apikey}`)
// .then(response => response.text())
// .then(data => {
//     const section = document.getElementById("section");
//     section.innerHTML = data;
// })

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzE1NDdkYWE4MmNhY2ZhODY0ZWUxZjY3ODA0M2QwNyIsInN1YiI6IjY0NjIwMzVmNmUwZDcyMDE1YzBmNzY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1toCtEaeEdjRPpSqNHZrOtz7j10GONgCJQ6nPKBuFJg'
    }
  };
  
  
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(data => { 
        
        
        data.results.forEach(movies => {
         
        //creation de la div container qui aura comme className movies-container
        // const moviesSection = document.getElementById('movies');
        // const container = document.createElement('div');
        // container.classList.add('movies-container');
        // moviesSection.appendChild(container); 

        const moviesContainer = document.getElementsByClassName('movies-container')[0];
        const containerCard = document.createElement('div');// a reprendre 
        // console.log(moviesContainer);
        containerCard.classList.add('movie-card');
        // console.log(containerCard);
        moviesContainer.appendChild(containerCard);
        // console.log(containerCard);
        
        const {original_title, poster_path, backdrop_path, release_date} = movies;

        containerCard.innerHTML = `<img id="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Nom du film">
                                  <h2 id="movie-name">${original_title}</h2>
                                  <p id="movie-date">${release_date}</p>`; 
         
          console.log(movies)
        // console.log(card);

      });
          
    })
    .catch(err => console.error(err));
