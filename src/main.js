//Evento Modal

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const modal = new bootstrap.Modal(document.getElementById('gallery-modal'));

    let currentImageIndex = 0;

    galleryItems.forEach(function (item, index) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            currentImageIndex = index;

            const src = e.target.getAttribute("src");
            const title = e.target.getAttribute("data-title");
            const description = e.target.getAttribute("data-description");

            const modalImg = document.querySelector(".modal-img");
            modalImg.src = src;

            const modalTitle = document.querySelector(".modal-title");
            modalTitle.textContent = title;

            const modalCaptionTitle = document.querySelector(".modal-caption-title");
            modalCaptionTitle.textContent = title;

            const modalCaptionDescription = document.querySelector(".modal-caption-description");
            modalCaptionDescription.textContent = description;

            modal.show();
        });
    });

    const modalControlNext = document.querySelector(".modal-control-next");
    const modalControlPrev = document.querySelector(".modal-control-prev");

    modalControlNext.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        updateModalContent(currentImageIndex);
    });

    modalControlPrev.addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalContent(currentImageIndex);
    });

    function updateModalContent(index) {
        const src = galleryItems[index].getAttribute("src");
        const title = galleryItems[index].getAttribute("data-title");
        const description = galleryItems[index].getAttribute("data-description");

        const modalImg = document.querySelector(".modal-img");
        modalImg.src = src;

        const modalTitle = document.querySelector(".modal-title");
        modalTitle.textContent = title;

        const modalCaptionTitle = document.querySelector(".modal-caption-title");
        modalCaptionTitle.textContent = title;

        const modalCaptionDescription = document.querySelector(".modal-caption-description");
        modalCaptionDescription.textContent = description;
    }
});

// Fim Evento Modal



// Script Botão Voltar ao Topo
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const btnScrollToTop = document.getElementById("btnScrollToTop");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollToTop.style.display = "block";
    } else {
      btnScrollToTop.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; /* Para navegadores Safari */
    document.documentElement.scrollTop = 0; /* Para outros navegadores */
  }
  
/* Script do menu suspenso */

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
});


/* Fim do script suspenso */

/*
document.addEventListener("click", function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

*/