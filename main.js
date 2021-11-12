function preload(){
    clownnose= loadImage('https://i.postimg.cc/FzQKRSDd/clownnose.png');
}
function setup(){
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
    canvas.center();

}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clownnose, noseX, noseY, 30, 30);
}
function takeSnapshot(){
save('myfilterimage.png'); 

}
function modelLoaded(){
console.log('Posenet Is Initialized');


}
function gotPoses(results){
if(results.length > 0 )
{
console.log(results);
noseX = results[0].pose.nose.x - 15;
noseY = results[0].pose.nose.y - 15;
console.log("x- coordinate of the nose is = " + noseX);
console.log("y- coordinate of the nose is = " + noseY);

}


}
noseX=0;
noseY=0; 





