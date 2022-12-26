const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const item = [...categories]
  .map(
    (category) => `Category: ${category.children[0].textContent}
Elements: ${category.children[1].children.length}
`
  )
  .join(`\n`);
console.log(item);
