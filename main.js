video = "";
status = "";
object = [];

function preload() {
    video = createVideo("video.mp4");
    video.hide();
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
    if(status != "") {
        objectIdentification.detect(video, gotResults);
        
        document.getElementById("status").innerHTML = "Objects Detected";
        document.getElementById("detected").innerHTML = "Number of objects detected: " + object.length;

        for(i = 0; i <= object.length; i++) {
            r = Math.random()*255;
            g = Math.random()*255;
            b = Math.random()*255;

            fill("#ff0000");
            stroke("#ff0000");
            text(object[i].label, object[i].x + 10, object[i].y - 15);

            noFill();
            rect(object[i].x, object[i].y, )
        }
    }
}

function start() {
    objectIdentification = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResults(error, results) {
    document.getElementById("status").innerHTML = "Detecting Objects";
    console.log(results);
    object = results;
}