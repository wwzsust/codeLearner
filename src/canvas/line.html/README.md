# canvas绘制直线

- 在canvas中绘制一条直线时需要注意beginPath()方法
- 需要使用beginPath()方法来创建一个新的路径
- 否则会绘制出一条直线是连在一起的
- 在绘制线之前使用了fillRect()方法，可以不调用beginPath()方法，因为fillRect()方法会自动创建一个新的路径，但是为了代码的规范性和之前万一插入绘制线段的方法，还是调用beginPath()方法
