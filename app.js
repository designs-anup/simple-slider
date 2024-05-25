const slides = document.querySelectorAll(".slide")
let counter = 0

slides.forEach(function(item, index){
    console.log(index, item);
    // item.style.left = `${index * 100}%` // left
    item.style.bottom = `${index * 100}%` // top
})

const slidesImage = function(){
    slides.forEach(function(slide){
        // slide.style.transform = `translateX(-${counter * 100}%)` // left
        slide.style.transform = `translateY(${counter * 100}%)` // top
    })
}

document.getElementById('prevBtn').addEventListener('click', function(){
    if (counter != 0) {
        counter--
        slidesImage()
    }
})

document.getElementById('nextBtn').addEventListener('click', function(){
    if (counter < slides.length - 1) {
        counter++
        slidesImage()
    }
})
