//aboutme.js
//获取应用实例
var app = getApp()
Page({
  data: {
    img: '../../images/logo.jpg',
    title: "公众号：程序IT圈",
    intro:"",
    contab:"联系方式",
    address:"18159020735",
    mobile:"18159020735",
    qq:"842546199",
    email:"llpdev@163.com",
    hezuo:"请加微信，备注商务合作"
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})