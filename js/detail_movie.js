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
            
            // display image poster of movie 
            const displayImage = document.getElementById('image-display');
            displayImage.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

            // display content inside div id# infos
            const title = document.querySelector('#infos h2');
            title.innerHTML = data.title

            const release_date = document.querySelector('#infos p:nth-of-type(1)')
            release_date.innerHTML = `Date de sortie : <br>${frenchDate(data.release_date)}`;

            const genresParagraphe = document.querySelector('#infos p:nth-of-type(2)');
            const genres = data.genres.map((genre) => genre.name).join(", ");
            genresParagraphe.innerHTML = "Genres : " + genres;

            const countriesProduction = document.querySelector('#infos p:nth-of-type(3)');
            const countries = data.production_countries.map((countrie) => countrie.name).join(", ");
            countriesProduction.innerHTML = "Pays de production : " + countries;

            const spokenLanguage = document.querySelector('#infos p:nth-of-type(4)');
            const language = data.spoken_languages.map((languages) => languages.name).join(", ");
            spokenLanguage.innerHTML = "langues : " + language;

            const overview = document.querySelector('.overview');
            overview.innerHTML = `<p>synopsis :</p>
                                  <p>${data.overview}</p>`;

            //display companies production 
            const companiesContainer = document.querySelector('.companies-container');
            data.production_companies.forEach(companies => {

                const {logo_path , name, origin_country}  = companies;
            
                const companieLoop =  `<div class="companies-box" id="companies-box">
                                          <img src="https://image.tmdb.org/t/p/original/${logo_path}" alt="logo entrepride de production">
                                       </div>`
        
                // allow me to display all the companies without erasing the other.
                companiesContainer.insertAdjacentHTML("beforeend", companieLoop);                           
            
              })
            

        })
        .catch(err => console.error(err));
    
})
.catch(err => console.error(err));