var app = getApp();
Page({
  data: {},
  onLoad(query) {
    var obj=this;
     //s
    my.getStorage({
  key: 'u',
  success: function(res) {
     obj.setData({
      userid: res.data.userid
    });
    var userid= res.data.userid
    //s

my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=lyList',
  data: {
    content: obj.data.content,
    mobile: obj.data.mobile,
    userid:obj.data.userid,

  },
  method: 'POST',
  dataType: 'json',
  success: function(res) {
    console.log(res);
    obj.setData({
      lylist: res.data.msg
    });
  },
  fail: function(res) {
    //my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    
  }
});
//e
  },
  fail: function(res){
    
  }
});
app.getUserInfo().then(
      user => this.setData({
        user,
      }),
    );
    //e
    
  },
});
