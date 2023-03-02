// Target the 'movie-container' holding all the movie images and add scrolling
const scrollBar = () => {
    const container = [...document.querySelectorAll('.movie-container')];
    const nextBtn = [...document.querySelectorAll('.next-btn')];
    const previousBtn = [...document.querySelectorAll('.previous-btn')];

    // Use getBoundingClientRect to return the containers dimensions for manipulation
    container.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        previousBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}