gsap.registerPlugin(ScrollTrigger);
//hero part
const tlHero = gsap.timeline({defaults:{duration:.7, ease:"power2.out"}});

tlHero.fromTo('.wakka-text', {y:'100%'},{y:0,stagger: .3})
tlHero.fromTo('.lalu-text', {y:'100%'},{y:0}, "<20%")
.fromTo('.hero-btn',{y:30, opacity:0}, {y:0,opacity:1},"<40%")
.fromTo('.circle-img',{y:30, opacity:0}, {y:0,opacity:1,stagger:.1},"<20%")
.fromTo('.people-text',{ opacity:0}, {opacity:1}, "<20%")

// hero part end


// form section animation

const tlFrm = gsap.timeline({
    scrollTrigger: {
        trigger: ".form-section",
        start: "-50%",
        scrub:.5,
      
        ease: "power2",
        duration:1.4
      }
});

 tlFrm.fromTo('.form-image',{scale:1.4}, {scale:1})

 const tlPr = gsap.timeline({
    scrollTrigger: {
        trigger: ".form-section",
        start: "-40%",
         end:'100%',
      
        ease: "power2",
        duration:1.5
      }
 })

 tlPr.fromTo('.property-form', {y:35,opacity:0},{y:0,opacity:1})

//  form section end

// wow image section
const tlWow =  gsap.timeline({
    scrollTrigger: {
        trigger: ".wow-images",
        start: "-80%",
         end:'40%',
       scrub:true,
        ease: "power2.out",
        duration:.8
      }
})

tlWow.fromTo('#middle-img',{scale:1}, {scale:.6,x:80,y:80 ,duration:.5})
.fromTo('#lst-img',{scale:1},{scale:.5, x:80,y:80},"<")
.fromTo('#fst-img',{scale:1},{scale:.5, },"<")

const tlK = gsap.timeline({
  scrollTrigger: {
    trigger: ".wow-images",
    start: "-50%",
    end:"100%",
    ease: "power2.out",
    duration:.8
  }
})
tlK.fromTo('.know-me',{opacity:0},{opacity:1,duration:1},"<30%")
.fromTo('.fup',{y:30,opacity:0},{opacity:1,y:0},"<10%")
.fromTo('.know-btn',{y:30,opacity:0}, {y:0,opacity:1},"<20%")
.fromTo('.counter',{y:30, opacity:0},{y:0,opacity:1},"<10%")

// slider

const tlSlide = gsap.timeline({
    scrollTrigger: {
        trigger: ".featured-property",
        start: "-65%",
         end:'100%',
      
        ease: "power2.out",
        duration:1
      }
})

tlSlide.fromTo('.swiper-slide',{y:40,opacity:0},{y:0,opacity:1,stagger:.2})

// slider end

// 
const tlWh = gsap.timeline({
    scrollTrigger: {
        trigger: ".world-map",
        start: "-50%",
         end:'100%',
     
        ease: "power2.out",
        duration:1
      }
})

tlWh.fromTo('.when',{y:"-100%" , opacity:0},{y:0,opacity:1})
.fromTo('.you',{y:"100%"},{y:0},"<")
.fromTo('.kalo',{opacity:0},{opacity:1},"<20%")


// newsletter
const tlN = gsap.timeline({
    scrollTrigger: {
        trigger: ".world-map",
        start: "50%",
         end:'100%',

        ease: "power2.out",
        duration:1
      }
})

tlN.fromTo('.subs',{y:'100%'},{y:0,stagger:0.1})

// footer
const tlF = gsap.timeline({
    scrollTrigger: {
        trigger: ".newsletter",
        start: "20%",
         end:'100%',
 
        ease: "power2.out",
        duration:1
      }
})
tlF.fromTo('.footer-items',{y:40,opacity:0},{y:0,opacity:1})