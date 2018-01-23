Page({
  data: {},
  onLoad() {

  },
  zhifu() {
    my.tradePay({
      orderStr: 'myOrderStr', //完整的支付参数拼接成的字符串，从服务端获取
      success: (res) => {
        my.navigateTo({

          url: '/pages/zxzxzfchenggong/zxzxzfchenggong'

        })
        my.alert({
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          content: "余额不足",
        })

      }
    });

  },
  onUnload() {

    // 页面被关闭
    my.confirm({
      title: '',
      content: '选择并支付即可享受专业律师：\一对一咨询服务，确定放弃？',
      confirmButtonText: '继续支付',
      cancelButtonText: '放弃',
      success: (result) => {
        if (result.confirm == true) {
          my.navigateTo({
            url: '/pages/shengjifuwu/shengjifuwu'

          })
        }
        else {
          my.confirm({
            title: '',
            content: '您的私人律师正在等待给您解决问题\请您再考虑一下',
            confirmButtonText: '我再想想',
            cancelButtonText: '去意已决',
            success: (result) => {
              if (result.confirm == true) {
                 my.navigateTo({

                  url: '/pages/shengjifuwu/shengjifuwu'

                })
              }


            },

          })
        }

      },
    });
  },
});
