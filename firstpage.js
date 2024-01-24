const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function mouseMoveScoller() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}


function firstanime(){
    let tl = gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease:Expo.easeInOut

    })
    .to('.ballon',{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-2,
        Stagger:.2
    })
    .from('#id' ,{
        y:-10,
        opacity: 0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut

    })
}
mouseMoveScoller();
firstanime();