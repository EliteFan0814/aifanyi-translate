import {baiduTranslate} from '../../utils/api.js'
const app = getApp()
Page({
  // 初始化页面 {{xxx}} 中的变量
  data: {
    // // curLang 形如：{chs: "英文", lang: "en"}
    curLang: {},
    tarLang:'',
    hideClearIcon: true,
    query: '',
    result: []
  },
  onLoad: function (options) {
    if (options.query) {
      this.setData({ query: options.query })
    }

  },
  onShow: function () {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({ curLang: app.globalData.curLang })
      this.setData({ tarLang: app.globalData.curLang.chs })
      this.onConfirm()
    }
  },
  onTap: function (event){
    if (this.data.query.length > 0) {
      this.setData({
        hideClearIcon: false
      })
    } else {
      this.setData({
        hideClearIcon: true
      })
    }
  },
  // 触摸清空
  onTapClose:function(event){
    this.setData({ query: '',result:[],hideClearIcon:true})
  },
  // 输入文本
  onInput: function(event) {
    this.setData({
      'query': event.detail.value
    })
    if (this.data.query.length > 0) {
      this.setData({
        hideClearIcon: false
      })
    } else {
      this.setData({
        hideClearIcon: true
      })
    }
  },
  // 确认翻译
  onConfirm:function(event){
    if(this.data.query){
      baiduTranslate(this.data.query, { from: 'auto', to: this.data.curLang.lang}).then((res)=>{
        // 翻译成功后取回数据
        // res 格式为：{from:'en',to:'zh',trans_result:[{src:'apple',dst:'苹果'}]}
        this.setData({ 'result': res.trans_result})
        
        // 将本次翻译存入历史
        // history 格式为：[{query:'apple',chs:'英语', to:'zh', result:'苹果'}]
        let history = wx.getStorageSync('history') || []
        history.unshift({ query: this.data.query, chs:this.data.curLang.chs, to:res.to, result: res.trans_result[0].dst+'......' })
        history.length = history.length > 10 ? 10 : history.length
        wx.setStorageSync('history', history)
      })
    }
  }
})