import {$} from "./common";

// 判断是否同一个路径是看是否使用了beginPath(), 而不是看视觉上的收尾相连
function beginpath(){    
    const canvas = $("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.lineWidth = 5;
    
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();

    
    ctx.beginPath();
    ctx.strokeStyle = 'pink';
    ctx.moveTo(100,200);
    ctx.lineTo(200, 200);
    ctx.stroke();
}



export default beginpath;
