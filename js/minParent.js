export function minParent(parentNode) {
  let arr = [];

  parentNode.forEach((element, i) => {
    arr[i] = element.children.length;
  });

  let min = Math.min.apply(null, arr);

  for (let i = 0; i < parentNode.length; i++) {
    if (parentNode[i].children.length == min) {
      return parentNode[i];
    }
  }
}
