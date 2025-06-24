const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.quertySelector("h2").textContent;
  const elementsCoutn = category.quertySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
