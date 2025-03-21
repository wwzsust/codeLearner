import toDataURL from "./toDataURL.js";
import draw from "./start.js";
import beginpath from "./beginpath.js";
import closepath from "./closepath.js";
import isponitInPath from "./isponitinpath.js";
import canvasArc from "./arc.js";



// 这里刚开始随便乱画
draw();
// 试用toDataURL方法获取图片和一些基本的canvas属性
// toDataURL();

beginpath();

closepath();
isponitInPath();
canvasArc();
