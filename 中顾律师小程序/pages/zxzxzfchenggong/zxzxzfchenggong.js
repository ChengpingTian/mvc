Page({
  data: {
    num: 'dhsdjfjkg ',
    psw:'dhsadsadsdjfjkg',
    copy: '',
  },

  handleCopy() {
    my.setClipboard({
      text: this.data.num,
    });
  my.showToast({
    content: '复制成功', // 文字内容
    duration: 900,
    success: (res) => {
      
    },
  });
},
  handleCopypsw() {
    my.setClipboard({
      text: this.data.num,
    });
  my.showToast({
    content: '复制成功', // 文字内容
    duration: 900,
    success: (res) => {
      
    },
  });
  },
});