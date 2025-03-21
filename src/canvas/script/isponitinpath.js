import { $ } from "./common";

// isPointInPath()检测某一个点是否在某个区域内，rect()和line绘制的图形均能检测
// fillRect(),strokeRect()不能检测出来
export default function isponitInPath() {
    const canvas = $("canvas");
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(50, 50, 200, 100);
    ctx.stroke();
    const isIn = ctx.isPointInPath(80, 80);
    // console.log(isIn);

    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(200, 20);
    ctx.lineTo(200, 120);
    ctx.lineTo(20, 120);
    ctx.closePath();
    ctx.strokeStyle = "rgba(0,0,0,0.5)";
    ctx.lineWidth = 3;
    ctx.stroke();

    // console.log(ctx.isPointInPath(50, 50));
}