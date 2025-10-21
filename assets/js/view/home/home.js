import get_template from "../../components/get_template.js";

export default {
  data: function () {
    return {
      title: "home",
    };
  },

  methods: {},

  async mounted() {

    
    AOS.init({
      duration: 1000,
    });
   

    var swiper = new Swiper(".mySwiper", {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".mySwiperservico", {
      spaceBetween: 30,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // quando a largura for >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // quando a largura for >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // quando a largura for >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // quando a largura for >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  },
  template: await get_template("./assets/js/view/home/home"),
};
