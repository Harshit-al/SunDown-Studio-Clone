const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation (){
    let elemC=document.querySelector("#elem-container")
    let I=document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter",()=>{
        I.style.display="block"
    })

    elemC.addEventListener("mouseleave",()=>{
        I.style.display="none"
    })

    let elemS=document.querySelectorAll(".elem")
    elemS.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            let image=e.getAttribute("data-image")
            I.style.backgroundImage=`url(${image})`
        })
    })
}
function swipperAnimation(){
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 100,
    });
}
function loaderanimation(){
    let loader=document.querySelector("#loader")
    setTimeout(()=>{
        loader.style.top="-100%"
    },4200)
}

page4Animation()
swipperAnimation()
loaderanimation()