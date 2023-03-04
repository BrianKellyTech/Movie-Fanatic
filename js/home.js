const main = document.querySelector('.main');

//Fetch movie data from the API and make into JSON
fetch(genreListURL + new URLSearchParams({
    api_key: apiKeyTMDB
}))
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(item => {
            moviesList(item.id, item.name);
        })
    });

//Random function to get fetch random page between between 1 and 3
const moviesList = (id, genres) => {
    fetch(movieGenreURL + new URLSearchParams({
        api_key: apiKeyTMDB,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
        .then(res => res.json())
        .then(data => {
            makeCategoryElement(`${genres}`, data.results);
        })
        .catch(err => console.log(err));
}

//Bring in 'main' from the HTML
const makeCategoryElement = (category, data) => {
    main.innerHTML += `
<div class="movie-list">
    <button class="previous-btn"><img src="img/previous-movie.png" alt="Previous Movie"></button>
    <h1 class="movie-category">${category}</h1>
    <div class="movie-container" id="${category}">
    </div>
    <button class="next-btn"><img src="img/next-movie.png" alt="Next Movie"></button>
</div>
`;
    movieCards(category, data);
}

/* Check to make sure the image is received from TMDB. It uses both 'backdrop_path' and 'poster_path' for somne stupid reason.
   Check for both and skip if neither is found */
const movieCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item, slider) => {
        if (item.backdrop_path == null) {
            item.backdrop_path = item.poster_path;
            if (item.backdrop_path == null) {
                return;
            }
        }

        // Pull in the images from TMDB
        // On click, take the user to the about page
        movieContainer.innerHTML += `
        <div class="movie" onclick="location.href = '/${item.id}'">
            <img src="${imageURL}${item.backdrop_path}" alt="Movie Poster">
            <p class="movie-title">${item.title}</p>
        </div>
        `;

        // Movie card slider
        if (slider == data.length - 1) {
            setTimeout(() => {
                scrollBar();
            });
        }
    })
}