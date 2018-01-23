var app = getApp();
Page({
  data: {
    selected: true,
    selected1: false,
    chosed: true,
    nchosed: false,
    zxlist:'',
    ydylist:'',
    
  },
  qiehuan() {
    this.setData({
      selected: false,
      selected1: true,
      chosed: false,
      nchosed: true
    })
  },
  qiehuan1() {
    this.setData({
      selected: true,
      selected1: false,
      chosed: true,
      nchosed: false
    })
  },
  onLoad(query) {
   var obj=this;
    var userid=query.userid;
     my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=myZixun',
  method: 'POST',
   data: {
    userid: userid,
    key:app.randomWord(true,32,32),
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    obj.setData({
      zxlist: res.data.msg
    })
    console.log(res);
    
  },
  fail: function(res) {
    //my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    //my.alert({content: 'complete'});
    
  }
});

  },
  tz(){
    my.switchTab({
      url:"/pages/zxzx/zxzx"
    });
  }
});
