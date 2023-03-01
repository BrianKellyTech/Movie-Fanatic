const main = document.querySelector('.main');

//Fetch movie data from the API and make into JSON
fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
    .then(res => res.json())
    .then(data => {
        data.genres.forEach(item => {
            fetchMoviesListByGenres(item.id, item.name);
        })
    });

//Random function to get fetch random page between between 1 and 3
const fetchMoviesListByGenres = (id, genres) => {
    fetch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
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
    makeCards(category, data);
}

/* Check to make sure the image is received from TMDB. It uses both 'backdrop_path' and 'poster_path' for somne stupid reason.
   Check for both and skip if neither is found */
const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item, i) => {
        if (item.backdrop_path == null) {
            item.backdrop_path = item.poster_path;
            if (item.backdrop_path == null) {
                return;
            }
        }

        //Pull in the images from TMDB
        movieContainer.innerHTML += `
        <div class="movie">
            <img src="${img_url}${item.backdrop_path}" alt="Movie Poster">
            <p class="movie-title">${item.title}</p>
        </div>
        `;
    })
}