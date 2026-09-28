  /* =========================================================
       CARROSSEL:
       - O intervalo controla a troca automática (em milissegundos).
       - Para desativar a troca automática, remova o setInterval no final.
       - Os botões e os indicadores continuam funcionando manualmente.
       ========================================================= */
    const slides = Array.from(document.querySelectorAll(".slide"));
    const dots = Array.from(document.querySelectorAll(".dot"));
    const previousButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentSlide = 0;
    let carouselTimer;

    function showSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === currentSlide));
      dots.forEach((dot, i) => dot.setAttribute("aria-current", i === currentSlide ? "true" : "false"));
    }

    function restartTimer() {
      clearInterval(carouselTimer);
      carouselTimer = setInterval(() => showSlide(currentSlide + 1), 4000); // 6000 = 6 segundos
    }

    previousButton.addEventListener("click", () => { showSlide(currentSlide - 1); restartTimer(); });
    nextButton.addEventListener("click", () => { showSlide(currentSlide + 1); restartTimer(); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); restartTimer(); }));

    // Atualiza automaticamente o ano no rodapé.
    document.getElementById("year").textContent = new Date().getFullYear();
    restartTimer();

    const musica = document.getElementById('musica');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    botao.textContent = '❚❚'; // Muda para pausar
  } else {
    musica.pause();
    botao.textContent = '▶'; // Muda para tocar
  }
});

/* Se a música acabar, o botão volta ao ícone de Play */
musica.addEventListener('ended', () => {
  botao.textContent = '▶';
});