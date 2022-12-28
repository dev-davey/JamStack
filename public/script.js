const title = document.getElementsByClassName("section-title");
// for (var i = 0; i < title.length; i++) {
//   console.log(title[i]);
// }

[...title].forEach((element) => {
  element.style.textTransform = "capitalize";
});
