const image = document.querySelectorAll("#headerAnglebtn");

for(let i=0 ;i<2 ;i++){
    image[i].addEventListener("mouseover",function(){
        document.querySelectorAll("#angle-down")[i].classList.add("fa-rotate-180");
    });
    image[i].addEventListener("mouseout",function(){
        document.querySelectorAll("#angle-down")[i].classList.remove("fa-rotate-180");
    });
}

const slides =document.querySelectorAll(".slideImg");
let count=0;
slides.forEach((slide, index)=>{
     slide.style.left=`${ index * 100 }%`
})

let click =false;

const goNext =()=>{
    count++;
    click=true;
    imageSlider();
}
const goPrev =()=>{
    count--;
    click=true;
    imageSlider();
}
const imageSlider= ()=>{
    if(count <0){
        count=0;
    }
    if(count >=4){
        count=0;
    }
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${count * 100}% )`
        }
    )
}
automatic();
function automatic(){
    setInterval( function(){
        count++;
        if(!click){
            imageSlider();
        }
        else{
            setTimeout( function(){
                click=false;
               imageSlider();
            },5000);
        }   
    },3500);
}


const leftBTN =document.querySelector("#prevBTN");
const rightBTN =document.querySelector("#nextBTN");
const cardItem =document.querySelector(".move1");

const leftBTNhome=document.querySelector("#prevBTNhome");
const rightBTNhome=document.querySelector("#nextBTNhome");
const cardItemhome =document.querySelector(".move2");



// elctronics
const goNextPage =()=>{
    cardItem.style.left=`-70%`;
    setTimeout(function(){
        leftBTN.style.display=`block`;
        rightBTN.style.display=`none`;
    },600);
}
const goPrevPage =()=>{
    cardItem.style.left=`0%`;
    setTimeout(function(){
        leftBTN.style.display=`none`;
        rightBTN.style.display=`block`;
    },600);
}
// home and kichen
const goNextPageHome =()=>{
    cardItemhome.style.left=`-70%`;
    setTimeout(function(){
        leftBTNhome.style.display=`block`;
        rightBTNhome.style.display=`none`;
    },600);
}
const goPrevPageHome =()=>{
    cardItemhome.style.left=`0%`;
    setTimeout(function(){
        leftBTNhome.style.display=`none`;
        rightBTNhome.style.display=`block`;
    },600);
}

// view button
const goViewPage =()=>{
    goNextPage();
    setTimeout(function(){
        goPrevPage();
    },800);
}
const goViewHome =()=>{
    goNextPageHome();
    setTimeout(function(){
        goPrevPageHome();
    },800);
}


