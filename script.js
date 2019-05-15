const elem = document.querySelector('.m-p-g')

document.addEventListener('DOMContentLoaded', function() {
  const gallery = new MaterialPhotoGallery(elem)
});

const speedPainting = document.getElementById("speed-painting")
const speedPaintingVideo = "https://www.youtube.com/embed/zvDf-i0NoyM?&autoplay=1"
var wasOpened = false;
onePageScroll(".main", {
  beforeMove: function(index) {
    if (index == 4 && !wasOpened){
      speedPainting.src = speedPaintingVideo
      wasOpened = true
    }
  }
});