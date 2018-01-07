//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    zuixin: 'top-hoverd-btn',
    shipin: '',
    tuijian: '',
    redian: '',
    yule: '',
    keji: '',
    junshi: '',
    tiyu: '',
    hidden: false
    // newsList: [
    //   { id: 1, status:"xiaoming"},
    //   {id:2, title:"xiaoming2"},
    //   {id:3, title:"xiaoming3"},
    // ]
  },
  //事件处理函数
  bindViewTap2: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    console.log(onload)
    var that = this
    wx.request({
      url: 'http://litchiapi.jstv.com/api/GetFeeds?column=0&PageSize=20&pageIndex=1',
      //method:'GET',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success1" + res.data.status)
        that.setData({
          newsList: res.data.paramz.feeds
        })
      },
      fail: function (res) {
        console.log("---fail---")
      }
    })
  },
  dataload: function (url) {
    console.log(onload)
    var that = this
    wx.request({
      url: url,
      //method:'GET',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success1" + res.data.status)
        that.setData({
          newsList: res.data.paramz.feeds
        })
      },
      fail: function (res) {
        console.log("---fail---")
      }
    })

  },
//点击事件
  zuixin: function () {
    console.log('zuixin');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=0&PageSize=20&pageIndex=1');
    this.updateBtnStatus('zuixin');
  },
  shipin: function () {
    console.log('shipin');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=1&PageSize=20&pageIndex=1');
    this.updateBtnStatus('shipin');
  },
  tuijian: function () {
    console.log('tuijian');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=2&PageSize=20&pageIndex=1');
    this.updateBtnStatus('tuijian');
  },
  redian: function () {
    console.log('redian');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=3&PageSize=20&pageIndex=1');
    this.updateBtnStatus('redian');
  },
  yule: function () {
    console.log('yule');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=4&PageSize=20&pageIndex=1');
    this.updateBtnStatus('yule');
  },
  keji: function () {
    console.log('keji');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=5&PageSize=20&pageIndex=1');
    this.updateBtnStatus('keji');
  },
  junshi: function () {
    console.log('junshi');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=6&PageSize=20&pageIndex=1');
    this.updateBtnStatus('junshi');
  },
  tiyu: function () {
    console.log('tiyu');
    this.dataload('http://litchiapi.jstv.com/api/GetFeeds?column=7&PageSize=20&pageIndex=1');
    this.updateBtnStatus('tiyu');
  },

  updateBtnStatus: function (column) {
    this.setData({
      zuixin: this.getHoverd('zuixin', column),
      shipin: this.getHoverd('shipin', column),
      tuijian: this.getHoverd('tuijian', column),
      redian: this.getHoverd('redian', column),
      yule: this.getHoverd('yule', column),
      keji: this.getHoverd('keji', column),
      junshi: this.getHoverd('junshi', column),
      tiyu: this.getHoverd('tiyu', column)
    });
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
