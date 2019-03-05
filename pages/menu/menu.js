Page({

  /**
 * 页面的初始数据
   */
  data: {
    toppic: '/pages/img/banner-01.jpg',
    totalMoney:0,
    proList: [
      {
        "pic": "/pages/img/banner-01.jpg",
        "name": "星享卡01"
      }, {
        "pic": "/pages/img/banner-02.jpg",
        "name": "星享卡02"
      }, {
        "pic": "/pages/img/banner-03.jpg",
        "name": "星享卡03"
      }, {
        "pic": "/pages/img/banner-04.jpg",
        "name": "星享卡04"
      }, {
        "pic": "/pages/img/banner-05.jpg",
        "name": "星享卡05"
      }, {
        "pic": "/pages/img/banner-06.jpg",
        "name": "星享卡06"
      }
    ],
    productList: [
      {
        "pic": "/pages/img/tea01.jpg",
        "name": "阿馥奇朵",
        "price": 40,
        "quantity":0
      }, {
        "pic": "/pages/img/tea02.jpg",
        "name": "麦芽雪冷萃",
        "price": 36,
        "quantity": 0
      }, {
        "pic": "/pages/img/tea03.jpg",
        "name": "抹茶星冰乐",
        "price": 35,
        "quantity": 0
      }, {
        "pic": "/pages/img/tea04.jpg",
        "name": "芒果西番莲果茶星冰乐",
        "price": 31,
        "quantity": 0
      }, {
        "pic": "/pages/img/tea05.jpg",
        "name": "摩卡可可碎片星冰乐",
        "price": 36,
        "quantity": 0
      }, {
        "pic": "/pages/img/tea06.jpg",
        "name": "拿铁",
        "price": 42,
        "quantity": 0
      }, {
        "pic": "/pages/img/card.jpg",
        "name": "樱花烂漫会员星礼包",
        "price": 50,
        "quantity": 0
      }, {
        "pic": "/pages/img/card.jpg",
        "name": "樱花烂漫会员星礼包",
        "price": 100,
        "quantity": 0
      }, {
        "pic": "/pages/img/card2.jpg",
        "name": "潜底逐光星礼包",
        "price": 200,
        "quantity": 0
      }, {
        "pic": "/pages/img/card2.jpg",
        "name": "潜底逐光星礼包",
        "price": 288,
        "quantity": 0
      }, {
        "pic": "/pages/img/card2.jpg",
        "name": "潜底逐光星礼包",
        "price": 520,
        "quantity": 0
      }
    ],
    isShowDialog: false,
    dialogPic: "",
    dialogName: "",
    dialogPrice: ""
  },
  /**
 * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTotalPrice();
    var self = this;
    var proList = this.data.proList;
    for (var i = 0; i < proList.length; i++) {
      proList[i].showView = false;
    }
    proList[0].showView = true;
    self.setData({
      proList: proList
    })
  },

  toProListInfo: function (e) {
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var name = proList[index].name;
    var pic = proList[index].pic;
    var self = this;
    for (var i = 0; i < proList.length; i++) {
      proList[i].showView = false;
    }
    proList[index].showView = true;
    self.setData({
      toppic: pic,
      proList: proList
    });
  },

  toProductAdd: function (e) {
    var index = e.currentTarget.dataset.index;
    var productList = this.data.productList;
    var name = productList[index].name;
    var price = productList[index].price;
    wx.showToast({
      title: name + '  ￥' + price,
    })
  },

  toCopyrightMsg: function (e) {
    wx.showToast({
      title: '使用须知',
    })
  },

  toCoprightPrivate: function (e) {
    wx.showToast({
      title: '隐私政策',
    })
  },

  toPayInfo: function (e) {
    wx.showToast({
      title: '感谢您的购买',
    })
  },

  toProductInfo: function (e) {
    var index = e.currentTarget.dataset.index;
    var productList = this.data.productList;
    var name = productList[index].name;
    var price = productList[index].price;
    var pic = productList[index].pic;
    var self = this;
    self.setData({
      isShowDialog: true,
      dialogPic: pic,
      dialogName: name,
      dialogPrice: price
    })
  },

  toDialogClose: function (e) {
    var self = this;
    self.setData({
      isShowDialog: false
    })
  },

  // 商品增加或减少
  quantityChange(e) {
    const index = e.currentTarget.dataset.index;
    let productList = this.data.productList;
    let quantity = productList[index].quantity;
    if (e.target.id == 'sub') {
      if (quantity <= 0) return
      quantity -= 1
    } else if (e.target.id == 'add') {
      quantity += 1
    }
    productList[index].quantity = quantity
    this.setData({
      productList: productList
    })
    this.getTotalPrice()
  },
  // 计算总价函数
  getTotalPrice() {
    let productList = this.data.productList; // 获取购物车列表
    let total = 0;
    let count=0;
    for (let i = 0; i < productList.length; i++) { // 循环列表得到每个数据 
      total += productList[i].quantity * productList[i].price; // 所有价格加起来
      count += productList[i].quantity;
    }
    this.setData({ // 最后赋值到data中渲染到页面
      productList: productList,
      totalMoney: total.toFixed(2),
      totalCount: count,
    });
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