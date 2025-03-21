import {$} from './common';

// closePath()是“封闭这个路径"，不是"关闭路径开始新的路径"
function closepath(){
    const canvas = $("canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = "Hotpink"
    ctx.moveTo(50,50);
    ctx.lineTo(50, 150);
    ctx.lineTo(150, 150);
    ctx.closePath();
    ctx.stroke();
}

export default closepath;