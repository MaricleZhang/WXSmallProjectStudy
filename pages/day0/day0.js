//index.js
//获取应用实例
var initText = 'first row \n second row';
var array = [];
Page({
  data: {
    text: initText
  },
  add: function () {
    array.push('row')
    this.setData({
      text:initText + '\n' + array.join('\n')
    })
  },
  remove:function () {
    array.pop()
    this.setData({
      text: initText + '\n' + array.join('\n')
    })
  }
}
);
