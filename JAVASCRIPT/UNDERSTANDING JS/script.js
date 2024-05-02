<<<<<<< HEAD
document.write(Date());

function setNewImage() {
    document.getElementById("img1").src="images/mouse-over.png";
}

function setOldImage() {
    document.getElementById("img1").src="images/mouse-out.png";
}

function mouseOver() {
    document.getElementById('demo').style.color = "orange";
}

function mouseOut() {
    document.getElementById('demo').style.color="black";
}

function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
}

function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}


let cnv = document.getElementById ("mycanvas");
let ctx = cnv.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect (25, 25, 300, 200);
ctx.strokeStyle = "blue";
ctx.lineWidth = "10";
ctx.strokeRect (360, 120, 200, 240);
=======
document.write(Date());

function setNewImage() {
    document.getElementById("img1").src="images/mouse-over.png";
}

function setOldImage() {
    document.getElementById("img1").src="images/mouse-out.png";
}

function mouseOver() {
    document.getElementById('demo').style.color = "orange";
}

function mouseOut() {
    document.getElementById('demo').style.color="black";
}

function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
}

function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "200px";
}


let cnv = document.getElementById ("mycanvas");
let ctx = cnv.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect (25, 25, 300, 200);
ctx.strokeStyle = "blue";
ctx.lineWidth = "10";
ctx.strokeRect (360, 120, 200, 240);
>>>>>>> 39b52194e9e81a7418ec49c8794e1e0a3570f525
ctx.clearRect (40, 40, 220, 120);