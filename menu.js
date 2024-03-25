let btnMenu = document.getElementById ('btn_menu') /*acionar menu*/
let menu = document.getElementById ('menu-mobile') /*fechar menu*/
let overlay = document.getElementById ('overlay-mobile')

btnMenu.addEventListener ('click', ()=> {
    menu.classList.add ('abrir-menu')
}) /*avisar quando clicar*/ /*seta de function que indica o que vai acontecer após clicar no menu / no add criar uma classe especifica que não exista no css*/

menu.addEventListener('click', ()=> {
    menu.classList.remove ('abrir-menu') /*remover a classe abrir-menu do menu mobile (remove)*/
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove ('abrir-menu') 
})

// Mostrar ou ocultar o botão de volta ao topo com base no deslocamento da página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// Função para rolar suavemente de volta ao topo da página
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores da web
  document.documentElement.scrollTop = 0; // Para navegadores móveis
}