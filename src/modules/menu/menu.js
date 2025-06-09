import "../../styles/menu/menu.css";

import coffeeListJson from "../../assets/data/coffees.json";
import listCard from "./listCarad";
import coffeeName from "../../assets/data/coffee-name.json";
import coffeeNotFound from "./coffeeNotFound";

let json = coffeeListJson;
let categoriSelected = [];

const uniqueCategories = [
  ...new Set(coffeeListJson.map((coffee) => coffee.categoria)),
];

export default function loadMenu() {
  const content = document.querySelector("#content");
  const section = document.createElement("section");
  section.classList.add("content-menu");

  //FILTROS DE CAFE
  const filter = document.createElement("article");
  filter.classList.add("filter");
  filter.setAttribute("aria-labelledby", "search-and-categories");

  //search
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-form");
  searchBar.role = "search";
  searchBar.id = "searchForm";

  const label = document.createElement("label");
  label.for = "search";
  label.textContent = "Buscar café";

  const input = document.createElement("input");
  input.type = "search";
  input.autocomplete = "off";
  input.id = "search";
  input.name = "search";
  input.placeholder = "Buscar";
 
  const button = document.createElement("button");
  button.type = "submit";
  button.setAttribute("aria-label", "Search");
  button.innerHTML = `<i class="fas fa-search"></i>`;

  searchBar.append(label, input, button);

  searchBar.addEventListener("submit", (e) => {
    e.preventDefault();
    json = coffeeListJson;

    const value = input.value
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    const filter = json.filter((coffee) => {
      return coffee.name
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(value);
    });

    if (filter.length === 0) {
      coffeeNotFound();
    } else {
      json = filter;
      listCard(json);
    }
  });

  const ulSearch = document.createElement("ul");
  ulSearch.classList.add("autocomplete-list");
  ulSearch.id = "sugerencias";

  document.addEventListener("click", (e) => {
    const esClickDentro =
      input.contains(e.target) || ulSearch.contains(e.target);

    if (!esClickDentro) {
      ulSearch.innerHTML = "";
    }
  });

  let currentIndex = -1;

  input.addEventListener("input", () => {
    const valor = input.value
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    ulSearch.innerHTML = "";

    currentIndex = -1;

    if (valor === "") return;

    const filtrados = coffeeName.filter((cafe) =>
      cafe
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(valor)
    );

    filtrados.forEach((cafe, index) => {
      const li = document.createElement("li");
      li.textContent = cafe;
      li.addEventListener("click", () => {
        input.value = cafe;
        ulSearch.innerHTML = "";
      });
      ulSearch.appendChild(li);
    });
  });

  input.addEventListener("keydown", (e) => {
    const items = ulSearch.querySelectorAll("li");

    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;

      updateActive(items);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateActive(items);
    } else if (e.key === "Enter") {
      if (currentIndex >= 0) {
        input.value = items[currentIndex].textContent;
        ulSearch.innerHTML = "";
      }
    }
  });

  function updateActive(items) {
    items.forEach((item) => item.classList.remove("active"));
    if (currentIndex >= 0) {
      items[currentIndex].classList.add("active");
      items[currentIndex].scrollIntoView({ block: "nearest" });
    }
  }

  //categoria
  const h2Categori = document.createElement("h2");
  h2Categori.id = "search-and-categories";
  h2Categori.textContent = "Categorias";

  //lista de categorias
  const ul = document.createElement("div");
  ul.classList.add("category-list");
  ul.id = "categoryList";

  uniqueCategories.forEach((categori) => {
    const li = document.createElement("button");
    li.classList.add("category");
    li.setAttribute("data-category", `${categori}`);
    li.textContent = `${categori}`;

    li.addEventListener("click", () => {
      if (li.classList.contains("active")) {
        li.classList.remove("active");
        categoriSelected = categoriSelected.filter(
          (categori) => categori !== li.dataset.category
        );
      } else {
        li.classList.add("active");
        categoriSelected.push(li.dataset.category);
      }
      console.log(categoriSelected);
      if (categoriSelected.length === 0) {
        json = coffeeListJson;
        listCard(json);
      } else {
        const filtrado = coffeeListJson.filter((coffee) =>
          categoriSelected.includes(coffee.categoria)
        );
        console.log(filtrado);
        json = filtrado;
        listCard(json);
      }
    });

    ul.appendChild(li);
  });

  filter.append(searchBar, ulSearch, h2Categori, ul);

  section.append(filter);
  content.appendChild(section);

  //LISTAS DE CAFE

  listCard(json);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
