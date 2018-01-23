import Dropdown from '../biz/components/dropdown';

var app = getApp();
Page({
  ...Dropdown,
 
  data: {
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: '',
    },
     lawyer:'',
     page:1,
     k2:0,
     k1:0,
     clickid:0,
    
     city:"选择地区",
     statu:true,
     condition:false,
     condition2:false,
     goodat:"专长领域",
  
      provinces: [
        
{
"citys": [
{
    "citysName": "北京",
    "linkageid": "2"
}
],
"provinceName": "北京",
"linkageid": "2"
},
{
"citys": [
{
    "citysName": "上海",
    "linkageid": "3"
}
],
"provinceName": "上海",
"linkageid": "3"
},
{
"citys": [
{
    "citysName": "天津",
    "linkageid": "4"
}
],
"provinceName": "天津",
"linkageid": "4"
},
{
"citys": [
{
    "citysName": "重庆",
    "linkageid": "5"
}
],
"provinceName": "重庆",
"linkageid": "5"
},
{
"citys": [
{
    "citysName": "石家庄",
    "linkageid": "130"
},{
    "citysName": "唐山",
    "linkageid": "131"
},{
    "citysName": "秦皇岛",
    "linkageid": "132"
},{
    "citysName": "邯郸",
    "linkageid": "133"
},{
    "citysName": "邢台",
    "linkageid": "134"
},{
    "citysName": "保定",
    "linkageid": "135"
},{
    "citysName": "张家口",
    "linkageid": "136"
},{
    "citysName": "承德",
    "linkageid": "137"
},{
    "citysName": "沧州",
    "linkageid": "138"
},{
    "citysName": "廊坊",
    "linkageid": "139"
},{
    "citysName": "衡水",
    "linkageid": "140"
}
],
"provinceName": "河北",
"linkageid": "6"
},
{
"citys": [
{
    "citysName": "太原",
    "linkageid": "141"
},{
    "citysName": "大同",
    "linkageid": "142"
},{
    "citysName": "阳泉",
    "linkageid": "143"
},{
    "citysName": "长治",
    "linkageid": "144"
},{
    "citysName": "晋城",
    "linkageid": "145"
},{
    "citysName": "朔州",
    "linkageid": "146"
},{
    "citysName": "晋中",
    "linkageid": "147"
},{
    "citysName": "运城",
    "linkageid": "148"
},{
    "citysName": "忻州",
    "linkageid": "149"
},{
    "citysName": "临汾",
    "linkageid": "150"
},{
    "citysName": "吕梁",
    "linkageid": "151"
}
],
"provinceName": "山西",
"linkageid": "7"
},
{
"citys": [
{
    "citysName": "呼和浩特",
    "linkageid": "152"
},{
    "citysName": "包头",
    "linkageid": "153"
},{
    "citysName": "乌海",
    "linkageid": "154"
},{
    "citysName": "赤峰",
    "linkageid": "155"
},{
    "citysName": "通辽",
    "linkageid": "156"
},{
    "citysName": "鄂尔多斯",
    "linkageid": "157"
},{
    "citysName": "呼伦贝尔",
    "linkageid": "158"
},{
    "citysName": "巴彦淖尔",
    "linkageid": "159"
},{
    "citysName": "乌兰察布",
    "linkageid": "160"
},{
    "citysName": "兴安盟",
    "linkageid": "161"
},{
    "citysName": "锡林郭勒盟",
    "linkageid": "162"
},{
    "citysName": "阿拉善盟",
    "linkageid": "163"
}
],
"provinceName": "内蒙古",
"linkageid": "8"
},
{
"citys": [
{
    "citysName": "沈阳",
    "linkageid": "164"
},{
    "citysName": "大连",
    "linkageid": "165"
},{
    "citysName": "鞍山",
    "linkageid": "166"
},{
    "citysName": "抚顺",
    "linkageid": "167"
},{
    "citysName": "本溪",
    "linkageid": "168"
},{
    "citysName": "丹东",
    "linkageid": "169"
},{
    "citysName": "锦州",
    "linkageid": "170"
},{
    "citysName": "营口",
    "linkageid": "171"
},{
    "citysName": "阜新",
    "linkageid": "172"
},{
    "citysName": "辽阳",
    "linkageid": "173"
},{
    "citysName": "盘锦",
    "linkageid": "174"
},{
    "citysName": "铁岭",
    "linkageid": "175"
},{
    "citysName": "朝阳",
    "linkageid": "176"
},{
    "citysName": "葫芦岛",
    "linkageid": "177"
}
],
"provinceName": "辽宁",
"linkageid": "9"
},
{
"citys": [
{
    "citysName": "长春",
    "linkageid": "178"
},{
    "citysName": "吉林",
    "linkageid": "179"
},{
    "citysName": "四平",
    "linkageid": "180"
},{
    "citysName": "辽源",
    "linkageid": "181"
},{
    "citysName": "通化",
    "linkageid": "182"
},{
    "citysName": "白山",
    "linkageid": "183"
},{
    "citysName": "松原",
    "linkageid": "184"
},{
    "citysName": "白城",
    "linkageid": "185"
},{
    "citysName": "延边",
    "linkageid": "186"
}
],
"provinceName": "吉林省",
"linkageid": "10"
},
{
"citys": [
{
    "citysName": "哈尔滨",
    "linkageid": "187"
},{
    "citysName": "齐齐哈尔",
    "linkageid": "188"
},{
    "citysName": "鸡西",
    "linkageid": "189"
},{
    "citysName": "鹤岗",
    "linkageid": "190"
},{
    "citysName": "双鸭山",
    "linkageid": "191"
},{
    "citysName": "大庆",
    "linkageid": "192"
},{
    "citysName": "伊春",
    "linkageid": "193"
},{
    "citysName": "佳木斯",
    "linkageid": "194"
},{
    "citysName": "七台河",
    "linkageid": "195"
},{
    "citysName": "牡丹江",
    "linkageid": "196"
},{
    "citysName": "黑河",
    "linkageid": "197"
},{
    "citysName": "绥化",
    "linkageid": "198"
},{
    "citysName": "大兴安岭地区",
    "linkageid": "199"
}
],
"provinceName": "黑龙江",
"linkageid": "11"
},
{
"citys": [
{
    "citysName": "南京",
    "linkageid": "200"
},{
    "citysName": "无锡",
    "linkageid": "201"
},{
    "citysName": "徐州",
    "linkageid": "202"
},{
    "citysName": "常州",
    "linkageid": "203"
},{
    "citysName": "苏州",
    "linkageid": "204"
},{
    "citysName": "南通",
    "linkageid": "205"
},{
    "citysName": "连云港",
    "linkageid": "206"
},{
    "citysName": "淮安",
    "linkageid": "207"
},{
    "citysName": "盐城",
    "linkageid": "208"
},{
    "citysName": "扬州",
    "linkageid": "209"
},{
    "citysName": "镇江",
    "linkageid": "210"
},{
    "citysName": "泰州",
    "linkageid": "211"
},{
    "citysName": "宿迁",
    "linkageid": "212"
}
],
"provinceName": "江苏",
"linkageid": "12"
},
{
"citys": [
{
    "citysName": "杭州",
    "linkageid": "213"
},{
    "citysName": "宁波",
    "linkageid": "214"
},{
    "citysName": "温州",
    "linkageid": "215"
},{
    "citysName": "嘉兴",
    "linkageid": "216"
},{
    "citysName": "湖州",
    "linkageid": "217"
},{
    "citysName": "绍兴",
    "linkageid": "218"
},{
    "citysName": "金华",
    "linkageid": "219"
},{
    "citysName": "衢州",
    "linkageid": "220"
},{
    "citysName": "舟山",
    "linkageid": "221"
},{
    "citysName": "台州",
    "linkageid": "222"
},{
    "citysName": "丽水",
    "linkageid": "223"
}
],
"provinceName": "浙江",
"linkageid": "13"
},
{
"citys": [
{
    "citysName": "合肥",
    "linkageid": "224"
},{
    "citysName": "芜湖",
    "linkageid": "225"
},{
    "citysName": "蚌埠",
    "linkageid": "226"
},{
    "citysName": "淮南市",
    "linkageid": "227"
},{
    "citysName": "马鞍山",
    "linkageid": "228"
},{
    "citysName": "淮北",
    "linkageid": "229"
},{
    "citysName": "铜陵",
    "linkageid": "230"
},{
    "citysName": "安庆",
    "linkageid": "231"
},{
    "citysName": "黄山",
    "linkageid": "232"
},{
    "citysName": "滁州",
    "linkageid": "233"
},{
    "citysName": "阜阳",
    "linkageid": "234"
},{
    "citysName": "宿州",
    "linkageid": "235"
},{
    "citysName": "巢湖",
    "linkageid": "236"
},{
    "citysName": "六安",
    "linkageid": "237"
},{
    "citysName": "亳州",
    "linkageid": "238"
},{
    "citysName": "池州",
    "linkageid": "239"
},{
    "citysName": "宣城",
    "linkageid": "240"
}
],
"provinceName": "安徽",
"linkageid": "14"
},
{
"citys": [
{
    "citysName": "福州",
    "linkageid": "241"
},{
    "citysName": "厦门",
    "linkageid": "242"
},{
    "citysName": "莆田",
    "linkageid": "243"
},{
    "citysName": "三明",
    "linkageid": "244"
},{
    "citysName": "泉州",
    "linkageid": "245"
},{
    "citysName": "漳州",
    "linkageid": "246"
},{
    "citysName": "南平",
    "linkageid": "247"
},{
    "citysName": "龙岩",
    "linkageid": "248"
},{
    "citysName": "宁德",
    "linkageid": "249"
}
],
"provinceName": "福建",
"linkageid": "15"
},
{
"citys": [
{
    "citysName": "南昌",
    "linkageid": "250"
},{
    "citysName": "景德镇",
    "linkageid": "251"
},{
    "citysName": "萍乡",
    "linkageid": "252"
},{
    "citysName": "九江",
    "linkageid": "253"
},{
    "citysName": "新余",
    "linkageid": "254"
},{
    "citysName": "鹰潭",
    "linkageid": "255"
},{
    "citysName": "赣州",
    "linkageid": "256"
},{
    "citysName": "吉安",
    "linkageid": "257"
},{
    "citysName": "宜春",
    "linkageid": "258"
},{
    "citysName": "抚州",
    "linkageid": "259"
},{
    "citysName": "上饶",
    "linkageid": "260"
}
],
"provinceName": "江西",
"linkageid": "16"
},
{
"citys": [
{
    "citysName": "济南",
    "linkageid": "261"
},{
    "citysName": "青岛",
    "linkageid": "262"
},{
    "citysName": "淄博",
    "linkageid": "263"
},{
    "citysName": "枣庄",
    "linkageid": "264"
},{
    "citysName": "东营",
    "linkageid": "265"
},{
    "citysName": "烟台",
    "linkageid": "266"
},{
    "citysName": "潍坊",
    "linkageid": "267"
},{
    "citysName": "济宁",
    "linkageid": "268"
},{
    "citysName": "泰安",
    "linkageid": "269"
},{
    "citysName": "威海",
    "linkageid": "270"
},{
    "citysName": "日照",
    "linkageid": "271"
},{
    "citysName": "莱芜",
    "linkageid": "272"
},{
    "citysName": "临沂",
    "linkageid": "273"
},{
    "citysName": "德州",
    "linkageid": "274"
},{
    "citysName": "聊城",
    "linkageid": "275"
},{
    "citysName": "滨州",
    "linkageid": "276"
},{
    "citysName": "菏泽",
    "linkageid": "277"
}
],
"provinceName": "山东",
"linkageid": "17"
},
{
"citys": [
{
    "citysName": "郑州",
    "linkageid": "278"
},{
    "citysName": "开封",
    "linkageid": "279"
},{
    "citysName": "洛阳",
    "linkageid": "280"
},{
    "citysName": "平顶山",
    "linkageid": "281"
},{
    "citysName": "安阳",
    "linkageid": "282"
},{
    "citysName": "鹤壁",
    "linkageid": "283"
},{
    "citysName": "新乡",
    "linkageid": "284"
},{
    "citysName": "焦作",
    "linkageid": "285"
},{
    "citysName": "濮阳",
    "linkageid": "286"
},{
    "citysName": "许昌",
    "linkageid": "287"
},{
    "citysName": "漯河",
    "linkageid": "288"
},{
    "citysName": "三门峡",
    "linkageid": "289"
},{
    "citysName": "南阳",
    "linkageid": "290"
},{
    "citysName": "商丘",
    "linkageid": "291"
},{
    "citysName": "信阳",
    "linkageid": "292"
},{
    "citysName": "周口",
    "linkageid": "293"
},{
    "citysName": "驻马店",
    "linkageid": "294"
}
],
"provinceName": "河南",
"linkageid": "18"
},
{
"citys": [
{
    "citysName": "武汉",
    "linkageid": "295"
},{
    "citysName": "黄石",
    "linkageid": "296"
},{
    "citysName": "十堰",
    "linkageid": "297"
},{
    "citysName": "宜昌",
    "linkageid": "298"
},{
    "citysName": "襄阳",
    "linkageid": "299"
},{
    "citysName": "鄂州",
    "linkageid": "300"
},{
    "citysName": "荆门",
    "linkageid": "301"
},{
    "citysName": "孝感",
    "linkageid": "302"
},{
    "citysName": "荆州",
    "linkageid": "303"
},{
    "citysName": "黄冈",
    "linkageid": "304"
},{
    "citysName": "咸宁",
    "linkageid": "305"
},{
    "citysName": "随州",
    "linkageid": "306"
},{
    "citysName": "恩施土家族苗族自治州",
    "linkageid": "307"
},{
    "citysName": "仙桃",
    "linkageid": "308"
},{
    "citysName": "潜江",
    "linkageid": "309"
},{
    "citysName": "天门",
    "linkageid": "310"
},{
    "citysName": "神农架",
    "linkageid": "311"
}
],
"provinceName": "湖北",
"linkageid": "19"
},
{
"citys": [
{
    "citysName": "长沙",
    "linkageid": "312"
},{
    "citysName": "株洲",
    "linkageid": "313"
},{
    "citysName": "湘潭",
    "linkageid": "314"
},{
    "citysName": "衡阳",
    "linkageid": "315"
},{
    "citysName": "邵阳",
    "linkageid": "316"
},{
    "citysName": "岳阳",
    "linkageid": "317"
},{
    "citysName": "常德",
    "linkageid": "318"
},{
    "citysName": "张家界",
    "linkageid": "319"
},{
    "citysName": "益阳",
    "linkageid": "320"
},{
    "citysName": "郴州",
    "linkageid": "321"
},{
    "citysName": "永州",
    "linkageid": "322"
},{
    "citysName": "怀化",
    "linkageid": "323"
},{
    "citysName": "娄底",
    "linkageid": "324"
},{
    "citysName": "湘西土家族苗族自治州",
    "linkageid": "325"
}
],
"provinceName": "湖南",
"linkageid": "20"
},
{
"citys": [
{
    "citysName": "广州",
    "linkageid": "326"
},{
    "citysName": "韶关",
    "linkageid": "327"
},{
    "citysName": "深圳",
    "linkageid": "328"
},{
    "citysName": "珠海",
    "linkageid": "329"
},{
    "citysName": "汕头",
    "linkageid": "330"
},{
    "citysName": "佛山",
    "linkageid": "331"
},{
    "citysName": "江门",
    "linkageid": "332"
},{
    "citysName": "湛江",
    "linkageid": "333"
},{
    "citysName": "茂名",
    "linkageid": "334"
},{
    "citysName": "肇庆",
    "linkageid": "335"
},{
    "citysName": "惠州",
    "linkageid": "336"
},{
    "citysName": "梅州",
    "linkageid": "337"
},{
    "citysName": "汕尾",
    "linkageid": "338"
},{
    "citysName": "河源",
    "linkageid": "339"
},{
    "citysName": "阳江",
    "linkageid": "340"
},{
    "citysName": "清远",
    "linkageid": "341"
},{
    "citysName": "东莞",
    "linkageid": "342"
},{
    "citysName": "中山",
    "linkageid": "343"
},{
    "citysName": "潮州",
    "linkageid": "344"
},{
    "citysName": "揭阳",
    "linkageid": "345"
},{
    "citysName": "云浮",
    "linkageid": "346"
}
],
"provinceName": "广东",
"linkageid": "21"
},
{
"citys": [
{
    "citysName": "南宁",
    "linkageid": "347"
},{
    "citysName": "柳州",
    "linkageid": "348"
},{
    "citysName": "桂林",
    "linkageid": "349"
},{
    "citysName": "梧州",
    "linkageid": "350"
},{
    "citysName": "北海",
    "linkageid": "351"
},{
    "citysName": "防城港",
    "linkageid": "352"
},{
    "citysName": "钦州",
    "linkageid": "353"
},{
    "citysName": "贵港",
    "linkageid": "354"
},{
    "citysName": "玉林",
    "linkageid": "355"
},{
    "citysName": "百色",
    "linkageid": "356"
},{
    "citysName": "贺州",
    "linkageid": "357"
},{
    "citysName": "河池",
    "linkageid": "358"
},{
    "citysName": "来宾",
    "linkageid": "359"
},{
    "citysName": "崇左",
    "linkageid": "360"
}
],
"provinceName": "广西",
"linkageid": "22"
},
{
"citys": [
{
    "citysName": "海口",
    "linkageid": "361"
},{
    "citysName": "三亚",
    "linkageid": "362"
},{
    "citysName": "五指山",
    "linkageid": "363"
},{
    "citysName": "琼海",
    "linkageid": "364"
},{
    "citysName": "儋州",
    "linkageid": "365"
},{
    "citysName": "文昌",
    "linkageid": "366"
},{
    "citysName": "万宁",
    "linkageid": "367"
},{
    "citysName": "东方",
    "linkageid": "368"
},{
    "citysName": "定安县",
    "linkageid": "369"
},{
    "citysName": "屯昌县",
    "linkageid": "370"
},{
    "citysName": "澄迈县",
    "linkageid": "371"
},{
    "citysName": "临高县",
    "linkageid": "372"
},{
    "citysName": "白沙黎族自治县",
    "linkageid": "373"
},{
    "citysName": "昌江黎族自治县",
    "linkageid": "374"
},{
    "citysName": "乐东黎族自治县",
    "linkageid": "375"
},{
    "citysName": "陵水黎族自治县",
    "linkageid": "376"
},{
    "citysName": "保亭黎族苗族自治县",
    "linkageid": "377"
},{
    "citysName": "琼中黎族苗族自治县",
    "linkageid": "378"
},{
    "citysName": "西沙群岛",
    "linkageid": "379"
},{
    "citysName": "南沙群岛",
    "linkageid": "380"
},{
    "citysName": "中沙群岛的岛礁及其海域",
    "linkageid": "381"
}
],
"provinceName": "海南",
"linkageid": "23"
},
{
"citys": [
{
    "citysName": "成都",
    "linkageid": "382"
},{
    "citysName": "自贡",
    "linkageid": "383"
},{
    "citysName": "攀枝花",
    "linkageid": "384"
},{
    "citysName": "泸州",
    "linkageid": "385"
},{
    "citysName": "德阳",
    "linkageid": "386"
},{
    "citysName": "绵阳",
    "linkageid": "387"
},{
    "citysName": "广元",
    "linkageid": "388"
},{
    "citysName": "遂宁",
    "linkageid": "389"
},{
    "citysName": "内江",
    "linkageid": "390"
},{
    "citysName": "乐山",
    "linkageid": "391"
},{
    "citysName": "南充",
    "linkageid": "392"
},{
    "citysName": "眉山",
    "linkageid": "393"
},{
    "citysName": "宜宾",
    "linkageid": "394"
},{
    "citysName": "广安",
    "linkageid": "395"
},{
    "citysName": "达州",
    "linkageid": "396"
},{
    "citysName": "雅安",
    "linkageid": "397"
},{
    "citysName": "巴中",
    "linkageid": "398"
},{
    "citysName": "资阳",
    "linkageid": "399"
},{
    "citysName": "阿坝州",
    "linkageid": "400"
},{
    "citysName": "甘孜州",
    "linkageid": "401"
},{
    "citysName": "凉山州",
    "linkageid": "402"
}
],
"provinceName": "四川",
"linkageid": "24"
},
{
"citys": [
{
    "citysName": "贵阳",
    "linkageid": "403"
},{
    "citysName": "六盘水",
    "linkageid": "404"
},{
    "citysName": "遵义",
    "linkageid": "405"
},{
    "citysName": "安顺",
    "linkageid": "406"
},{
    "citysName": "铜仁地区",
    "linkageid": "407"
},{
    "citysName": "黔西南州",
    "linkageid": "408"
},{
    "citysName": "毕节地区",
    "linkageid": "409"
},{
    "citysName": "黔东南州",
    "linkageid": "410"
},{
    "citysName": "黔南州",
    "linkageid": "411"
}
],
"provinceName": "贵州",
"linkageid": "25"
},
{
"citys": [
{
    "citysName": "昆明",
    "linkageid": "412"
},{
    "citysName": "曲靖",
    "linkageid": "413"
},{
    "citysName": "玉溪",
    "linkageid": "414"
},{
    "citysName": "保山",
    "linkageid": "415"
},{
    "citysName": "昭通",
    "linkageid": "416"
},{
    "citysName": "丽江",
    "linkageid": "417"
},{
    "citysName": "思茅",
    "linkageid": "418"
},{
    "citysName": "临沧",
    "linkageid": "419"
},{
    "citysName": "楚雄州",
    "linkageid": "420"
},{
    "citysName": "红河州",
    "linkageid": "421"
},{
    "citysName": "文山州",
    "linkageid": "422"
},{
    "citysName": "西双版纳",
    "linkageid": "423"
},{
    "citysName": "大理",
    "linkageid": "424"
},{
    "citysName": "德宏",
    "linkageid": "425"
},{
    "citysName": "怒江",
    "linkageid": "426"
},{
    "citysName": "迪庆",
    "linkageid": "427"
}
],
"provinceName": "云南",
"linkageid": "26"
},
{
"citys": [
{
    "citysName": "拉萨",
    "linkageid": "428"
},{
    "citysName": "昌都",
    "linkageid": "429"
},{
    "citysName": "山南",
    "linkageid": "430"
},{
    "citysName": "日喀则",
    "linkageid": "431"
},{
    "citysName": "那曲",
    "linkageid": "432"
},{
    "citysName": "阿里",
    "linkageid": "433"
},{
    "citysName": "林芝",
    "linkageid": "434"
}
],
"provinceName": "西藏",
"linkageid": "27"
},
{
"citys": [
{
    "citysName": "西安",
    "linkageid": "435"
},{
    "citysName": "铜川",
    "linkageid": "436"
},{
    "citysName": "宝鸡",
    "linkageid": "437"
},{
    "citysName": "咸阳",
    "linkageid": "438"
},{
    "citysName": "渭南",
    "linkageid": "439"
},{
    "citysName": "延安",
    "linkageid": "440"
},{
    "citysName": "汉中",
    "linkageid": "441"
},{
    "citysName": "榆林",
    "linkageid": "442"
},{
    "citysName": "安康",
    "linkageid": "443"
},{
    "citysName": "商洛",
    "linkageid": "444"
}
],
"provinceName": "陕西",
"linkageid": "28"
},
{
"citys": [
{
    "citysName": "兰州",
    "linkageid": "445"
},{
    "citysName": "嘉峪关",
    "linkageid": "446"
},{
    "citysName": "金昌",
    "linkageid": "447"
},{
    "citysName": "白银",
    "linkageid": "448"
},{
    "citysName": "天水",
    "linkageid": "449"
},{
    "citysName": "武威",
    "linkageid": "450"
},{
    "citysName": "张掖",
    "linkageid": "451"
},{
    "citysName": "平凉",
    "linkageid": "452"
},{
    "citysName": "酒泉",
    "linkageid": "453"
},{
    "citysName": "庆阳",
    "linkageid": "454"
},{
    "citysName": "定西",
    "linkageid": "455"
},{
    "citysName": "陇南州",
    "linkageid": "456"
},{
    "citysName": "临夏",
    "linkageid": "457"
},{
    "citysName": "甘州",
    "linkageid": "458"
}
],
"provinceName": "甘肃",
"linkageid": "29"
},
{
"citys": [
{
    "citysName": "西宁",
    "linkageid": "459"
},{
    "citysName": "海东",
    "linkageid": "460"
},{
    "citysName": "海州",
    "linkageid": "461"
},{
    "citysName": "黄南州",
    "linkageid": "462"
},{
    "citysName": "海南州",
    "linkageid": "463"
},{
    "citysName": "果洛州",
    "linkageid": "464"
},{
    "citysName": "玉树州",
    "linkageid": "465"
},{
    "citysName": "海西州",
    "linkageid": "466"
}
],
"provinceName": "青海",
"linkageid": "30"
},
{
"citys": [
{
    "citysName": "银川",
    "linkageid": "467"
},{
    "citysName": "石嘴山",
    "linkageid": "468"
},{
    "citysName": "吴忠",
    "linkageid": "469"
},{
    "citysName": "固原",
    "linkageid": "470"
},{
    "citysName": "中卫",
    "linkageid": "471"
}
],
"provinceName": "宁夏",
"linkageid": "31"
},
{
"citys": [
{
    "citysName": "乌鲁木齐",
    "linkageid": "472"
},{
    "citysName": "克拉玛依",
    "linkageid": "473"
},{
    "citysName": "吐鲁番",
    "linkageid": "474"
},{
    "citysName": "哈密",
    "linkageid": "475"
},{
    "citysName": "昌吉州",
    "linkageid": "476"
},{
    "citysName": "博尔州",
    "linkageid": "477"
},{
    "citysName": "巴音郭楞州",
    "linkageid": "478"
},{
    "citysName": "阿克苏地区",
    "linkageid": "479"
},{
    "citysName": "克孜勒苏柯尔克孜自治州",
    "linkageid": "480"
},{
    "citysName": "喀什地区",
    "linkageid": "481"
},{
    "citysName": "和田地区",
    "linkageid": "482"
},{
    "citysName": "伊犁州",
    "linkageid": "483"
},{
    "citysName": "塔城地区",
    "linkageid": "484"
},{
    "citysName": "阿勒泰地区",
    "linkageid": "485"
},{
    "citysName": "石河子",
    "linkageid": "486"
},{
    "citysName": "阿拉尔",
    "linkageid": "487"
},{
    "citysName": "图木舒克",
    "linkageid": "488"
},{
    "citysName": "五家渠",
    "linkageid": "489"
}
],
"provinceName": "新疆",
"linkageid": "32"
},
{
"citys": [
{
    "citysName": "台湾",
    "linkageid": "33"
}
],
"provinceName": "台湾",
"linkageid": "33"
},
{
"citys": [
{
    "citysName": "香港",
    "linkageid": "34"
}
],
"provinceName": "香港",
"linkageid": "34"
},
{
"citys": [
{
    "citysName": "澳门",
    "linkageid": "35"
}
],
"provinceName": "澳门",
"linkageid": "35"
},

        
    ],

       alltype: [
       
{
"types": [
{
    "typeName": "婚姻家庭",
    "cid": "3367"
},{
    "typeName": "遗产继承",
    "cid": "3368"
},{
    "typeName": "消费维权",
    "cid": "3369"
},{
    "typeName": "抵押担保",
    "cid": "3370"
},{
    "typeName": "合同纠纷",
    "cid": "3371"
},{
    "typeName": "劳动纠纷",
    "cid": "3372"
},{
    "typeName": "人身损害",
    "cid": "3373"
},{
    "typeName": "保险理赔",
    "cid": "3374"
},{
    "typeName": "拆迁安置",
    "cid": "3375"
},{
    "typeName": "债权债务",
    "cid": "3376"
},{
    "typeName": "医疗纠纷",
    "cid": "3377"
},{
    "typeName": "交通事故",
    "cid": "3378"
}
],
"bigtype": "民事类",
"cid": "3361"
},
{
"types": [
{
    "typeName": "工程建筑",
    "cid": "3379"
},{
    "typeName": "房产纠纷",
    "cid": "3380"
},{
    "typeName": "知识产权",
    "cid": "3381"
},{
    "typeName": "合伙加盟",
    "cid": "3382"
},{
    "typeName": "个人独资",
    "cid": "3383"
},{
    "typeName": "金融证券",
    "cid": "3384"
},{
    "typeName": "银行保险",
    "cid": "3385"
},{
    "typeName": "不当竞争",
    "cid": "3386"
},{
    "typeName": "经济仲裁",
    "cid": "3387"
},{
    "typeName": "网络法律",
    "cid": "3388"
},{
    "typeName": "招标投标",
    "cid": "3389"
},{
    "typeName": "财税",
    "cid": "3422"
}
],
"bigtype": "经济类",
"cid": "3362"
},
{
"types": [
{
    "typeName": "取保候审",
    "cid": "3390"
},{
    "typeName": "刑事辩护",
    "cid": "3391"
},{
    "typeName": "刑事自诉",
    "cid": "3392"
},{
    "typeName": "行政复议",
    "cid": "3393"
},{
    "typeName": "行政诉讼",
    "cid": "3394"
},{
    "typeName": "国家赔偿",
    "cid": "3395"
},{
    "typeName": "工商税务",
    "cid": "3396"
},{
    "typeName": "海关商检",
    "cid": "3397"
},{
    "typeName": "公安国安",
    "cid": "3398"
}
],
"bigtype": "刑事行政法类",
"cid": "3363"
},
{
"types": [
{
    "typeName": "海事海商",
    "cid": "3399"
},{
    "typeName": "国际贸易",
    "cid": "3400"
},{
    "typeName": "招商引资",
    "cid": "3401"
},{
    "typeName": "外商投资",
    "cid": "3402"
},{
    "typeName": "合资合作",
    "cid": "3403"
},{
    "typeName": "WTO事务",
    "cid": "3404"
},{
    "typeName": "倾销补贴",
    "cid": "3405"
},{
    "typeName": "涉外仲裁",
    "cid": "3406"
}
],
"bigtype": "涉外法律类",
"cid": "3364"
},
{
"types": [
{
    "typeName": "公司并购",
    "cid": "3407"
},{
    "typeName": "股份转让",
    "cid": "3408"
},{
    "typeName": "企业改制",
    "cid": "3409"
},{
    "typeName": "公司清算",
    "cid": "3410"
},{
    "typeName": "破产解散",
    "cid": "3411"
},{
    "typeName": "资产拍卖",
    "cid": "3412"
},{
    "typeName": "投资融资",
    "cid": "3423"
}
],
"bigtype": "公司专项法律类",
"cid": "3365"
},
{
"types": [
{
    "typeName": "工商查询",
    "cid": "3413"
},{
    "typeName": "资信调查",
    "cid": "3414"
},{
    "typeName": "合同审查",
    "cid": "3415"
},{
    "typeName": "调解谈判",
    "cid": "3416"
},{
    "typeName": "常年顾问",
    "cid": "3417"
},{
    "typeName": "私人律师",
    "cid": "3418"
},{
    "typeName": "文书代理",
    "cid": "3419"
},{
    "typeName": "移民留学",
    "cid": "3420"
},{
    "typeName": "商帐追收",
    "cid": "3421"
}
],
"bigtype": "其他非讼法律类",
"cid": "3366"
},
{
"types": [
{
    "typeName": "专利权",
    "cid": "3426"
},{
    "typeName": "著作权",
    "cid": "3427"
},{
    "typeName": "行政许可",
    "cid": "3428"
},{
    "typeName": "行政处罚",
    "cid": "3429"
},{
    "typeName": "刑事诉讼",
    "cid": "3430"
},{
    "typeName": "土地纠纷",
    "cid": "3431"
},{
    "typeName": "投资融资",
    "cid": "3432"
},{
    "typeName": "损害赔偿",
    "cid": "3433"
},{
    "typeName": "私募股权",
    "cid": "3434"
},{
    "typeName": "司法鉴定",
    "cid": "3435"
},{
    "typeName": "商标权",
    "cid": "3436"
},{
    "typeName": "民事诉讼",
    "cid": "3437"
},{
    "typeName": "律师服务",
    "cid": "3438"
},{
    "typeName": "公司设立",
    "cid": "3439"
},{
    "typeName": "公司清算",
    "cid": "3440"
},{
    "typeName": "公司法务",
    "cid": "3441"
},{
    "typeName": "非诉讼",
    "cid": "3442"
}
],
"bigtype": "其他类",
"cid": "3425"
},

  ]

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
        console.log(res);
        //obj.getcity();
        obj.getlawlist();

      },
      fail() {
        my.hideLoading();
        my.alert({ title: '定位失败' });
      },
    })
  },
  //e

  //s
  //城市选择666666666666666666666666666666666666666
  test(e){
  var idx=e.target.dataset.index;
  var mdata=this.data.provinces[idx].citys;
  var  temp=new Array();
  var  temp3=new Array();
  for(var i=0;i<mdata.length;i++){
    
    var tp=mdata[i].citysName;
    var tp3=mdata[i].linkageid;
    temp.push(tp);
    temp3.push(tp3);
}
 this.setData({
    clickid:idx,
     clickitem:temp,
     temp3:temp3
    
  })
},
chosed(e){
      var idx=e.target.dataset.index;
      console.log(this.data.temp3[idx]);
        this.setData({
   
     city:this.data.clickitem[idx],
     condition:false,
     dqid:this.data.temp3[idx]
    
    })
    this.getlawlist();
},
   chosecity(){
         console.log(11111)
         this.setData({
             condition:true,
             condition2:false
         })
        },
