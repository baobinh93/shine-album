console.log("haha");

function renderVideo() {
  const galleryCon = document.getElementById("galleryContainer");
  let contentHTMLGalleryContainer = "";
  for (let i = 1; i <= 43; i++) {
    //   let content = `

    //   <div class="swiper-slide gallery__item col-12 col-md-6 col-lg-3 ">
    //         <video

    //         type="video/mp4"

    //         preload="true"
    //         alt="shineVideo (${i})"
    //         src="./img/video/shineVideo (${i}).mp4"

    //         />
    //       </div>

    // `;
    let content = `
  <div class="swiper-slide">
  <video

            type="video/mp4"

          preload="true"
             alt="shineVideo (${i})"
           src="./img/video/shineVideo (${i}).mp4"

            />
  
  </div>
  `;
    contentHTMLGalleryContainer += content;
  }
  //console.log(contentHTMLGalleryContainer);
  galleryCon.innerHTML = contentHTMLGalleryContainer;
}
renderVideo();

const videos = document.querySelectorAll(".swiper-slide video");
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
  modal.onclick = (e) => {
    e.target == e.currentTarget && modal.remove();
  };
  modal.append(newVideo, closeBtn);
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
