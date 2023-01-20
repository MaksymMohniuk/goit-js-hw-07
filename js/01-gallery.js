import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
    const markup = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>` }).join(''); 
  return markup;
}

const galleryMarkupContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryMarkupContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryMarkupContainer.addEventListener('click', galleryMarkupContainerClick);

function galleryMarkupContainerClick(event) {
    if(event.target.classlist.containes('gallery__link')){
        return;
    }

    console.log(event.target.dataset.original);
}

