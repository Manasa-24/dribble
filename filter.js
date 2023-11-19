function filter(criteria) {
  const images = document.querySelectorAll('.image');
  images.forEach((image) => {
    image.classList.remove('active');
    if (criteria === 'popularity' && image.dataset.popularity === 'high') {
      image.classList.add('active');
    }
    if (criteria === 'recommended' && image.dataset.recommendation === 'high') {
      image.classList.add('active');
    }
  });
}
function showAll() {
  const images = document.querySelectorAll('.image');
  images.forEach((image) => {
    image.classList.add('active');
  });
}
