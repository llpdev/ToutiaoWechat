//lists.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newsList: [],
    lastid:0,
    toastHidden:true,
    confirmHidden:true,
    isfrist:1,
    loadHidden:true,
    moreHidden:'none',
    msg:'没有更多文章了'
  },
  loadData: function (lastid){
    //显示出加载中的提示
    this.setData({loadHidden:false})

      var limit = 5
      var that = this

      wx.request({
         // url: 'http://localhost/weicms/index.php?s=/addon/Cms/Cms/getList',
          url: 'http://litchiapi.jstv.com/api/GetFeeds?column=0&PageSize=20&pageIndex=1',
          data: {lastid:lastid,limit:limit},
          header: {
              'Content-Type': 'application/json'
          },
          success: function(res) {
            console.log("sucess"+res)
               if(!res.data){
                    that.setData({ toastHidden:false }) 
                    that.setData({ moreHidden:'none' })
                    return false                
               }
                var len = res.data.length
                var oldLastid = lastid
                that.setData({ lastid: res.data[len-1].id})

                var dataArr = that.data.newsList
                var newData = dataArr.concat(res.data);

                if(oldLastid==0){
                     wx.setStorageSync('CmsList', newData)
                }
                that.setData({ newsList:newData })
                that.setData({ moreHidden:'' })
                console.log('data from url');
          },
          fail: function(res){
                 if(lastid==0){
                     var newData = wx.getStorageSync('CmsList')
                     if(!newData){
                        that.setData({ newsList:newData })
                        that.setData({ moreHidden:'' })

                          var len = newData.length
                          that.setData({ lastid: newData[len-1].id})
                     }
                     console.log('data from cache');
                } else {
                    that.setData({ toastHidden:false, moreHidden:'none', msg:'当前网格异常，请稍后再试' }) 
                }          
          },
          complete: function(){
              //显示出加载中的提示
              that.setData({loadHidden:true})         
          }
      })
  },
  loadMore: function(event){
    var id = event.currentTarget.dataset.lastid
    var isfrist = event.currentTarget.dataset.isfrist
    var that = this

    wx.getNetworkType({
      success: function(res) {
        var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi

        if(networkType!='wifi' && isfrist=='1'){
           that.setData({confirmHidden:false})
        }
      }
    })

    this.setData({isfrist:0})
    this.loadData(id);
  },
  onLoad: function () {
    var that = this

    this.loadData(0);
  },

  toastChange: function(){
    this.setData({toastHidden:true})
  },
  modalChange: function(){
    console.log('abc');
    this.setData({confirmHidden:true})
  }
})