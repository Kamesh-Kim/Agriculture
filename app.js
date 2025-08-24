let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let startX = 0;
let endX = 0;

const slider = document.querySelector(".slideshow-container");

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  let diff = startX - endX;
  if (Math.abs(diff) > 50) { // swipe threshold
    if (diff > 0) {
      plusSlides(1);  // swipe left → next slide
    } else {
      plusSlides(-1); // swipe right → prev slide
    }
  }
}




// ScrollUpButton

let scrollBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




// HeaderSection

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header-flex");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 600) { // change 100 to your trigger point
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  });
});




// forthsection

// let swiper = new Swiper(".mySwiper", {
//   // slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-next",
//     prevEl: ".swiper-prev",
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     draggable: true,
//   },
// });

// Hover

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".swiper-slide");

  slides.forEach(slide => {
    let img = slide.querySelector(".slide-img");
    let hoverDiv = slide.querySelector(".hover-thing");

    img.addEventListener("mouseenter", () => {
      hoverDiv.classList.add("show");
      slide.classList.add("zoomed");
    });

    img.addEventListener("mouseleave", () => {
      hoverDiv.classList.remove("show");
      slide.classList.remove("zoomed");
    });
  });
});





let reviewSwiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

    breakpoints: {
    0: {            // from 0px up
      slidesPerView: 1,
      spaceBetween: 10,
    },
    990: {          // from 768px up (tablet & desktop)
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});





// search

(function($){
  var search_button = $('.fa-search'),
      close_button  = $('.close'),
      input = $('.input');
  search_button.on('click',function(){
    $(this).parent().addClass('open');
    close_button.fadeIn(500);
    input.fadeIn(500);
  });
  
  close_button.on('click',function(){
    search_button.parent().removeClass('open');
    close_button.fadeOut(500);
    input.fadeOut(500);
  });
})(jQuery);




// MenuBar
(function () {
	$('.hamburger-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.mobile-menu-overlay').toggleClass('visible');
	})
	$('.mobile-menu-overlay > ul > li > a').on('click', function () {
		$('.hamburger-menu').removeClass('animate');
		$('.mobile-menu-overlay').removeClass('visible');
	})
})();