import md5 from './md5.min.js'

const appid = '20190425000291649'
const key = 'okWx6GeOIx99IAJDPr6R'

function baiduTranslate(q, { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' }) {
  return new Promise((resolve, reject) => {
    let salt = Date.now()
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res) {
        console.log(res)
        if (res.data && res.data.trans_result) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: '响应成功，翻译失败！',
            icon: 'none',
          })
          reject({
            status: res.statusCode,
            header: res.header,
            msg: '响应成功，翻译失败！'
          })
        }
      },
      fail(res) {
        wx.showToast({
          title: '响应失败，网络异常！',
          icon: 'none',
        })
        reject({
          status: res.statusCode,
          header: res.header,
          msg: '响应失败，翻译失败！'
        })
      }
    })
  })
}
module.exports.baiduTranslate = baiduTranslate