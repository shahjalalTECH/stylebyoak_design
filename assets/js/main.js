$('.current-issue-parent').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Subscribe

var button = document.querySelector('.button');
var field = document.querySelector('.field');
var icon = document.querySelector('.header i');
var text = document.querySelector('.header p');

button.addEventListener('click', function () {

  if (field.value === '') {
    field.placeholder = 'You must enter your email';
    // alert('You must enter an email');
  } else {
    icon.classList.toggle('animation');
    text.classList.toggle('show');
  }
});

//Scroll

window.addEventListener("scroll", function() {
  let topLogoParent = document.querySelector(".top-logo-parent");
  topLogoParent.style.width = "100px";
  topLogoParent.style.height = "100px";
});