var app = getApp();
Page({
  data: {},

    onLoad(query) {
    var obj=this;
    var userid=query.userid;
     my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=lawinfo',
  method: 'POST',
   data: {
    userid: userid,
    key:app.randomWord(true,32,32),
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    obj.setData({
      lawinfo: res.data.msg
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
tip(){
  my.alert({
    title: '该功能攻城狮正在开发中您可先尝试在线咨询', // alert 框的标题
    success: (res) => {
      my.navigateTo({
        url:"/pages/zxzx/zxzx"
      });
      
    },
  });
}

});
