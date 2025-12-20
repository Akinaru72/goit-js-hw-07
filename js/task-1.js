const categEl = document.querySelectorAll(".item");
console.dir(`Number of categories: ${categEl.length}`);

categEl.forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].childElementCount}`);
});
