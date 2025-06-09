import "../../styles/menu/coffeeNotFound.css"

export default function coffeeNotFound() {
  const previousList = document.querySelector(".coffee-list");
  if (previousList) previousList.remove();

  const previousListError = document.querySelector(".coffee-list-error");
  if (previousListError) previousListError.remove();

  const h2Categoria = document.querySelector("#search-and-categories")
  const categoriList = document.querySelector("#categoryList")

  h2Categoria.classList.add("hidden")
  categoriList.classList.add("hidden")

  const section = document.querySelector(".content-menu");

  const coffeeList = document.createElement("article");
  coffeeList.classList.add("coffee-list-error");
  coffeeList.classList.add("fade-in");

  const errorImg = document.createElement("img")
  errorImg.classList.add("error-img")
  errorImg.src = require("../../assets/images/coffeeNotFound/errorNotFound.jpg")

 /*  const errorTitle = document.createElement("h3");
  errorTitle.innerHTML = `<strong>No se encontraron resultados para tu búsqueda.</strong>`;

  const errorP = document.createElement("p")
  errorP.textContent = "Verificá si escribiste correctamente o probá con una categoría distinta."
 */
  coffeeList.append(errorImg);

  section.append(coffeeList);
}
