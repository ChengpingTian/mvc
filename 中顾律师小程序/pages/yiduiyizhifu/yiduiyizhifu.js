Page({
  data: {},
  payl() {
    my.tradePay({
      orderStr: 'myOrderStr', // 完整的支付参数拼接成的字符串，从服务端获取
      success: (res) => {
        my.navigateTo({
          url: '/pages/ydyzxzfchenggong/ydyzxzfchenggong'
        })
      },
    });
  },
  onLoad() { },
});
