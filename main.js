var noseX=0;
var noseY=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/mk3GYtZF/istockphoto-851634552-612x612.jpg");
}
function draw(){
    image(video,0,0,250,250);
    fill(0,0,225);
    stroke(0,255,0);
image(clown_nose,noseX,noseY,30,30);
    

    
}
function setup(){
    var canvas=createCanvas(300,300);
    canvas.center();
   video=createCapture(VIDEO);
   video.size(250,250);
   video.hide(); 
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on("pose",gotPoses);
   
}
function Take_snapshot(){
    save("Arnav.png");

}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function gotPoses(results){
    if(results.length >0)
    {
       
        console.log(results) ;
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
    
}

