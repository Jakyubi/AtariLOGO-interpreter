var c = document.getElementById("myCanvas");


c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
var img = document.getElementById("rzut1");
//ctx.drawImage(img, 900, 700);


onload:
    img.onload = function() {
        ctx.drawImage(img, (c.width / 2) - (img.offsetWidth / 2), (c.height / 2) - (img.offsetHeight / 2));
    }

function draw() {

}