Page({
  data: {},
  onLoad() {},

  Fkcontent(e){
 this.setData({
      content: e.detail.value,
    });
    
},
Fkmobile(e){
 this.setData({
      mobile: e.detail.value,
    });
    
},
  tijiao(){
    console.log(11111)
    var obj=this;
    //s
    my.getStorage({
  key: 'u',
  success: function(res) {
     obj.setData({
      userid: res.data.userid
    });
     //s
my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=guestBook',
  data: {
    content: obj.data.content,
    mobile: obj.data.mobile,
    userid:obj.data.userid,

  },
  method: 'POST',
  dataType: 'json',
  success: function(res) {
    console.log(res);
    my.navigateTo({
      url:"/pages/yijianfankui/yijianfankui"
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
    //e
   

},
});