//城市选择666666666666666666666666666666666666666
//专长选择777777777777777777777777777777777777777
  test1(e){
  var idx=e.target.dataset.index;
  var mdata=this.data.alltype[idx].types;
  var  temp1=new Array();
  var  temp4=new Array();
  for(var i=0;i<mdata.length;i++){
    
    var tp=mdata[i].typeName;
    var tp4=mdata[i].cid;
    temp1.push(tp);
    temp4.push(tp4);
  }
 this.setData({
    clickid:idx,
     clickitem1:temp1,
     temp4:temp4
    
  })
},
chosed1(e){
      var idx=e.target.dataset.index;
      
        this.setData({
   
     goodat:this.data.clickitem1[idx],
     condition2:false,
     cid:this.data.temp4[idx]
    
    })
    this.getlawlist();
},
chosetype(){
         console.log(11111)
         this.setData({
             condition2:true,
             condition:false
             
         })
        },



//专长选择777777777777777777777777777777777777777

onLoad() {
//初始化城市666666666666666666666666666666
this.location();
 var mdata=this.data.provinces[0].citys;
  var  temp=new Array();
  var  temp3=new Array();
  var  temp4=new Array();
  for(var i=0;i<mdata.length;i++){
    // console.log(i);
    // console.log(mdata[i]);
    var tp=mdata[i].citysName;
    var tp3=mdata[i].linkageid;
    temp.push(tp);
    temp3.push(tp3);
  }
  
  this.setData({
    
     clickitem:temp
    
    })
    //初始化城市666666666666666666666666666666
    //初始化专长77777777777777777777777777777
 var mdata1=this.data.alltype[0].types;
  var  temp1=new Array();
  for(var i=0;i<mdata1.length;i++){
    // console.log(i);
    // console.log(mdata[i]);
    var tp1=mdata1[i].typeName;
    var tp4=mdata1[i].cid;
    temp1.push(tp1);
    temp4.push(tp4);
  }
  
  this.setData({
    
     clickitem1:temp1,
     temp3:temp3,
     temp4:temp4
    
    })
       //初始化专长77777777777777777777777777777
    },
    tip(){
        my.showToast({
          content: '亲，该功能正在努力开发中呦', // 文字内容
          success: (res) => {
            
          },
        });
    },

getlawlist(){
var obj=this;

     my.httpRequest({
  url: 'http://www.9ask.cn/api.php?op=zfb&type=axlist',
  method: 'POST',
   data: {
    key: app.randomWord(true,32,32),
    lng:obj.data.lng,
    lat:obj.data.lat,
    page:obj.data.page,
    cid:obj.data.cid,
    dqid:obj.data.dqid,
  },
  dataType: 'json',
  success: function(res) {
    //my.alert({content: 'suc'});
     if(res.data.errcode==990){
    //   my.alert({content: '亲,已经没有更多了^_^'});
    }else{
      var lawlist=obj.data.page==1?res.data.msg:obj.data.lawlist.concat(res.data.msg);
      obj.setData({
         lawlist: lawlist,
      })
    }
    //console.log(obj.data.t1);
    
    
    
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
//e
  
  //下拉刷新-s
  lower(){
 
   var obj=this;
   var page=obj.data.page+1;
   obj.setData({
        page: page,
      })
     obj.getlawlist();

},
  //下拉刷新-e



});
