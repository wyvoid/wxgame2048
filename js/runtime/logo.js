const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const IMG_SRC = 'images/title.png'

/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class Logo{
  constructor(ctx) {
    this.img = new Image();
    this.img.src = IMG_SRC;
    this.ctx = ctx;
    this.render(ctx);
  }

  /**
   * 背景图重绘函数
   * 绘制两张图片，两张图片大小和屏幕一致
   * 第一张漏出高度为top部分，其余的隐藏在屏幕上面
   * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面
   */
  render(ctx) {
    // 绘制logo
    var image = wx.createImage();
    image.src = 'images/title.png';
    image.onload = function () {

      ctx.drawImage(image, 10, 10, 50, 50);
    }

    // 绘制描述
    ctx.beginPath();
    ctx.fillStyle = "#776e65";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle"//得写在font之前
    ctx.font = "20px Arial bold";
    ctx.fillText("开心2048", 70, 40);
    ctx.closePath();
  }

  update(ctx) {
    this.render(ctx);
  }
}
