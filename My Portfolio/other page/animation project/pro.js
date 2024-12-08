const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoanimation() {
    var vdocon = document.querySelector("#video-cont")
    var playbtn = document.querySelector("#play")
    vdocon.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1
        })
    })
    vdocon.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    })
    vdocon.addEventListener("mousemove", function(dets) {
        gsap.to(playbtn, {
            left: dets.x - 100,
            top: dets.y +300
        })
    })
}
videoanimation()

function loadinganimation(){
gsap.from("#page1 h2",{
    scale:0.9,
    y:100,
    opacity:0,
    delay:0.4,
    duration:0.7,
    stagger:0.3
})
}
loadinganimation()

function cursormove(){
document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})
var a= document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
})
var a= document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
})
}
cursormove()
