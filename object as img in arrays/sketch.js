var obs = [];
var imgs = [];

function preload() {
    for (var i = 0; i< 3; i++){
        imgs[i] = loadImage("images/image" + i + ".jpg"); 
    }

}

function setup() {
    cnv = createCanvas(600, 400);   
    }

function mousePressed() {
    var r = floor(random(0, imgs.length));
    var b = new Ob(mouseX, mouseY, imgs[r]);
    obs.push(b);
}

function draw() {
    background(0);

    for (var i = obs.length-1; i >= 0; i--) {
        obs[i].update();
        obs[i].display(); 
    }
}