// pages/home/home.js
Page({
  /**
   * Page initial data
   */
  data: {
    productList: [{
      id: 1,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product1.jpg',
      name: '商品1',
      price: 100,
      source: '国内·广东',
    }, {
      id: 2,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product2.jpg',
      name: '商品2',
      price: 200,
      source: '国内·广东',
    }, {
      id: 3,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product3.jpg',
      name: '商品3',
      price: 300,
      source: '国内·广东',
    }, {
      id: 4,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product4.jpg',
      name: '商品4',
      price: 400,
      source: '国内·广东',
    }, {
      id: 5,
      image: 'https://s3.cn-north-1.amazonaws.com.cn/u-img/product5.jpg',
      name: '商品5',
      price: 500,
      source: '国内·广东',
    }], // 商品列表

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})