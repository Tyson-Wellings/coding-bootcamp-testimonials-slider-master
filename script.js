var carouselState = 0;

function init(){
    console.log("document had loaded")
    prepareButtons()

}

function prepareButtons(){
    document.getElementById("left-button").addEventListener('click', () => {
        validate(0);
        
    })
    document.getElementById("right-button").addEventListener('click', () => {
        validate(1);
        
    })

}

function validate(side){
    if (side == 0 && carouselState == 1){
        console.log("beep")
        switchCarousel()
    }

    if (side == 1 && carouselState == 0){
        console.log("boop")
        switchCarousel()
    }

}

function switchCarousel(){
    const card = document.getElementsByClassName('testimonial-card')
    console.log(card)

    if (carouselState == 0){
        card[0].style.left = "100vw";
        card[1].style.left = "0";
        carouselState = 1;
        return
    }

    if (carouselState == 1){
        card[0].style.left = "0"
        card[1].style.left = "-100vw"
        carouselState = 0;
    }
}

document.addEventListener("DOMContentLoaded",init)