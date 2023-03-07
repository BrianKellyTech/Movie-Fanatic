let movie_id = location.pathname;

// fetching movie details
fetch(`${movieDetails}${movie_id}?` + new URLSearchParams({
    api_key: apiKeyTMDB
}))
    .then(res => res.json())
    .then(data => {
        movieHeroInfo(data);
    })

const movieHeroInfo = (data) => {
    const movieName = document.querySelector('.movie-name');
    const genres = document.querySelector('.movie-genres');
    const des = document.querySelector('.movie-description');
    const title = document.querySelector('title');
    const backdrop = document.querySelector('.movie-info');

    title.innerHTML = movieName.innerHTML = data.title;
    genres.innerHTML = `${data.release_date.split('-')[0]} | `;
    for (let i = 0; i < data.genres.length; i++) {
        genres.innerHTML += data.genres[i].name + formatString(i, data.genres.length);
    }

    if (data.adult == true) {
        genres.innerHTML += ' | +18';
    }

    if (data.backdrop_path == null) {
        data.backdrop_path = data.poster_path;
    }

    des.innerHTML = data.overview;

    backdrop.style.backgroundImage = `url(${hiresImageURL}${data.backdrop_path})`;
}

// Adds a comma after a genre if there are more to be listed, adds nothing if it's finished
const formatString = (currentIndex, maxIndex) => {
    return (currentIndex == maxIndex - 1) ? '' : ', ';
}



