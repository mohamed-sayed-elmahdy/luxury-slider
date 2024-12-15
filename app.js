let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
// let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    // clearInterval(refreshInterval);
    // refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


// Corner Video
const videoContainer = document.querySelector('.video-container');
const video = document.getElementById('video');
const closeButton = document.querySelector('.close-button');
const minusbutton = document.querySelector('.minus-button');

videoContainer.addEventListener('click', () => {
  if (videoContainer.classList.contains('active')) {
    videoContainer.classList.remove('active');
    video.muted = true;
    video.pause();
    video.style.width = '130px';
    video.style.height = '180px';
  } else {
    videoContainer.classList.add('active');
    video.muted = false;
    video.play();
  }
});

closeButton.addEventListener('click', (e) => {
  e.stopPropagation();
  videoContainer.classList.remove('active');
  videoContainer.classList.add('closed');
  video.muted = true;
  video.pause();
});
minusbutton.addEventListener('click', (e) => {
    e.stopPropagation();
    videoContainer.classList.remove('active');
    video.muted = true;
    video.pause();
  });


// Corner Plus
  function toggleIcons(event) {
    event.preventDefault();
    const button = document.querySelector('.floating-button');
    button.classList.toggle('open');
  }
  
  function handleLinkClick(event) {
    event.stopPropagation();
    console.log('Link clicked:', event.currentTarget.href);
  }
  

// Form Popup
const popup = document.getElementById("popup");
function openForm() {
  popup.classList.add("show");
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }
  
  function closeForm() {
    popup.classList.remove("show");
    document.body.style.overflow = 'auto'; // Enable scrolling
  }
  


  
  // Video Popup
  function openVideo() {
    const videoUrl = 'https://www.youtube.com/embed/VIDEO_ID'; 
    document.getElementById('videoIframe').src = videoUrl;
    document.getElementById('videoPopup').classList.add("show");
    document.body.style.overflow = 'hidden'; // Disable scrolling
    console.log("jjuhoi")
  }
  function closeVideo() {
    document.getElementById('videoPopup').classList.remove("show");
    document.getElementById('videoIframe').src = ''; // Stop video
    document.body.style.overflow = 'auto'; // Enable scrolling
  }
  

  const text = document.querySelector('.slider .contentContainer .textAndFormButton .playIcon h3');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('.slider .contentContainer .textAndFormButton .playIcon h3 span');
for(let i = 0; i < element.length; i++){
    element[i].style.transform = "rotate("+i*20+"deg)";
}

