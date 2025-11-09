/* ============================
   PORTFOLIO - DIEGO GINARD
   script.js
============================ */

// 🧠 Animación del texto del hero (escritura progresiva)
document.addEventListener("DOMContentLoaded", () => {
  const texto = "Técnico en Electrónica & Desarrollador IoT";
  const h2 = document.querySelector("#hero h2");
  let index = 0;

  const escribir = () => {
    if (index < texto.length) {
      h2.textContent += texto.charAt(index);
      index++;
      setTimeout(escribir, 60);
    }
  };
  
  h2.textContent = ""; // limpiar texto inicial
  escribir();
});

// 🎯 Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".proyecto-card, #sobre-mi, #contacto").forEach((el) => observer.observe(el));

// 🌙 Efecto de fondo animado (brillo suave)
const fondo = document.body;
let brillo = 0;
let direccion = 1;

setInterval(() => {
  brillo += direccion * 0.005;
  if (brillo >= 0.1 || brillo <= 0) direccion *= -1;
  fondo.style.boxShadow = `inset 0 0 100px rgba(100, 255, 218, ${brillo})`;
}, 50);

// 📱 (Opcional) menú responsive toggle
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector("header").appendChild(menuToggle);

const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
