// the global variable
var globalTitle = " Winter Is  Coming";

function urlSlug(title) {
  return title.toLowerCase().split(/\W+/).filter((item) => item !="").join("-");
}
// toLowerCase returns " winter is  coming"
// split returns ["", "winter", "is", "coming"]
// filter  returns ["winter", "is", "coming"]
// join returns "winter-is-coming"

var winterComing = urlSlug(globalTitle);
console.log(winterComing); // Returns "winter-is-coming"
