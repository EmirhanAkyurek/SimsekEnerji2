function initMap() {
  const uluru = { lat: 41.3515984177257, lng: 36.23698252541937 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
window.initMap = initMap;

//header
class AdminNavbar extends HTMLElement{
  connectedCallback(){
      this.innerHTML='<nav class="navbar navbar-expand-md navbar-dark ust">\
    <div class="container">\
        <a href="index.html" class="navbar-brand">\
            <img src="img/logo.png" alt="" class="logo">\
        </a>\
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobile">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div id="mobile" class="collapse navbar-collapse">\
            <ul class="navbar-nav me-auto ">\
                <li class="nav-item ">\
                    <a href="index.html" class="nav-link active">AnaSayfa</a>\
                </li>\
                <li class="nav-item">\
                    <a href="#" class="nav-link active">Referanslarimiz</a>\
                </li>\
                <li class="nav-item">\
                    <a href="contact.html" class="nav-link active">Iletisim</a>\
                </li>\
            </ul>\
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="navbar-toggler-icon"></span>\
              </button>\
              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">\
                <ul class="navbar-nav">\
                  <li class="nav-item dropdown">\
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">\
                      Kategoriler\
                    </a>\
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">\
                      <li><a class="dropdown-item" href="solar-paket.html">Solar Paketler</a></li>\
                      <li><a class="dropdown-item" href="#">Tarimsal Sulama</a></li>\
                      <li><a class="dropdown-item " href="paneller.html">Gunes Paneli</a></li>\
                      <li><a class="dropdown-item " href="inventer.html">Inverter</a></li>\
                      <li><a class="dropdown-item" href="kontrol.html">Sarj Kontrol Cihazi</a></li>\
                      <li><a class="dropdown-item " href="aku.html">Solar Aku</a></li>\
                      <li><a class="dropdown-item" href="konnektor.html">Konnektor</a></li>\
                      <li><a class="dropdown-item" href="solar.html">Solar Lamba</a></li>\
                    </ul>\
                  </li>\
                </ul>\
              </div>\
              <div class="navbar-end">\
              <div class="row">\
              <div class="col beyaz">Dolar:</div>\
              <div class="col beyaz px-0" id="dolar"></div>\
              </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </nav>\
        </div>\
    </div>\
</nav>'
  }
}
customElements.define("admin-navbar",AdminNavbar)
//header

//footer
class MyFooter extends HTMLElement{
  connectedCallback(){
      this.innerHTML='<footer class="py-4 bg-dark">\
      <div class="b-example-divider"></div>\
      <div class="container">\
      <footer class="row border-bottom">\
          <div class="col-md-4">\
                  <ul class="nav justify-content-center  pb-1 mb-1">\
                      <li class="nav-item"><a href="index.html" class="nav-link px-2  beyaz">AnaSayfa</a></li>\
                      <li class="nav-item"><a href="#" class="nav-link px-2  beyaz">Referanslarimiz</a></li>\
                      <li class="nav-item"><a href="contact.html" class="nav-link px-2  beyaz">Iletisim</a></li>\
                  </ul>\
          </div>\
          <div class="col-md-4 ">\
              <div class="nav justify-content-center  pb-1 mb-1">\
                  <h4 class="text-white">+90 544 943 2933</h4>\
              </div>\
          </div>\
          <div class="col-md-4 text-end ">\
              <a href="#"><i class="fa-brands fa-youtube"></i></a>\
              <a href="https://www.facebook.com/SimsekEnerji"target="_blank"><i class="fa-brands fa-facebook"></i></a>\
              <a href="https://www.instagram.com/simsek_enerji/"target="_blank"><i class="fa-brands fa-instagram"></i></a>\
          </div>\
      </footer>\
      </div>\
      <p class="text-center text-white">&copy; SimsekEnerji</p>\
  </footer>'
  }
}
customElements.define("admin-footer",MyFooter)
//footer

// //silinecek
// $(document).ready(function(){
//   $("#flip").click(function(){
//     $(".paneller").slideToggle("slow");
//   });
// });
// //silinecek
function getUsd(){

}



  $(document).ready(function() {
    fetch('http://hasanadiguzel.com.tr/api/kurgetir')
    .then(response => response.json())
    .then(data => {
        console.log(data.TCMB_AnlikKurBilgileri[0].ForexSelling)
    
        document.getElementById("dolar").innerHTML = Number(data.TCMB_AnlikKurBilgileri[0].ForexSelling.toFixed(2));



        $('.price').each(function(index, element)  {
          element.innerText=Math.round(element.innerText*data.TCMB_AnlikKurBilgileri[0].ForexSelling);
        });


        // $('.price').forEach(element => {
        //   element.innerText=element.innerText.replace('TL','').replace('.','')*data.TCMB_AnlikKurBilgileri[0].BanknoteBuying;
        // });
        // $('.price')[0].innerText=$('.price')[0].innerText.replace('TL','').replace('.','')*5
    }
    );
  });
