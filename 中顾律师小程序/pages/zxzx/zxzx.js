import Dropdown from '../biz/components/dropdown';
var app = getApp();
Page({
  ...Dropdown,
  data: {
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData:'',
      selected:false,
      selected1:false
    },
    tjwt:1,
    
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
         
          /*
    my.showToast({
      //content: `你选中了第${parentIndex + 1}个tab的第${index + 1}个元素`, // 文字内容
      success: (res) => {
         //console.log(index);
          
      },
    });
    */
    
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
   app.shouquan();
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

  

//提交咨询逻辑判断
addzx(e){
//s
if(typeof(this.data.mobile)=='undefined' || typeof(this.data.content)=='undefined'){
 my.alert({content: '详情或电话不能为空！'});
    return false;
  }
if(typeof(this.data.k2)=='undefined'){
my.alert({content: '城市不能为空！'});
    return false;
}  
if(this.data.selected || this.data.selected1){
  my.alert({content: '请正确填写表单信息'});
    return false;
  }
  
  console.log(app.userid);

var obj=this;
my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=publishcon',
  data: {
    content: obj.data.content,
    mobile: obj.data.mobile,
    provid:obj.data.k1,
    cityid:obj.data.k2,
    qxid:obj.data.k3,
    userid:app.userid,

  },
  method: 'POST',
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
    console.log(res.data.id);
    obj.setData({
      tjwt: 2
    })
    my.navigateTo({
      url:'/pages/zxzxzfchenggong/zxzxzfchenggong?1'
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
zxcontent(e){
 this.setData({
      content: e.detail.value,
    });
     console.log(app.authcode);
     var tarcon=e.detail.value
     if(!(tarcon.length>20)){
       this.setData({
         selected1:true
       })
      }
      else{
        this.setData({
         selected1:false
       })
      }
     
    
},
zxmobile(e){
 this.setData({
      mobile: e.detail.value,
    });
    var tarText=e.detail.value
    if(/^1[3|4|5|8]{1}\d{9}$/.test(tarText)){
      console.log('ok');
      this.setData({
       selected:false
     })

    }
    else{
     this.setData({
       selected:true
     })
    }
},

});
