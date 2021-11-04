const slides = document.querySelectorAll('.slide');

for (slide of slides) {
    slide.addEventListener ("click", (slide) =>  {
        clearClass()
        console.log(slide)
        slide.target.classList.add("active")
    }
    )
}
function clearClass() {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
       })
}