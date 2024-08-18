const apiKey = "e85267e5";
const movieForm = document.getElementById("movieForm");
const movieContainer = document.getElementById("movieContainer");
movieForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const movieTitle = document.getElementById("movieInput").value.trim();
    fetchMovieData(movieTitle);
});
async function fetchMovieData(title) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovie(data);
        } else {
            movieContainer.innerHTML = `<p class="error">Movie not found. Please try again.</p>`;
        }
    } catch (error) {
        movieContainer.innerHTML = `<p class="error">An error occurred. Please try again later.</p>`;
    }
}
function displayMovie(movie) {
    movieContainer.innerHTML = `
        <div class="movie-card">
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div class="movie-info">
                <h3 class="movie-title">${movie.Title}</h3>
                <p class="movie-details">
                    <strong>Year:</strong> ${movie.Year}<br>
                    <strong>Genre:</strong> ${movie.Genre}<br>
                    <strong>Director:</strong> ${movie.Director}<br>
                    <strong>Actors:</strong> ${movie.Actors}<br>
                    <strong>Plot:</strong> ${movie.Plot}
                </p>
            </div>
        </div>
    `;
}