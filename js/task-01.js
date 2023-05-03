const listEl = document.querySelectorAll(".item");
console.log("Number of categories:", listEl.length);
listEl.forEach(function (item) {
  const topic = item.querySelector("h2");
  console.log("Category:", topic.textContent);
  const sublist = item.querySelectorAll("li");
  console.log("Elements:", sublist.length);
});