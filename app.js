//app.js
App({
  onLaunch: function(){
    // 本地若无缓存则默认为翻译为英语
    this.globalData.curLang = wx.getStorageSync('curLang')||this.globalData.langList[0]
  },
  globalData:{
    // curLang 形如：{chs: "英文", lang: "en"}
    curLang:{},
    langList: [
      {
        'chs': '英文',
        "lang": 'en'
      },
      {
        'chs': '中文',
        'lang': 'zh'
      },
      {
        'chs': '日语',
        'lang': 'jp'
      },
      {
        'chs': '韩语',
        'lang': 'kor'
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa'
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara'
      }
    ]
  }
})