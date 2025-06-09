import "../../styles/menu/detailsCard.css";
import loadMenu from "./menu";
import loadHome from "../home/home";
export default function detailsCard(coffee, homeSite = false) {
  const previousList = document.querySelector(".content-menu");
  if (previousList) previousList.remove();

  const content = document.getElementById("content");

  const body = document.createElement("section");
  body.classList.add("body");

  const section = document.createElement("div");
  section.classList.add("coffee-card");
  section.classList.add("fade-in");

  //img
  const coffeeImage = document.createElement("div");
  coffeeImage.classList.add("coffee-image");
  const backBtn = document.createElement("button");
  backBtn.classList.add("icon-btn");
  backBtn.innerHTML = `<i class="fa-solid fa-left-long"></i>`;

  // Evento para volver atrás
  backBtn.addEventListener("click", () => {
    body.remove();
    homeSite ? loadHome() : loadMenu();
  });

  const img = document.createElement("img");
  img.src = require(`../../assets/images/coffees-img-menu/${coffee.img}`);

  coffeeImage.append(backBtn, img);

  //INFO
  const coffeeInfo = document.createElement("div");
  coffeeInfo.classList.add("coffee-info");

  coffeeInfo.innerHTML = `
    
    <h2 class="title-datails">${coffee.name}</h2>
    
    <div class="rating-details">
      <span>★ ${coffee.rating}</span>
    </div>
    
    <div class="size-options">
      <p><strong>Tamaño de Café</strong></p>
      <div class="sizes">
        <button class="size ${
          coffee.size === "Pequeño" ? "selected" : ""
        }">Pequeño</button>
        <button class="size ${
          coffee.size === "Mediano" ? "selected" : ""
        }">Mediano</button>
        <button class="size ${
          coffee.size === "Grande" ? "selected" : ""
        }">Grande</button>
      </div>
    </div>

    <div class="region">
      <span>Region: <strong>${coffee.region}</strong></span>
    </div>

    <div class="about">
      <p><strong>Descripción</strong></p>
      <p class="desc">
        ${coffee.description}
      </p>
    </div>

    <div class="bottom-row">
      <span>Volume: <strong>${coffee.volume}</strong></span>
      <span class="price"><strong>$ ${coffee.price}</strong></span>
    </div>
  `;

  section.append(coffeeImage, coffeeInfo);
  body.append(section);
  content.append(body);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
