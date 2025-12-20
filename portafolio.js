alert("JS cargando");
let menuVisible = false;
//funcion que oculta  o muestra menu
function mostrarOcultarMenu() {
  document.getElementById("nav").classList.toggle("responsive");
}

function seleccionar() {
  //oculto el menu una vez que se selecciono la opcion
  document.getElementById("nav").classList.remove("responsive");
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidade = document.getElementsByClassName("progreso");
    habilidade[0].classList.add("SQL");
    habilidade[1].classList.add("php");
    habilidade[2].classList.add("javascript");
    habilidade[3].classList.add("htmlcss");
    habilidade[4].classList.add("JAVA");
    habilidade[5].classList.add("comunicacion");
    /*   habilidade[6].classList.add("trabajoenequipo");
    habilidade[7].classList.add("creatividad");
    habilidade[8].classList.add("dedicacion");
    habilidade[9].classList.add("ProyectoManagment");
  */
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
//let audioSource = new MediaElementAudioSource();
//audioSource.src = "dry-out-full-song-geometry-dash.mp3";
