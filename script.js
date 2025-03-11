const gallery = document.querySelector('.gallery');
const images = [
    "images/holi-celebration-1.jpg",
    "images/holi-colors.jpg",
    "images/holi-festival.jpg"
];

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Holi Image';
    gallery.appendChild(imgElement);
});
