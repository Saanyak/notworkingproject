rightWristx = 0;
leftWristx = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(400,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initiolized And Loaded");
}

function draw() {
    background("#1167f2");
    document.getElementById("font-size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    fill("#84aff5");
    textSize(difference);
    text("Saanya",50,100);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);

        rightWristx = results[0].pose.rightWrist.x;
        leftWristx = results[0].pose.leftWrist.x;

        difference = floor(leftWristx-rightWristx);

        console.log("Difference = "+difference);
        console.log("rightwrist_x = "+rightWristx+"leftwrist_x = "+leftWristx);
    }
}