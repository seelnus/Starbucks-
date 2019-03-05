const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo:false,
    userListInfo: [{
      icon: '/pages/img/iconfont-dingdan.png',
      text: '我的订单',
      isunread: true,
      unreadNum: 2
    }, {
      icon: '/pages/img/iconfont-card.png',
      text: '我的代金券',
      isunread: false,
      unreadNum: 2
    }, {
      icon: '/pages/img/iconfont-icontuan.png',
      text: '我的拼团',
      isunread: true,
      unreadNum: 1
    }, {
      icon: '/pages/img/iconfont-shouhuodizhi.png',
      text: '收货地址管理'
    }, {
      icon: '/pages/img/iconfont-kefu.png',
      text: '联系客服'
    }, {
      icon: '/pages/img/iconfont-help.png',
      text: '常见问题'
    }]
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }    
  }
})