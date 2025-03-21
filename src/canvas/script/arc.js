import {$} from "./common";

// 画弧时 用 "Math.PI / 180"表示，比如画20°， 20 * Math.PI / 180
// arc()最后一个参数表示顺时针或逆时针画，默认逆时针 false
function canvasArc(){
    const canvas = $("canvas");
    // 下列代码可以让在vscode中有ctx的语法提示
    /** @type {CanvasRenderingContext2D}*/
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.arc(200,200, 100, 0, 360 * Math.PI / 180, true);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.arc(300,300,150,0,-90 * Math.PI / 180, true);
    ctx.closePath();
    ctx.stroke();

}

export default canvasArc;