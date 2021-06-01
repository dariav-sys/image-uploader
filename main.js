import { createImgCard } from "./js/createImgCard.js";
import {
  saveImageToLocalStorage,
  getImagesFromLocalStorage,
} from "./js/localStorage.js";

import { file } from "./js/refs.js";

let addedToLocalstorage = getImagesFromLocalStorage();

if (addedToLocalstorage) {
  addedToLocalstorage.forEach(({ img, name }) => {
    createImgCard(img, name);
  });
}

file.onchange = () => {
  for (const key in file.files) {
    const element = file.files[key];
    if (element.type === "image/jpeg" || element.type === "image/png") {
      let src = URL.createObjectURL(element);
      createImgCard(src, element.name);
      saveImageToLocalStorage(src, element.name);
    }
  }
};
