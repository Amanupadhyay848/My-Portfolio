
function cursoranimation(){
var body = document.querySelector("body") 
var cursor = document.querySelector("#cursor")
body.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    scale:3,
    ease:"back.out",
  })
})
}
cursoranimation()

function nav(){
var nav = document.querySelector("h2")
var navhead = document.querySelectorAll(".head")
navhead.forEach(navhead => {
    navhead.addEventListener('mouseenter', function() {
        navhead.style.opacity = "70%";
        navhead.style.fontSize = "200%";
    });
  });
  navhead.forEach(navhead => {
    navhead.addEventListener('mouseleave', function() {
        navhead.style.opacity = "100%";
        navhead.style.fontSize = "100%";
    });
  });
  }
  nav()
function animationpage1(){
    gsap.from("#nav",{
      y:-60,
      opacity:0,
      duration:1,
      delay:1,
    })
    gsap.from("#body #body1 h2,h3,h5",{
      x:-60,
      opacity:0,
      duration:.4,
      delay:1.4,
      stagger:.3
    })
    gsap.from("#body1 #links",{
      opacity:0,
      duration:1,
      delay:2,
      scale:0,
    })
    gsap.from("button",{
      opacity:0,
      duration:1,
      delay:2,
      scale:0,
    })
    gsap.from("#body #body2",{
      x:60,
      opacity:0,
      duration:1,
      delay:2,
    })
  }
  animationpage1()
function aboutanimation(){
  gsap.from("#about #image",{
    x:-100,
    opacity:0.6,
    duration:2,
    scrollTrigger:{
      trigger:"#about #image",
      scroller:"body",
      start:"top 70%",
      scrub:2,
    }   
  })
  gsap.from("#about #about2 #heading,#details",{
    x:300,
    duration:2,
    delay:1,
    stagger:0.1,
    scrollTrigger:{
      trigger:"#about2 #heading,#details",
      scroller:"body",
      end:"top 70%",
      scrub:3,
      
    } 
  })
}
aboutanimation()

function skillanimation(){
  gsap.from("#skills #part1",{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
      trigger:"#skills #part1",
      scroller:"body",
      start:"top 80%",
      scrub:1
    }   
  })
  gsap.from("#skills .s1",{
    scale:0,
    duration:0.3,
    scrollTrigger:{
      trigger:"#skills .s1",
      scroller:"body",
      end:"top 90%",
      scrub:3
    }   
  })
}
skillanimation()

function footanimation(){
var t = gsap.timeline()
t.to("#projects .project",{
  transform:'translateX(-250%)',
  color: "rgb(75, 75, 255)",
  textShadow: "10px 10px 10px black",
  delay:0.5,
  scrollTrigger:{
   trigger:"#projects",
   scroller:"body",
   start:"top 0%",
   end:"top -150%",
   scrub:3,
   pin:true
 }
 })
 t.to("#thanks h1",{
  transform:'translateX(-150%)',
  color: "rgb(75, 75, 255)",
  textShadow: "10px 10px 10px black",
  opacity:0,
  scrollTrigger:{
   trigger:"#thanks",
   scroller:"body",
   start:"top 10%",
   end:"top -150%",
   scrub:5,
   pin:true
 }
 })
}
footanimation()

gsap.from("#projects",{
  opacity:0.5,
  duration:0.5,
  scrollTrigger:{
    trigger:"#projects",
    scroller:"body",
    start:"top 80%",
    scrub:2
  }   
})

function contactanimation(){
  var a = gsap.timeline()
  a.from("#contsec #part1 ",{
    opacity:0,
    scale:0,
    duration:1,
    delay:0.5,
    scrollTrigger:{
      trigger:"#contsec input",
      scroller:"body",
      end:"top 70%",
      scrub:3,
    }
  })
  a.from("#contsec #part2 ",{
    opacity:0,
    scale:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
      trigger:"#contsec input",
      scroller:"body",
      end:"top 70%",
      scrub:3,
    }
  })
  a.from("#contsec button ",{
    opacity:0,
    y:-100,
    duration:1,
    delay:0.5,
    scrollTrigger:{
      trigger:"#contsec input",
      scroller:"body",
      end:"top 70%",
      scrub:3,
    }
  })
}
contactanimation()







