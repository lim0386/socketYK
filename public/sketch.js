var socket = io.connect('http://localhost:3000');
socket.on('imageTrans', function(img2) {
  var img = new Image();
  img.src = img2;
  // console.log(img2);
  canvas.getContext('2d').drawImage(img, 0, 400, 400, 400);

  }
);
// let video;
function setup() {
  createCanvas(400, 800);
  
}
function draw(){

}