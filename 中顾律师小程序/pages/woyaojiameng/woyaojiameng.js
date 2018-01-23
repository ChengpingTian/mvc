import Dropdown from '../biz/components/dropdown';
var app = getApp();
Page({
  ...Dropdown,
  data: {
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData:''
    },
  },
  onDropdownNavItemTap(e, index) {
    const { selectedNav, active } = this.data.dropdownSelectData;

    let nextactive = !active;
    if (selectedNav !== index) {
      nextactive = true;
    }

    this.setData({
      dropdownSelectData: {
        ...this.data.dropdownSelectData,
        active: nextactive,
        selectedNav: index
      }
    });
  },
  
   catchDropdownNavItemTap(e, parentIndex, index, title) {
    const { listData } = this.data.dropdownSelectData;

    const data = listData[parentIndex];

    data.selectedItem = index;
    console.log(parentIndex);
    console.log(data.data[index].linkageid);
          this.getcity(data.data[index]);
          if(parentIndex==0){
 this.setData({
            k1:data.data[index].linkageid,
            t1: data.data[index].title,
             city: '',
      quxian: '',
      t2:'城市',
      t3:'区县',
    })
          }else{
            if( data.data[index].parentid>35){
 this.setData({
    k3:data.data[index].linkageid,
            t3: data.data[index].title,
          })
            }else{
 this.setData({
    k2:data.data[index].linkageid,
            t2: data.data[index].title,
          })
            }
          }
         this.setData({
      dropdownSelectData: {
        ...this.data.dropdownSelectData,
        active: false,
        listData
      }
    });
  },
  catchDropdownBgTap(e) {
    this.setData({
      active: false
    });
  },
  getcity(areas){
    var obj=this;
    if(areas){
      var areaid=areas.linkageid; 
    }
    
    my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=cityld',
  data: {
    areaid: areaid,
  },
  method: 'POST',
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    if(areaid){
console.log(areas);
       if(areas.parentid>0){
obj.setData({
      quxian: res.data.msg
    })
    
       }else{
          obj.setData({
      city: res.data.msg
    })
       }
    }else{
 obj.setData({
      province: res.data.msg,
       
    })
    }
    obj.setld();
    console.log(obj.data);
   
    
  },
  fail: function(res) {
    //my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    
  }
});

},
setld(){
  var data3=[{
           nav:this.data.t1,
          selectedItem: '',
          data:this.data.province
        },{
           nav: this.data.t2,
          selectedItem: '',
          data:this.data.city
          
        }];
  if(this.data.t1!='北京' && this.data.t1!='上海' && this.data.t1!='天津' && this.data.t1!='重庆'){
      data3[2]={
           nav:this.data.t3,
          selectedItem: '',
          data:this.data.quxian
          
        };
      }     
  this.setData({
       dropdownSelectData: {
        ...this.data.dropdownSelectData,
        active: false,
        listData:data3,
      }
    })
  },
  onLoad() {
   this.setData({
      t1: '省份',
      t2: '城市',
      t3: '区县',
    })
  this.getcity();
 console.log('--------------');
  app.getUserInfo().then(
      user1 => this.setData({
        user1,
      }),
    );
  
  },
  Jmname(e){
 this.setData({
      truename: e.detail.value,
    });
    
},
Jmmobile(e){
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
  },
  fail: function(res){
    
  }
});
    //e
    //s

my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=jiaMeng',
  data: {
    truename: obj.data.truename,
    mobile: obj.data.mobile,
    provid:obj.data.k1,
    cityid:obj.data.k2,
    qxid:obj.data.k3,
    userid:obj.data.userid,

  },
  method: 'POST',
  dataType: 'json',
  success: function(res) {
    console.log(res);
    my.navigateTo({
      url:"/pages/jiamengfankui/jiamengfankui"
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


});
