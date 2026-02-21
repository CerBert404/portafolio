document.addEventListener(
  "DOMContentLoaded",
  () => {
    const hero = document.getElementById("hero");

    const images = ["img/traj1.jpg", "img/traj2.jpg", "img/traj3.jpg"];

    let index = 0;

    //imagen inicial
    hero.style.backgroundImage = `url(${images[index]})`;

    setInterval(() => {
      index = (index + 1) % images.length;
      hero.style.backgroundImage = `url(${images[index]})`;
      hero.style.opacity = 1;
    }, 500);
  },
  4000,
);

/*card */
/*function filtrar(categoria) {
  const cards = document.querySelectorAll(`.card`);

  cards.forEach((card) => {
    if (card.classList.contains(categoria)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}*/

function mostrar(id) {
  const secciones = document.querySelectorAll(`.categoria`);
  secciones.forEach((sec) => {
    sec.classList.remove(`activa`);
  });

  document.getElementById(id).classList.add(`activa`);
}
