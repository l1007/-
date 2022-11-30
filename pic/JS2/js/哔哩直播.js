// 道长 drpy仓库 https://gitcode.net/qq_32394351/dr_py
// 道长 drpy安卓本地搭建说明 https://gitcode.net/qq_32394351/dr_py/-/blob/master/%E5%AE%89%E5%8D%93%E6%9C%AC%E5%9C%B0%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.md
// 道长 drpy写源 模板规则说明 https://gitcode.net/supertlo/dr_py#%E6%A8%A1%E6%9D%BF%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E
// 道长 drpy写源 套模模版 https://gitcode.net/qq_32394351/dr_py/-/raw/master/js/%E6%A8%A1%E6%9D%BF.js
// 道长 drpy写源 影片教程 http://101.34.67.237:5244/%E6%95%99%E8%82%B2/drpy
// 道长 drpy写源 影片教程(m3u8切片) https://freedrpy.run.goorm.io/txt/jc/playlist.m3u8
// 海阔下载 https://haikuo.lanzoui.com/u/GoldRiver
// Pluto Player官方TG https://t.me/PlutoPlayer
// Pluto Player官方TG https://t.me/PlutoPlayerChannel

var rule = {
    title:'哔哩直播',
    host:'https://api.live.bilibili.com',
    homeUrl:'/xlive/web-interface/v1/second/getUserRecommend?page=1&page_size=30&platform=web',//用于"分类获取"和"推荐获取"
    url:'/xlive/web-interface/v1/second/getList?platform=web&parent_area_id=fyclass&area_id=fyfilter&sort_type=online&page=fypage',
    class_name:'娱乐&生活&知识&赛事',
    class_url:'10&2&3&6&1&5&9&11&13&300',
    filterable: 1,
    filter_url: '{{fl.area}}',
    filter_def:{
        10:{area:'33'},
        9:{area:'371'},
        11:{area:'376'},
        13:{area:'561'}
    },
    filter: {
        "9":[{"key":"area","name":"分区","value":[{"n":"虚拟主播","v":"371"},{"n":"3D虚拟主播","v":"697"}] }],
        "10":[{"key":"area","name":"分区","value":[{"n":"生活分享","v":"646"},{"n":"运动","v":"628"},{"n":"搞笑","v":"624"},{"n":"手工绘画","v":"627"},{"n":"萌宠","v":"369"},{"n":"美食","v":"367"},{"n":"时尚","v":"378"},{"n":"影音馆","v":"33"}] }],
        "11":[{"key":"area","name":"分区","value":[{"n":"社科法律心理","v":"376"},{"n":"人文历史","v":"702"},{"n":"校园学习","v":"372"},{"n":"职场·技能","v":"377"},{"n":" 科技","v":"375"},{"n":"科学科普","v":"701"},{"n":"时政","v":"715"}] }],
        "13":[{"key":"area","name":"分区","value":[{"n":"游戏赛事","v":"561"},{"n":"体育赛事","v":"562"},{"n":"赛事综合","v":"563"}] }]
    },
    detailUrl:'https://live.bilibili.com/fyid',//二级详情拼接链接(json格式用)
    // detailUrl:'https://api.live.bilibili.com/xlive/web-room/v1/playUrl/playUrl?cid=fyid&platform=h5&otype=json&quality=0',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?__refresh__=true&page=fypage&page_size=42&order=online&platform=pc&highlight=1&single_column=0&keyword=**&search_type=live&dynamic_offset=0&preload=true',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Cookie": "searchneed=ok"
        //"Cookie": "" 
        // Cookie获取方法 https://github.com/UndCover/PyramidStore/blob/main/list.md#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    play_json:[{re:'*', json:{jx:0, parse:1}}],
    play_json:0,
    lazy:'',
    double:false,
    推荐:'*',
    一级:'json:data.list;title;system_cover;uname;roomid',
    二级:'*',
    搜索:'json:data.result.live_room;*;cover;*;*',
}