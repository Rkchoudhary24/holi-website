document.addEventListener('DOMContentLoaded', () => {
    // Image URLs array (कोई syntax error नहीं)
    const imageUrls = [
        "https://source.unsplash.com/random/600x400/?holi",
        "https://source.unsplash.com/random/600x400/?color",
        // ... बाकी URLs
    ];

    // Gallery element को सही तरीके से select करें
    const gallery = document.getElementById('gallery');
    
    // Null check जोड़ें
    if(!gallery) {
        console.error("Gallery element not found!");
        return;
    }

    imageUrls.forEach(url => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'होली की तस्वीर';
        img.loading = 'lazy';
        
        card.appendChild(img);
        gallery.appendChild(card);
    });
});  document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");

    const images = [
        "image/01c8460536574ab9bbcb331e57e1867f.jpg",
        "image/57afdf1e02ae201fac534da2fec9b037.jpg",
        "image/37.jpg"
    ];

    images.forEach(src => {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.alt = "Holi Celebration";
        imgElement.classList.add("gallery-image");
        gallery.appendChild(imgElement);
    });
});

