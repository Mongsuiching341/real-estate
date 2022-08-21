const swiper = new Swiper(".featured-swiper",{
    slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
        breakpoints:{
            640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
        }
})
