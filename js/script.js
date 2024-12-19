const images = [
    {
        preview: "Images/page1.2.jpg",
        original: "Images/page1.jpg",
        description: "description 1"
    },
    {
        preview: "Images/page2.2.jpg",
        original: "Images/page2.1.webp",
        description: "description 2"
    },
    {
        preview: "Images/page3.2.jpg",
        original: "Images/page3.1.jpg",
        description: "description 1"
    },
    {
        preview: "Images/page1.jpg",
        original: "Images/page4.1.jpg",
        description: "description 1"
    },
    {
        preview: "Images/page1.2.jpg",
        original: "Images/page1.jpg",
        description: "description 1"
    },
    {
        preview: "Images/page1.2.jpg",
        original: "Images/page1.jpg",
        description: "description 1"
    },
    {
        preview: "Images/page1.2.jpg",
        original: "Images/page1.jpg",
        description: "description 1"
    },
    {
        preview: "Images/page1.2.jpg",
        original: "Images/page1.jpg",
        description: "description 1"
    },
    {
        preview: "Images/page1.2.jpg",
        original: "Images/page1.jpg",
        description: "description 1"
    }
]

const galleryImage = document.getElementsByClassName('gallery')[0];
images.forEach(item => {
    const liElement = document.createElement('li');
    liElement.classList.add('smallEl');
    const imagElement = document.createElement('img');
    imagElement.classList.add('image');
    imagElement.src = item.preview;
    imagElement.alt = item.description;
    imagElement.dataset.original = item.original;
    liElement.appendChild(imagElement);
    galleryImage.appendChild(liElement);
});

galleryImage.addEventListener('click', e => {
    const originLink = e.target.dataset.original;
    const instance = basicLightbox.create(`
        <img src="${originLink}" width="800" height="600">
    `)
    instance.show()
})