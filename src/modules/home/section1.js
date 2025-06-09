import "../../styles/home/section1.css";
import homeData from "../../assets/data/coffe-home.json";
import detailsCard from "../menu/detailsCard";
import coffeeListJson from "../../assets/data/coffees.json";

export default function section1() {
  const content = document.querySelector("#content");

  //creando las estructuras
  const section1 = document.createElement("section");
  section1.classList.add("section1");

  const div = document.createElement("div");
  div.classList.add("content-section1");

  const article1 = document.createElement("article");
  article1.classList.add("text-container");

  //lista de los articulos
  const name = document.createElement("p");
  name.classList.add("name");

  const title = document.createElement("h2");
  title.classList.add("title");

  const description = document.createElement("p");
  description.classList.add("description");

  const btn = document.createElement("button");
  btn.classList.add("btn-article");
  btn.textContent = "Mas detalles";

  // vista de la imagenes
  const divSectionImg = document.createElement("div");
  divSectionImg.classList.add("div-img");

  const img = document.createElement("img");
  img.classList.add("img-article");

  //efecto de salida
  article1.classList.add("fade-in"); 
  img.classList.add("fade-in");

  let index = 0;

  //rederisamos los contenidos
  function renderSlide(i) {
    name.textContent = homeData[i].name;
    title.textContent = homeData[i].title;
    description.textContent = homeData[i].description;
    img.src = require(`../../assets/images/coffe-img-home/${homeData[i].img}`);
    img.alt = homeData[i].name;

    // Reiniciar animación en texto
    article1.classList.remove("fade-in");
    void article1.offsetWidth; // Fuerza el reflow para que vuelva a aplicar la animación
    article1.classList.add("fade-in");

    //animar imagen también
    img.classList.remove("fade-in");
    void img.offsetWidth;
    img.classList.add("fade-in");
  }

  renderSlide(index);

  btn.addEventListener("click", () => {
    const coffeeFilter = coffeeListJson.filter(
      (coffee) => coffee.id === homeData[index].id
    );

    content.innerHTML = "";

    detailsCard(coffeeFilter[0], true);
  });

  //tiempo en que cambia de tarjeta
  setInterval(() => {
    index = (index + 1) % homeData.length;
    renderSlide(index);
  }, 5000);

  //agregamos etiquetas

  article1.append(name, title, description, btn);

  divSectionImg.appendChild(img);

  div.append(article1, divSectionImg);

  section1.appendChild(div);
  content.appendChild(section1);
}
