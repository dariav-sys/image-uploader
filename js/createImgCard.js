import { removeImageFromLocalStorage } from "./localStorage.js";
import { minParent } from "./minParent.js";
import { columns } from "./refs.js";

export function createImgCard(image, name) {
  let img = createImg(image);
  let p = document.createElement("p");
  let deleteBtn = document.createElement("button");
  p.classList.add("title");
  p.appendChild(document.createTextNode(name));
  deleteBtn.appendChild(document.createTextNode("Удалить"));
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    removeImageFromLocalStorage(image);
    // this.parentNode.parentNode.removeChild(this.parentNode);
    p.classList.add("crossed")
    setTimeout(
      () => {

        this.parentNode.parentNode.removeChild(this.parentNode)
      },
      1000
    );
  });
  let div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(deleteBtn);
  let parent_column = minParent(columns);
  parent_column.appendChild(div);
}

function createImg(imgsrc) {
  let img = document.createElement("img");
  img.setAttribute("src", imgsrc);
  img.className = "img";
  return img;
}
