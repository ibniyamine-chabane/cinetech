// alert("page detail");



const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzE1NDdkYWE4MmNhY2ZhODY0ZWUxZjY3ODA0M2QwNyIsInN1YiI6IjY0NjIwMzVmNmUwZDcyMDE1YzBmNzY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1toCtEaeEdjRPpSqNHZrOtz7j10GONgCJQ6nPKBuFJg'
    }
};

    function frenchDate(frenchdateString) 
    {
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

fetch('../idmovie')
    .then(response => response.json())
    .then(selected => {console.log(selected)
        console.log(selected.id)

        fetch(`https://api.themoviedb.org/3/movie/${selected.id}?language=fr-FR`, options)
            .then(response => response.json())
            .then(data => { 
            
      console.log(data)

      const displayImage = document.getElementById('image-display');
      const infos = document.getElementById('infos');
      infos.innerHTML = `<h2>${data.title}</h2>
                         <p>${frenchDate(data.release_date)} <br></p>`

      data.genres.forEach(genre => {
        console.log(genre)
        const {name , production_countries}  = genre;
        infos.innerHTML =  `<h2>${data.title}</h2>
                            <p>${frenchDate(data.release_date)}<br></p>
                            <p>${name} <br></p>
                            <p>  <br></p>
                            <p>langue <br></p>`
      })
     
      // infos.innerHTML = 

      displayImage.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
              
      // data.results.forEach(detail => {
      // console.log(movies.results[0])  
      // const {original_title, poster_path, backdrop_path, release_date, id} = detail;
      // if (id == selected.id) {
          
      // const moviesContainer = document.getElementsByClassName('movies-container')[0];
      // const containerCard = document.createElement('div');// a reprendre 
      // containerCard.classList.add('movie-card');
      // moviesContainer.appendChild(containerCard);
      
      // // const {original_title, poster_path, backdrop_path, release_date, id} = movies;
      // containerCard.innerHTML = `<a href="detail/${id}"><img id="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Nom du film"></a>
      //                           <h2 id="movie-name">${original_title}</h2>
      //                           <p id="movie-date">` + frenchDate(release_date) + `</p>`; 
      //                         }
      //         // console.log(movies);
      //       });

        })
        .catch(err => console.error(err));
    
})