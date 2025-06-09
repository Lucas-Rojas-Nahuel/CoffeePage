import section1 from "./section1";
import "../../styles/home/home.css";
import aboutUs from "./aboutUs";
import service from "./service";

export default function loadHome() {
  section1();
  aboutUs();
  service();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
