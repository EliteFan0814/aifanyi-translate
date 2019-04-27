// pages/change/change.js
const app = getApp()
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onLoad: function (options) {
    this.setData({
      curLang: app.globalData.curLang
    })
  },
  onTapItem: function (e) {
    // langObj = {chs: "英文", lang: "en"}
    let langObj = e.currentTarget.dataset
    // 设置本地缓存：选择的语言
    wx.setStorageSync('language', langObj)
    // 设置当前选择语言
    this.setData({ 'curLang': langObj })
    // 在全局数据中修改为当前语言
    app.globalData.curLang = langObj
    wx.switchTab({ url: '/pages/index/index'})
  }
  
})