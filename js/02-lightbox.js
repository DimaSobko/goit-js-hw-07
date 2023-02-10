import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsGalleryContainer = galleryMarKup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsGalleryContainer);
galleryContainer.addEventListener('click', onGalleryContainer)



function galleryMarKup (galleryItems) {
    
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    }).join('')
}

function onGalleryContainer (event) {
    event.preventDefault();
    if(event.target.nodeName !=='IMG') {
        return 
    } 
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false
});