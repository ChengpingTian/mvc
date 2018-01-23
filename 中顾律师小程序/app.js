App({
  todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 支付宝小程序', completed: false },
  ],
  userInfo: null,
  userid:0,
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);
  var obj=this;
          my.getAuthUserInfo({
            success: (res3) => {
              obj.userInfo = res3;
             
              console.log(res3)
              resolve(obj.userInfo);
            },
            fail: () => {
              reject({});
            },
          });
    });
  },
 randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      
         var oDate = new Date(); 
    var month=oDate.getMonth()+1;
    var day=oDate.getDate();
   month=month<10?'0'+month:''+month;
   day=day<10?'0'+day:day;
    var str2='ZF'+month+day;
    var ss = str2.match(/./g); // 在每个逗号(,)处进行分解。
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        var pos = Math.round(Math.random() * (arr.length-1));
        var a=i%2;
        if(i%2==1 && i<12){
          var num=(i-1)/2;
          str += ss[num];
        }else{
          str += arr[pos];
        }
       
      }
    return str;
},
onLaunch(){
  
},
shouquan(){
   return new Promise((resolve, reject) => {
     if(this.userInfo){
       console.log('已经获取到userid='+this.userid);
       resolve(this.userInfo);
      }
      var obj=this;
  my.getAuthCode({
  scopes: 'auth_user',
  success: (res) => {
    obj.authcode=res.authCode;
    console.log(obj.authcode);
     my.getAuthUserInfo({
            success: (res3) => {
              console.log(res3);
              obj.userInfo = res3;
               //s
          my.httpRequest({
        url: 'http://www.9ask.cn/api.php?op=zfb&type=bdflw',
        data: {
          authcode: obj.authcode,
          nickname:res3.nickName,
        },
        dataType: 'json',
        method: 'POST',
        success: (res2) => {
           obj.userid=res2.data.userid;
           obj.userInfo.userid=res2.data.userid;
           console.log('请求后获取userid='+obj.userid);
            resolve(obj.userInfo);
           
          //s设置缓存
   my.setStorage({
  key: 'u',
  data: {
    userid:obj.userid,
  },
  success: function() {
    console.log('设置缓存 ok----');
  }
});
    //e设置缓存
        },
        fail: () => {
          // 根据自己的业务场景来进行错误处理
        },
      });
          //e
            },
           
          });

      
  },
});
   })
  

  
}
 
});
