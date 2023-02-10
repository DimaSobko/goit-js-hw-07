import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsGalleryContainer = galleryMarKup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsGalleryContainer);
galleryContainer.addEventListener('click', onGalleryContainer)



function galleryMarKup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    }).join('')
}

function onGalleryContainer (event) {
    event.preventDefault();
    if(event.target.nodeName !=='IMG') {
        return 
    } 
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
        onShow: () => {
            document.addEventListener("keydown", onEscPress);
        }
    })

instance.show();

function onEscPress (event) {
    if (event.code === 'Escape') {
        instance.close();
    }
}

}

