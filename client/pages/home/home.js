const qcloud = require('../../vendor/wafer2-client-sdk/index')

// pages/home/home.js
Page({
  /**
   * Page initial data
   */
  data: {
    productList: [], // 商品列表

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getProductList()
  },

  getProductList(){
    wx.showLoading({
      title: '商品数据加载中...',
    })
    qcloud.request({
      url: 'https://xg7cr459.qcloud.la/weapp/product',
      success: result => {
        wx.hideLoading()
        if(!result.data.code){
          this.setData({
            productList: result.data.data
          })
        }else{  
          wx.showToast({
            icon: 'none',
            title: '商品数据加载失败',
          })
        }

      },
      fail: result => {
        wx.hideLoading()
        wx.showToast({
          icon: 'none',
          title: '商品数据加载失败',
        })
      }
    })
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