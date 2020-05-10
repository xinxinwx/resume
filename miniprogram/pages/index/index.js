Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingState: 0,
    name: '',
    position: '',
    sex : '',
    age: '',
    diploma : '',
    year : '',
    addres: '',
    state: '',
    tel : '',
    mailbox: '',
    college: '',
    major : '',
    graduate : '',
    technology :[],
    duty :[],
    experience: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name: "resume",
      success(res) {
        let resumedata = res.result.data[0];
        that.setData({
          addres: resumedata.addres,
          age: resumedata.age,
          college: resumedata.college,
          diploma: resumedata.diploma,
          duty: resumedata.duty,
          evaluate: resumedata.evaluate,
          experience: resumedata.experience,
          graduate: resumedata.graduate,
          mailbox: resumedata.mailbox,
          major: resumedata.major,
          name: resumedata.name,
          position: resumedata.position,
          sex: resumedata.sex,
          state: resumedata.state,
          technology: resumedata.technology,
          tel: resumedata.tel,
          year: resumedata.year,
          loadingState: 1,
        })
      }, fail(err) {
        console.log(res)
      }
    })
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
    
  },
  dial(){
    wx.makePhoneCall({
      phoneNumber: this.data.tel,
    })
  }
})