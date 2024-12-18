var awiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 158,
    grabCursor: true,
    loop:true,
    breakpoints : {
        991: {
            slidesPerView:3
        }
    },
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
        effect: 'fade' ,
        speed: 800
    }
})

setInterval(() => {
    let t = document.getElementById("contador").textContent.split(":");
    let horas = parseInt(t[0]);
    let minutos = parseInt(t[1]);
    let segundos = parseInt(t[2]);
  
    segundos--;
    if (segundos < 0) {
      minutos--;
      segundos = 59;
    }
    if (minutos < 0) {
      horas--;
      minutos = 59;
    }
    if (horas < 0) {
      horas = 0;
      minutos = 0;
      segundos = 0;
    }
  
    document.getElementById("contador").textContent = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
  }, 1000);

  window.addEventListener('scroll', function() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 100) {
      menu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      menu.style.backgroundColor = '';
    }
  });