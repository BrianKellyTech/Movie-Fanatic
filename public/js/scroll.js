// Target the 'movie-container' holding all the movie images and add scrolling
const setupScrolling = () => {
    const container = [...document.querySelectorAll('.movie-container')];
    const nextBtn = [...document.querySelectorAll('.next-btn')];
    const prevBtn = [...document.querySelectorAll('.previous-btn')];

    // Use getBoundingClientRect to return the containers dimensions for manipulation
    container.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        prevBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}