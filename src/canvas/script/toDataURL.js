// 这里创建了一个image并和canvas放到一起，显示在一行证明canvas是一个行内的块级元素
// toDataURL()方法返回的是一个data:image/png;base64,....的图片，所以imgobj的src属性是这个字符串
function toDataURL(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = canvas.toDataURL();
    const imgobj = document.getElementById("img");
    imgobj.src = img;
    imgobj.width = 400;
    imgobj.height = 250;
}
export default toDataURL;