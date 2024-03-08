// Locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap animaion
gsap.from(".nlink", {
    stagger: .1,
    y:10,
    duration:2,
    ease: Power3,
    opacity:0
})

gsap.from(".anim2", {
    y:50,
    stagger:.2,
    opacity:0,
    ease: Expo,
    duration:2
})
// Shery.imageEffect("#imageandtext img",{
//     style:2,
//     debug:true,
// })
document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video", {
        opacity:1,
        duration:1.5,
        ease:Power4,
    })
})
document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video", {
        opacity:0,
        duration:1,
        ease:Power4,
    })
})