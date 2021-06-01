export function saveImageToLocalStorage(img, name) {
  let addedToLocalstorage = JSON.parse(localStorage.getItem("storageFiles"));
  if (!addedToLocalstorage) addedToLocalstorage = [];
  addedToLocalstorage.push({img, name});
  localStorage.setItem("storageFiles", JSON.stringify(addedToLocalstorage));
}

export function removeImageFromLocalStorage(img) {  
  let addedToLocalstorage = JSON.parse(localStorage.getItem("storageFiles"));
  if (!addedToLocalstorage) addedToLocalstorage = [];
  addedToLocalstorage.forEach((data) => {
    if (data.img === img) {
      addedToLocalstorage.splice(addedToLocalstorage.indexOf(data), 1);
    }
  });
  localStorage.setItem("storageFiles", JSON.stringify(addedToLocalstorage));
}

export function getImagesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("storageFiles"));
}
