const gallery = document.querySelector('.gallery');
const images = [
    "holi-website/images/holi-celebration-1.jpg",
    "holi-website/images/holi-colors.jpg",
    "holi-website/images/holi-festival.jpg"
];

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Holi Image';
    gallery.appendChild(imgElement);
});
