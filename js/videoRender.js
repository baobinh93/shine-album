console.log("haha");

function renderVideo() {
  const galleryCon = document.getElementById("galleryContainer");
  let contentHTMLGalleryContainer = "";
  for (let i = 1; i <= 43; i++) {
    let content = ` <div class="gallery__item col-12 col-md-6 col-lg-3 ">
          <video muted 
          loading="lazy"
          src="./img/video/shineVideo (${i}).mp4"
           
          />
        </div>`;
    contentHTMLGalleryContainer += content;
  }
  //console.log(contentHTMLGalleryContainer);
  galleryCon.innerHTML = contentHTMLGalleryContainer;
}
renderVideo();

const videos = document.querySelectorAll(".gallery__item video");
let videoSrc;
// get images src onclick
videos.forEach((video) => {
  video.addEventListener("click", (e) => {
    videoSrc = e.target.src;
    //run modal function
    videoModal(videoSrc);
  });
});
//creating the modal
let videoModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newVideo = document.createElement("video");
  newVideo.setAttribute("src", src);
  newVideo.setAttribute("autoplay", "");
  newVideo.setAttribute("controls", "");
  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  //close function
  closeBtn.onclick = () => {
    modal.remove();
    console.log("close bntn");
  };
  modal.append(newVideo, closeBtn);
};
