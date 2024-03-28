// console.log("haha");

// let contentIMG = "";

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   contentIMG += ` <div class="col-12 col-md-6 col-lg-3">
//   <img
//     src="./img/${i}.jpg"
//     data-target="#indicators"
//     data-slide-to="0"
//     alt=""
//   />
// </div>`;
// }
// console.log(contentIMG);

// galleryCon.innerHTML = contentIMG;
// reader.onerror = function (event) {
//   console.log("File could not be read: " + event.target.error.code);
// };

//reader.readAsDataURL("/img/asd.jpg");
function renderIMG() {
  const galleryCon = document.getElementById("galleryContainer");
  let contentHTMLGalleryContainer = "";
  for (let i = 1; i <= 202; i++) {
    let content = ` <div class="gallery__item col-12 col-md-6 col-lg-3">
        <img
        loading="lazy"
        src="./img/shine (${i}).jpg"
          data-target="#indicators"
          data-slide-to="0"
          alt=""
        />
      </div>`;
    contentHTMLGalleryContainer += content;
  }
  //console.log(contentHTMLGalleryContainer);
  galleryCon.innerHTML = contentHTMLGalleryContainer;
}
renderIMG();

const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    //run modal function
    imgModal(imgSrc);
  });
});
//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  //close function
  closeBtn.onclick = () => {
    modal.remove();
    console.log("close bntn");
  };
  modal.append(newImage, closeBtn);
};
