import Dropdown from '../biz/components/dropdown';
var app = getApp();
Page({
  ...Dropdown,
  data: {
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: '省份',
          selectedItem: '',
          data: [
            {
              
              title: '北京'
            },
            {
              
              title: '北京'
            },
           {
              
              title: '北京'
            },
            {
              
              title: '北京'
            },
           
          ]
        },
        {
          nav: '城市',
          selectedItem: '',
          data: [
            {
              title: '济南'
            },
            {
              title: '济南'
            },
            {
                title: '济南'
            },
            {
                title: '济南'
            },
            {
                title: '济南'
            },
            {
               title: '济南'
            },
          
          ]
        },
        {
          nav: '区县',
          selectedItem: '',
          data: [
            {
              
              title: '历下区'
            },
            {
                title: '历下区'
            },
            {
                title: '历下区'
            },
            {
                title: '历下区'
            },
            {
               title: '历下区'
            },
            {
              title: '历下区'
            },
            {
                title: '历下区'
            },
            {
                title: '历下区'
            },
          ]
        },
      ],
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

    my.showToast({
      content: `你选中了第${parentIndex + 1}个tab的第${index + 1}个元素`, // 文字内容
      success: (res) => {

      },
    });
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
