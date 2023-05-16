
alert("Bonjour Neji")

fetch('')
.then(response => response.text())
.then(data => {
    const section = document.getElementById('section');
    section.innerHTML = data;
});