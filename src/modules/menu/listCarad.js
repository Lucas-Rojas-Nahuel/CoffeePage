import detailsCard from "./detailsCard";

export default function listCard(json) {
  const section = document.querySelector(".content-menu");

  const previousList = section.querySelector(".coffee-list");
  if (previousList) previousList.remove();

  const previousListError = document.querySelector(".coffee-list-error");
  if (previousListError) previousListError.remove();

  const h2Categoria = document.querySelector("#search-and-categories");
  const categoriList = document.querySelector("#categoryList");

  h2Categoria.classList.remove("hidden");
  categoriList.classList.remove("hidden");

  const coffeeList = document.createElement("article");
  coffeeList.classList.add("coffee-list");
  coffeeList.classList.add("fade-in");

  json.forEach((coffee) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = "";

    const img = document.createElement("img");
    img.src = require(`../../assets/images/coffees-img-menu/${coffee.img}`);

    const rating = document.createElement("div");
    rating.classList.add("rating");

    rating.innerHTML = ` ⭐<span>${coffee.rating}</span>`;

    const h2 = document.createElement("h2");
    h2.textContent = coffee.name;

    const p = document.createElement("p");
    p.textContent = coffee.description;

    const price = document.createElement("div");
    price.classList.add("bottom-info");

    price.innerHTML = `
    <span>$ ${coffee.price}</span>
    <button class="add-btn">Mas detalles</button>`;

    card.append(img, rating, h2, p, price);

    coffeeList.append(card);

    card.addEventListener("click", () => {
      detailsCard(coffee);
    });
  });

  section.append(coffeeList);
}
