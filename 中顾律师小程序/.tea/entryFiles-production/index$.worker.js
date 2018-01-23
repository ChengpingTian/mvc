require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../..//pages/index/index');
require('../..//pages/dhzx/dhzx');
require('../..//pages/myzxzxxq/myzxzxxq');
require('../..//pages/my/my');
require('../..//pages/lvshixiangqing/lvshixiangqing');
require('../..//pages/zxzx/zxzx');
require('../..//pages/shengjifuwu/shengjifuwu');
require('../..//pages/dhzixunxxxlvshi/dhzixunxxxlvshi');
require('../..//pages/wzzixunxxxlvshi/wzzixunxxxlvshi');
require('../..//pages/yiduiyizhifu/yiduiyizhifu');
require('../..//pages/dhzixunzhifu/dhzixunzhifu');
require('../..//pages/zxzxzfchenggong/zxzxzfchenggong');
require('../..//pages/ydyzxzfchenggong/ydyzxzfchenggong');
require('../..//pages/myzxzxlist/myzxzxlist');
require('../..//pages/woyaojiameng/woyaojiameng');
require('../..//pages/jiamengfankui/jiamengfankui');
require('../..//pages/dhzxlist/dhzxlist');
require('../..//pages/yijianbianji/yijianbianji');
require('../..//pages/yijianfankui/yijianfankui');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
