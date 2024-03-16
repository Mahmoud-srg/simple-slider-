 let lightBoxContainer = document.querySelector(".lightBoxContainer")
let lightBoxItem = document.querySelector(".lightBoxItem")
let imgList = Array.from(document.querySelectorAll(".item img"))

let currentImageIndex = 0;
for(let i =0; i < imgList.length; i++) {
    imgList[i].addEventListener("click",function (e) {
        let imgSrc = e.target.getAttribute("src");
        currentImageIndex = imgList.indexOf(e.target)
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace("d-none","d-flex")
    })
}

function nextSlide() {
    currentImageIndex++
    if (currentImageIndex == imgList.length) {
        currentImageIndex = 0
    }
    let nextImg = imgList[currentImageIndex].getAttribute("src")
    lightBoxItem.style.backgroundImage = `url(${nextImg})`;
}
function previosSlide() {
    currentImageIndex--
    if (currentImageIndex < 0 ) {
        currentImageIndex = imgList.length-1
    }
    let previosImg = imgList[currentImageIndex].getAttribute("src")
    lightBoxItem.style.backgroundImage = `url(${previosImg})`;
}

function closeSlider() {
    lightBoxContainer.classList.replace("d-flex","d-none")
    
}
document.getElementById("next").addEventListener("click",function() {
    nextSlide()
})
document.getElementById("previos").addEventListener("click",function() {
    previosSlide()
})
document.getElementById("close").addEventListener("click",function() {
    closeSlider()
})

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        lightBoxContainer.classList.replace("d-flex","d-none")
    }
})