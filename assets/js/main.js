document.addEventListener("DOMContentLoaded", (event) => {
  // typing prefix
  var headerst = document.getElementsByClassName("typeH");
  for (var i = 0; i < headerst.length; i++) {
    headerst[i].innerHTML = "root@shalitha :~# ";
  }

  // Insert social media - FIXED VERSION
  let social_list = `
        <ul class="list-none flex flex-row justify-center items-center m-0 p-0 gap-3">
          <li>
            <a href="https://www.facebook.com/Shalitha.Madhuwantha.Gamage?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" class="mx-2.5 text-lg text-custom-heading hover:text-custom-text transition-colors duration-300">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/shalithamadhuwantha" target="_blank" rel="noopener noreferrer" class="mx-2.5 text-lg text-custom-heading hover:text-custom-text transition-colors duration-300">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@WeberNetCo" target="_blank" rel="noopener noreferrer" class="mx-2.5 text-lg text-custom-heading hover:text-custom-text transition-colors duration-300">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shalitha-madhuwantha/" target="_blank" rel="noopener noreferrer" class="mx-2.5 text-lg text-custom-heading hover:text-custom-text transition-colors duration-300">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/shalithaMgamage?t=b9-rBI8cZJJJ9NEmSiOc-w&s=09" target="_blank" rel="noopener noreferrer" class="mx-2.5 text-lg text-custom-heading hover:text-custom-text transition-colors duration-300">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+940740082154" target="_blank" rel="noopener noreferrer" class="mx-2.5 text-lg text-custom-heading hover:text-custom-text transition-colors duration-300">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>`;

  var social_listJS = document.getElementsByClassName("social_listJS");
  for (var i = 0; i < social_listJS.length; i++) {
    social_listJS[i].innerHTML = social_list;
  }
});

function hide(id) {
  document.getElementById(id).style.visibility = "hidden";
}
function unhide(id) {
  document.getElementById(id).style.visibility = "visible";
}
