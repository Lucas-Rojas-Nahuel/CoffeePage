import "../../styles/home/aboutUs.css";
import loadContact from "../contact/contact";

export default function aboutUs() {
  const content = document.querySelector("#content");

  const contact = document.getElementById("contact-btn");
  const home = document.getElementById("home-btn");

  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-section");

  //contenido de about-img
  const aboutImages = document.createElement("div");
  aboutImages.classList.add("about-images");

  const img1 = document.createElement("div");
  img1.classList.add("img1");

  const img2 = document.createElement("div");
  img2.classList.add("img2");

  aboutImages.appendChild(img1);
  aboutImages.appendChild(img2);

  //contenido de about-text
  const aboutText = document.createElement("div");
  aboutText.classList.add("about-text");

  const subtitle = document.createElement("p");
  subtitle.classList.add("subtitle");
  subtitle.textContent = "Sobre Nosotros";

  const title = document.createElement("h3");
  title.classList.add("title-about");
  title.textContent = "ACERCA DE CAFÉ GRANO URBANO";

  const text1 = document.createElement("p");
  text1.classList.add("text");
  text1.textContent =
    "Grano Urbano nació con la misión de conectar personas a través del café. Cada rincón de nuestro local está diseñado para invitar a la calma, la conversación y el disfrute.";
  const text2 = document.createElement("p");
  text2.classList.add("text2");
  text2.textContent =
    "Nuestro café es cuidadosamente seleccionado y tostado localmente. Además de nuestras bebidas artesanales, ofrecemos espacios acogedores para que trabajes, descanses o compartas.";

  const btnAbout = document.createElement("button");
  btnAbout.classList.add("btn-about");
  btnAbout.textContent = "Contactanos";

  btnAbout.addEventListener("click", () => {
    content.innerHTML = "";
    home.classList.remove("button-selected");
    contact.classList.add("button-selected");
    loadContact();
  });

  aboutText.appendChild(subtitle);
  aboutText.appendChild(title);
  aboutText.appendChild(text1);
  aboutText.appendChild(text2);
  aboutText.appendChild(btnAbout);

  aboutSection.appendChild(aboutImages);
  aboutSection.appendChild(aboutText);
  content.appendChild(aboutSection);
}
