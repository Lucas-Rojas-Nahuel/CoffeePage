import section1 from "./section1";
import "../../styles/home/home.css";
import aboutUs from "./aboutUs";

export default function loadHome() {
  section1();
  aboutUs();
  const section2 = document.createElement("section");
  const section3 = document.createElement("section");
}
