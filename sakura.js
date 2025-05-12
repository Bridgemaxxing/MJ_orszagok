document.addEventListener('DOMContentLoaded', function () {
  const NUM_PETALS = 20;

  function createPetal() {
      const petal = document.createElement('img');
      petal.src = 'bg/szirom.png'; // ← Ez legyen a létező útvonal
      petal.className = 'sakura-petal';

      // Random kezdőpozíció és méret
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.width = (10 + Math.random() * 20) + 'px';
      petal.style.opacity = Math.random();

      // Változatos animáció sebesség
      petal.style.animationDuration = (5 + Math.random() * 5) + 's';

      document.body.appendChild(petal);

      // Automatikus eltávolítás
      setTimeout(() => {
          petal.remove();
      }, 10000);
  }

  // Ismételt szirmok létrehozása
  setInterval(createPetal, 300);
});
