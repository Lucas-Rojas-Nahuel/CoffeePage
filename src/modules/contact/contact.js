import "../../styles/contact/contact.css";
export default function loadContact() {
  const content = document.querySelector("#content");

  content.innerHTML = `<section class="contact-section">
  <h2 class="contact-title">Contactanos</h2>
  <hr class="contact-divider" />
  <div class="social-links">
    <a href="/WhatsApp" target="_blank" class="whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="/Facebook" target="_blank" class="facebook"><i class="fa-brands fa-facebook"></i></a>
    <a href="/Instagram" target="_blank" class="instagram"><i class="fa-brands fa-instagram"></i></a>
  </div>

  <form class="contact-form">
    <div class="form-row">
      <input type="text" placeholder="Nombre" name="name" required />
      <input type="email" placeholder="Correo electrónico" name="email" required />
    </div>

    <input type="tel" placeholder="Número de teléfono" name="phone" required />

    <label for="referido">¿Cómo llegaste a nosotros?</label>
    <select id="referido" name="referido">
      <option>Me lo recomendaron</option>
      <option>Instagram</option>
      <option>Facebook</option>
      <option>Google</option>
      <option>Otra</option>
    </select>

    <textarea placeholder="Mensaje" name="message" rows="4"></textarea>

    <button type="submit" class="btn-submit">ENVIAR</button>
  </form>
</section>
`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
