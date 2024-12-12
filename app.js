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

function toggleIcons() {
    const button = document.querySelector('.floating-button');
    button.classList.toggle('open');
  }
  

  
// Form Popup
function openForm() {
    document.getElementById('formPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }
  
  function closeForm() {
    document.getElementById('formPopup').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
  }
  
  // Video Popup
  function openVideo() {
    const videoUrl = 'https://www.youtube.com/embed/VIDEO_ID'; 
    document.getElementById('videoIframe').src = videoUrl;
    document.getElementById('videoPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scrolling
  }
  function closeVideo() {
    document.getElementById('videoPopup').style.display = 'none';
    document.getElementById('videoIframe').src = ''; // Stop video
    document.body.style.overflow = 'auto'; // Enable scrolling
  }
  