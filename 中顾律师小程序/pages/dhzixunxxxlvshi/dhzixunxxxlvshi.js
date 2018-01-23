var app = getApp();
Page({
  data: {
    selected:true,
    selected1:false,
      selected2:false
    },
   
    zhifu(){
//       my.tradePay({
//   orderStr: 'myOrderStr', //完整的支付参数拼接成的字符串，从服务端获取
//   success: (res) => {
//   my.navigateTo({ 
  
//  url: '/pages/dhzixunzhifu/dhzixunzhifu'
  
// })
//     my.alert({
//     content: JSON.stringify(res),
      
// 	});
//   },
//   fail: (res) => {
//       my.navigateTo({ 
  
//  url: '/pages/dhzixunzhifu/dhzixunzhifu'
  
// })
//     my.alert({
// 	  content: JSON.stringify(res),
// 	});
//   }
// });
my.alert({
  title: '此服务攻城狮在玩命开发中您可以选择在线咨询服务',
  success: (res) => {
   my.redirectTo({
      url:"/pages/zxzx/zxzx"
    });
    
  },
});
    },
      selected(e){
        this.setData({
            selected1:false,
             selected2:false,
            selected:true
        })
    },
    selected1(e){
        this.setData({
            selected:false,
            selected1:true,
             selected2:false
            })
          },
      selected2(e){
        this.setData({
            selected:false,
            selected1:false,
            selected2:true
          })
          
  },
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
  
});
