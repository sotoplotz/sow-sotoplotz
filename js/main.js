// =========================
// Resaltado de sección activa en navegación
// =========================

// Seleccionamos todas las secciones principales
const sections = document.querySelectorAll("main section");

// Seleccionamos todos los enlaces del menú
const navLinks = document.querySelectorAll("nav ul li a");

// Función que detecta la sección visible
function setActiveLink() {
	let currentSectionId = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (window.scrollY >= sectionTop - sectionHeight / 3) {
			currentSectionId = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");

		if (link.getAttribute("href") === `#${currentSectionId}`) {
			link.classList.add("active");
		}
	});
}

// Escuchamos el evento scroll
window.addEventListener("scroll", setActiveLink);
