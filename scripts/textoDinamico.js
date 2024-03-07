document.addEventListener('DOMContentLoaded', (event) => {
    const titleElement = document.querySelector('.top-section .title'); // Selecciona el elemento h1
    const textOptions = ["Inteligencia Artificial", "Bases de Datos", "Analítica de Datos" , "Tecnología"]; // Define las opciones de texto
    let currentIndex = 0; // Inicia con el primer ítem de texto

    setInterval(() => {
        currentIndex = (currentIndex + 1) % textOptions.length; // Alterna entre 0 y 1
        titleElement.textContent = textOptions[currentIndex]; // Actualiza el texto del elemento h1
    }, 2000); // Cambia el texto cada 2000 milisegundos (2 segundos)
});
