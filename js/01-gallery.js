import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(handleGalleryItems(galleryItems));

const galleryItemsEl = document.querySelector('.gallery');
const galleryMarkup = handleGalleryItems(galleryItems);

galleryItemsEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryItemsEl.addEventListener('click', handleContainerClick);

function handleGalleryItems( galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
        })
        .join('');
}

function handleContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    console.log(event.target.dataset.source);

    const modal = basicLightbox.create(`
    <img class = "gallery__image" src ="${event.target.dataset.source}"/>
`)

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
         modal.close();
 }
    })
         modal.show()
    }
   
