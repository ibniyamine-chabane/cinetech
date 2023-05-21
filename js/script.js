
alert("Bonjour Nejiv")

// const apiKey = process.env.API_KEY;

fetch(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`)
.then(response => response.text())
.then(data => {
    const section = document.getElementById("section");
    section.innerHTML = data;
})