document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');

    const images = [
        'images/2nd.jpg',
        'images/3rd.jpg',
        'images/4th.jpg',
        'images/5th.jpg',
        'images/6th.jpg',
        'images/7th.jpg',
        'images/8th.jpg',
        'images/9th.png',
        'images/10th.jpg'
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Holi Celebration Image';
        galleryContainer.appendChild(img);
    });
});


