import "../../styles/home/service.css";

export default function service() {
  const content = document.querySelector("#content");

  // contenido de services-section
  const servicesSection = document.createElement("section");
  servicesSection.classList.add("services-section");

  const servicesSubtitle = document.createElement("p");
  servicesSubtitle.classList.add("services-subtitle");
  servicesSubtitle.textContent = "CARACTERÍSTICAS";

  const servicesTitle = document.createElement("h4");
  servicesTitle.classList.add("services-title");
  servicesTitle.textContent = "NUESTROS SERVICIOS";

  //services-container
  const servicesContainer = document.createElement("div");
  servicesContainer.classList.add("services-container");

  //izquierda
  const serviceColumn = document.createElement("div");
  serviceColumn.classList.add("service-column");

  const service1 = document.createElement("div");
  service1.classList.add("service");

  const img1 = document.createElement("img");
  img1.src = require("../../assets/images/coffee-img-service/cafe.gif")
  img1.alt="icono cafeteria"

  const service1h3 = document.createElement("h3");
  service1h3.textContent = "Barismo Artesanal";

  const service1p = document.createElement("p");
  service1p.textContent =
    "Cafés preparados por baristas expertos con técnicas tradicionales y modernas.";

  service1.append(img1, service1h3, service1p);

  const service2 = document.createElement("div");
  service2.classList.add("service");

  const img2 = document.createElement("img");
  img2.src = require("../../assets/images/coffee-img-service/coffee-filter.gif")
  img2.alt = "icono bebida"

  const service2h3 = document.createElement("h3");
  service2h3.textContent = "Variedad de Bebidas";

  const service2p = document.createElement("p");
  service2p.textContent =
    "Espresso, filtrado, cold brew, tés y más opciones para todos los gustos.";

  service2.append(img2, service2h3, service2p);

  serviceColumn.append(service1, service2);

  //centro
  const serviceImages = document.createElement("div");
  serviceImages.classList.add("service-images");

  const img3 = document.createElement("div");
  img3.classList.add("img3");

  const img4 = document.createElement("div");
  img4.classList.add("img4");

  serviceImages.append(img3, img4);

  //derecha

  const serviceColumn2 = document.createElement("div");
  serviceColumn2.classList.add("service-column");

  const service3 = document.createElement("div");
  service3.classList.add("service");

  const img5 = document.createElement("img");
  img5.src = require("../../assets/images/coffee-img-service/coffee-cup-unscreen.gif")
  img5.alt="icono wifi"

  const service3h3 = document.createElement("h3");
  service3h3.textContent = "Zona de Trabajos";

  const service3p = document.createElement("p");
  service3p.textContent =
    "Ambiente tranquilo, Wi-Fi y espacios cómodos para concentrarte o relajarte.";

  service3.append(img5, service3h3, service3p);

  const service4 = document.createElement("div");
  service4.classList.add("service");

  const img6 = document.createElement("img");
  img6.src = require("../../assets/images/coffee-img-service/confectionery-1.gif")
  img6.alt="icono reposteria"

  const service4h3 = document.createElement("h3");
  service4h3.textContent = "Repostería Casera";

  const service4p = document.createElement("p");
  service4p.textContent =
    "Disfruta de postres frescos horneados en casa para acompañar tu café.";

  service4.append(img6, service4h3, service4p);

  serviceColumn2.append(service3, service4);

  servicesContainer.append(serviceColumn, serviceImages, serviceColumn2);

  servicesSection.append(servicesSubtitle, servicesTitle, servicesContainer);

  content.appendChild(servicesSection);
}
