function draw(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.strokeRect(250,350,canvas.width / 4, canvas.height / 4);

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10,10,55,50);

    ctx.fillStyle = "rgb(0,0,200,0.5)";
    ctx.fillRect(30,30,55,50);

    ctx.clearRect(100,100,100,100);

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.moveTo(340,200);
    ctx.lineTo(100,100);
    ctx.stroke();
}
export default draw;