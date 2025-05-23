import "../../styles/home/section1.css";
import homeData from "../../assets/data/coffe-home.json";


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
  const title = document.createElement("h3");
  title.classList.add("title");
  const description = document.createElement("p");
  description.classList.add("description");
  const btn = document.createElement("button");
  btn.classList.add("btn-article");
  btn.textContent = "Comprar Ahora";

  // vista de la imagenes
  const divSectionImg = document.createElement("div");
  divSectionImg.classList.add("div-img");
  const img = document.createElement("img");
  img.classList.add("img-article");

  //carrosel
  name.textContent = homeData[0].name;
  title.textContent = homeData[0].title;
  description.textContent = homeData[0].description;
  console.log(homeData[0].img);
  img.src = require(`../../assets/images/coffe-img-home/${homeData[0].img}`);

  let index = 1;
  setInterval(() => {
    name.textContent = homeData[index].name;
    title.textContent = homeData[index].title;
    description.textContent = homeData[index].description;
    console.log(homeData[index].img);
    img.src = require(`../../assets/images/coffe-img-home/${homeData[index].img}`);
    article1.appendChild(btn);
    index = (index + 1) % 3;
  }, 5000);

  //agregamos etiquetas
  article1.appendChild(name);
  article1.appendChild(title);
  article1.appendChild(description);
  article1.appendChild(btn);
  divSectionImg.appendChild(img);

  div.appendChild(article1);
  div.appendChild(divSectionImg);
  section1.appendChild(div);
  content.appendChild(section1);
}
