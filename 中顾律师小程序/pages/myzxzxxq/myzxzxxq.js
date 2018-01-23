var app = getApp();
Page({
  data: {
    station1:false,
     station2:true,
     station3:false,
     station4:true,
     station5:false,
     station6:false,
     inputValue:'',

  },
 
  self(e){
    console.log(11111111111)
   this.setData({
           inputValue:'',
           station1:true,
           station2:false,
          

     })
    },
    zhifu(){
     my.tradePay({
  orderStr: 'myOrderStr', //完整的支付参数拼接成的字符串，从服务端获取
  success: (res) => {
      this.setData({
          yishang:100,
           station3:true,
           station4:false
           
           
     

     })
    my.alert({
	  content: JSON.stringify(res),
	});
  },
  fail: (res) => {
    my.alert({
	  content: JSON.stringify(res),
	});
  }
});

},
close(){
    this.setData({
           inputValue:'',
           station5:false,
          

     })
    },
     send:function(event){
       var obj=this;
         obj.setData({
         station5:true,
         station3:false,
         station4:true,
         station1:false,
         station2:true
        });
        var index=event.target.dataset.index;
        this.setData({
           dashang:obj.data.info.hflist[index].lawyer,         
          })
        },
        //caina -s
        caina:function(event){
          var obj=this;
        var answerid=event.target.dataset.ansid;
          my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=zxCaina',
  method: 'POST',
   data: {
    key: app.randomWord(true,32,32),
    answerid:answerid,
    userid:obj.data.userid
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    console.log(obj.data.userid);
    if(res.data.errcode==0){
      my.alert({content: '采纳成功！'});
    }else{
      my.alert({content: '采纳失败！'});
    }
   
  },
  fail: function(res) {
  },
  complete: function(res) {
    my.hideLoading(); 
  },
});
        },
        //caina -e

        //zw-s
  zhuiwen:function(event){
    this.setData({
       station6:true,
       answerid:event.target.dataset.ansid,
    })
  },
  zwContent(e){
this.setData({
       content: e.detail.value,
    })
  },
  //zw-e
  //zw-fabu-s
  zwpost(){
var obj=this;
       console.log(obj.data.answerid);
          my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=zhuiwen',
  method: 'POST',
   data: {
    key: app.randomWord(true,32,32),
    answerid:obj.data.answerid,
    userid:obj.data.userid,
    content:obj.data.content
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    console.log(res.data);
    if(res.data.errcode==0){
      my.alert({content: '追问成功！'});
    }else{
      my.alert({content: '追问失败！'});
    }
   
  },
  fail: function(res) {
    my.alert({content: '追问失败！'});
  },
});
  },
  //zw-fabu-e

     onLoad(query) {
       //var id=8718329;
       var id=query.id;
       console.log(id);
       var obj=this;
my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=zxDetail',
  method: 'POST',
   data: {
    key: app.randomWord(true,32,32),
    id:id
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    console.log(res.data.msg.hflist);
    obj.setData({
        info: res.data.msg
      })
  },
  fail: function(res) {
  },
  complete: function(res) {
    my.hideLoading();
    
  },
});
//s
    my.getStorage({
  key: 'u',
  success: function(res) {
     obj.setData({
      userid: res.data.userid
    });
  },
  fail: function(res){
  }
});
    //e
},
 yjbj(){
   my.navigateTo({
     url:'/pages/yijianbianji/yijianbianji'
   }
     
   );
 }
});
