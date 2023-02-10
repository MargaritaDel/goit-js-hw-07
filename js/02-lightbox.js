import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGallaryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img   
  class="gallery__image"
   src="${preview}"
  alt="${description}" 
  title="${description}"/>
</a>`;
    })
    .join("");
}

const Markup = createGallaryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", Markup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  if (!event.target.nodeName === "IMG") {
    return;
  }

  event.preventDefault();

  const closeModal = (event) => {
    const Escape = "Escape";

    if (event.code === Escape) {
      instance.close();
    }
  };
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

console.log(galleryItems);
