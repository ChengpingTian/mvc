var app = getApp();
Page({
  data: {
    userid:0,
  },
  onLoad() {
   
    var obj=this;
    app.shouquan().then(
      user => this.setData({
        user,
      }),
    );
    
    //s
    /*
    my.getStorage({
  key: 'u',
  success: function(res) {
     obj.setData({
      //userid: res.data.userid
    });
  },
  fail: function(res){
    
  }
});
*/

    //e
   //console.log('----111---'+app.userid);
},
  tip(){
    my.alert({
      title: '开发中，敬请期待'+app.userid, // alert 框的标题
      success: (res) => {
        
      },
    });
  }
 
});
