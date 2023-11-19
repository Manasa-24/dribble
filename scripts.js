function displayFeaturedShots() {
    const featuredShotsSection = document.querySelector('.featured-shots');

    featuredShotsData.forEach(shot => {
        const shotCard = document.createElement('div');
        shotCard.classList.add('shot-card');

        const image = document.createElement('img');
        image.src = shot.image;
        image.alt = shot.title;

        const title = document.createElement('h3');
        title.textContent = shot.title;

        shotCard.appendChild(image);
        shotCard.appendChild(title);
        
        featuredShotsSection.appendChild(shotCard);
    });
}
window.onload = displayFeaturedShots;