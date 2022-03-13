document.addEventListener('DOMContentLoaded',init);

var myInterval= "";

function init() {
  
  //create shortcut vars
  
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
  const caption = document.querySelector(".caption");
  const controls = document.querySelector(".controls");
  

  //Create short cuts for thumbnail images;
  const al = document.querySelector(".al");
  const althumb = al.querySelectorAll("img");
  const ha = document.querySelector(".ha");
 const hathumb = ha.querySelectorAll("img");
  const ys = document.querySelector(".ys");
 const ysthumb = ys.querySelectorAll("img");
   
  
  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.remove("visible","abs-pos");
    slide.classList.add("hide","abs-pos");
  });

  //with JS active, hide all images
  althumb.forEach((thumbnail) =>{
    thumbnail.classList.add("hide","abs-pos")});

  hathumb.forEach((thumbnail) => { 
    thumbnail.classList.add("hide","abs-pos");
  });
  ysthumb.forEach((thumbnail) =>{
    thumbnail.classList.add("hide","abs-pos");
  });

  
  // show the first slide
  slides[0].classList.remove("hide");
  althumb[0].classList.remove("hide");
  hathumb[0].classList.remove("hide");
  ysthumb[0].classList.remove("hide");
  
//make controls work
   next_btn.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);

   //get Caption dynamically
   caption.innerHTML = frame.firstElementChild.alt;

   //Show the controls
 controls.style.display ="block";

 myInterval =setInterval(changeSlide, 2000);
}

 const plcontainer = document.querySelector(".placecontainer");
 const heading = document.querySelectorAll(".headtitle");
 plcontainer.style.border="none";
 plcontainer.classList.add("row");

//Function for Slide Change -Image carousel
function changeSlide(e) {
    // stop link from trying to reload page
    if(e){
      e.preventDefault();
      clearInterval(myInterval);
     
    }
    
    //shortcut vars for changeSlide fuctions
    const frame = document.querySelector(".frame");
   const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    const caption = document.querySelector(".caption");
    let nextUp = "";

    if(!e || e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    } else {
nextUp = showing.previousElementSibling;
    }
  
    //if(e.target.className == 'back-btn') {
     //nextUp = showing.previousElementSibling;
    
    
    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    // change caption text

    caption.innerHTML = nextUp.alt;
   
  }
  
//Short cut var for ascessing imgages in folders
const tbcontain = document.querySelector(".tbcontainer");
const mainImage = document.querySelector("#mainimage");
const hamainImage = document.querySelector("#hamainimage");
const ysmainImage = document.querySelector("#ysmainimage");
const back_btn = document.querySelector(".back-btn");
const next_btn = document.querySelector(".next-btn");

//Function to show list of thumbnail images inside the Alaska folder
function althumbShow(e){
  if(e){
  //e.preventDefault();
   clearInterval(myInterval);
  }


  //short cut var for getting images of the Alaska folder
  const al = document.querySelector(".al");
  const althumb = al.querySelectorAll("img");
  const mainImage = document.querySelector("#mainimage");
  const caption = al.querySelector(".caption");
  //const back_btn = document.querySelector(".back-btn");
// const next_btn = document.querySelector(".next-btn");   
  
   //next_btn.addEventListener("click",althumbShow);
   //back_btn.addEventListener("click", althumbShow);

   //caption.innerHTML = `${mainImage.alt}`;

  
  //Removing the hide and position property from each image to display the al thumbnail  image of the Alaska folder
  althumb.forEach((thumbnail) =>{
  thumbnail.classList.remove("hide","abs-pos");
 
});
althumb.forEach(img => img.addEventListener("click",imgClick));

}  

//Function to show list of thumbnail images inside the Hawaii folder

function hathumbShow(e){
  if(e){
  //e.preventDefault();
   clearInterval(myInterval);
  }
  const ha = document.querySelector(".ha");
  const hathumb = ha.querySelectorAll("img");
  hathumb.forEach((thumbnail) =>{
  thumbnail.classList.remove("hide","abs-pos");
 
});
hathumb.forEach(img => img.addEventListener("click",imgClick));

}  
//Function to show list of thumbnail images inside the yellostone folder

function ysthumbShow(e){
  if(e){
  //e.preventDefault();
   clearInterval(myInterval);
  }
  const ys = document.querySelector(".ys");
  const ysthumb = ys.querySelectorAll("img");
  ysthumb.forEach((thumbnail) =>{
  thumbnail.classList.remove("hide","abs-pos");
 
});
ysthumb.forEach(img => img.addEventListener("click",imgClick));

}  

//Function to showcase thumbnail images at bigger sizes

function imgClick(e) {
  mainImage.src = e.target.src;
  hamainImage.src = e.target.src;
  ysmainImage.src = e.target.src;

}
