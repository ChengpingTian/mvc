var app = getApp();
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    indicatorcolor:"#c2c0c1",
    active:"#fff",
    selected:true,
    selected1:false,
    typeid:1,
  },
  selected(e){
        this.setData({
            selected1:false,
            selected:true
        })
  },
  selected1(e){
        this.setData({
            selected:false,
            selected1:true,
            typeid:2,
            page:1
          });
        this.location();  
        
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  onLoad() {
    
    this.setData({
      page: 1
    })
    this.getlist();
    this.getbanner();
     
  },
  getlist(){
    var obj=this;
    console.log(obj.data);
my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=lawList',
  method: 'POST',
   data: {
    key: app.randomWord(true,32,32),
    page:obj.data.page,
    typeid:obj.data.typeid,
    lat:obj.data.lat,
    lng:obj.data.lng,
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    
    if(obj.data.typeid==1){
      obj.setData({
        lawlist: res.data.msg
      })
    }else{
      
      obj.setData({
        lawlist2: res.data.msg
      })
    }
    
    
  },
  fail: function(res) {
    //my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    //my.alert({content: 'complete'});
    
  },
});
},
getbanner(){
var obj=this;
my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=getBanner&id=495',
  method: 'POST',
   data: {
    key: app.randomWord(true,32,32),
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    console.log(res.data.msg);
    obj.setData({
        banner: res.data.msg
      })
  },
  fail: function(res) {
  },
  complete: function(res) {
    my.hideLoading();
    
  },
});
},
 gotozxzx(){
    my.navigateTo({
      url:"/pages/zxzx/zxzx"
    });
  },
  gotodhzx(){
    my.navigateTo({
      url:"/pages/dhzx/dhzx"
    });
  },
  //location-s
  location(){
    var obj=this;
    my.getLocation({
      success(res) {
        my.hideLoading();
        
        obj.setData({
          hasLocation: true,
          lng:res.longitude,
          lat:res.latitude
         // location: formatLocation(res.longitude, res.latitude)
        });
        console.log(888);
        obj.getlist();

      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
  },
  //e
  //下拉刷新-s
  lower(){
       my.showToast({
  type: 'success',
  content: '加载中',
  duration: 3000,
});
   var obj=this;
   var page=obj.data.page+1;
   obj.setData({
        page: page,
      })
     my.httpRequest({
       url: 'http://www.9ask.cn/api.php?op=zfb&type=lawList',
  method: 'POST',
   data: {
    key: app.randomWord(true,32,32),
    page:page,
    typeid:obj.data.typeid,
    lat:obj.data.lat,
    lng:obj.data.lng,
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});

  console.log("数据请求成功"+page);
    console.log(res.data.errcode)
    if(res.data.errcode==990){
      my.alert({content: '亲,已经没有更多了^_^'});
    }else{
       if(obj.data.typeid==1){
  
  
          obj.setData({
            lawlist: obj.data.lawlist.concat(res.data.msg),
          })
  
      }else{
          obj.setData({
            lawlist2: obj.data.lawlist2.concat(res.data.msg),
          })
      } 
    }
    
  
  },
  fail: function(res) {
    //my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    //my.alert({content: 'complete'});
  },
});
  

app.getUserInfo();
},
  //下拉刷新-e




});
