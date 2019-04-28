const app = getApp()
Page({
  data: {
    // history 格式为：[{query:'apple',chs:'英语', to:'zh', result:'苹果'}]
    history:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ history: wx.getStorageSync('history') })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({history:wx.getStorageSync('history')})
  },
  onTapItem: function (e) {
    app.globalData.curLang = { chs: e.currentTarget.dataset.chs, lang: e.currentTarget.dataset.to}
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },
  clearHistory:function(e){
    this.setData({ history: []})
    wx.setStorageSync('history', history)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})