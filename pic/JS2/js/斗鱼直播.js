var rule = {
    title:'斗鱼直播',
    host:'https://m.douyu.com',
    homeUrl:'/api/home/mix',//网站的首页链接,用于分类获取和推荐获取
    // url:'/api/room/list?page=fypage&type=fyclass',
    url:'/api/room/list?page=fypage&type=fyfilter',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}',
    filter:{
        "yl":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"yl"},{"n":"一起看","v":"yqk"},{"n":"音乐","v":"music"},{"n":"户外","v":"HW"},{"n":"美食","v":"ms"}]}]
    },
    filter_def:{
        yl:{cateId:'yqk'}
    },
    class_name:'娱乐天地',// /api/cate/list
    class_url:'yl',
    // detailUrl:'/fyid',//二级详情拼接链接(json格式用)
    detailUrl: 'http://live.yj1211.work/api/live/getRoomInfo?uid=&platform=douyu&roomId=fyid',// JustLive
    searchUrl:'/api/search/liveRoom?#did=10000000000000000000000000001501&limit=20&offset=0&sk=**;post',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    // lazy:"js:function getSign(script,rid,did,tt){let result=script.match(/(function ub98484234.*)\\s(var.*)/)[0];log('result------>'+result);let func_ub9=result.replace(/eval.*;}/,'strc;}',result);log('func_ub9------>'+func_ub9);eval(func_ub9);let res=ub98484234();let v=res.match(/v=(\\d+)/)[0].replace('v=','');let rb=md5(rid+did+tt+v);let func_sign=res.replace(/return rt;}\\);?/,'return rt;}');func_sign=func_sign.replace('(function (','function sign(');func_sign=func_sign.replace('CryptoJS.MD5(cb).toString()','\\\"'+rb+'\\\"');eval(func_sign);let params=sign(rid,did,tt)+'&ver=219032101&rid={}&rate=-1&rid='+rid;return params}let html=fetch(input);let rid=html.match(/rid\\\":(.*?),\\\"vipId/)[1];let tt=Date.parse(new Date()).toString().substr(0,10);let did='10000000000000000000000000001501';let param_body=getSign(html,rid,did,tt);let stream_json=fetch('https://m.douyu.com/api/room/ratestream',{headers:{'content-type':'application/x-www-form-urlencoded'},body:param_body,method:'POST',});let stream=JSON.parse(stream_json).data;input=stream.url;",
    lazy:'',
    推荐:'json:data;list;*;*;*;*',
    double:true,
    一级:'json:data.list;roomName;roomSrc;nickname;rid',
    // 二级:'*',
    二级:'js:var d=[];var jo=JSON.parse(request(input)).data;VOD={vod_id:jo.roomId,vod_name:jo.roomName,vod_pic:jo.roomPic,type_name:jo.platForm.replace("douyu","斗鱼")+"."+jo.categoryName,vod_content:"🏷分区："+jo.platForm.replace("douyu","斗鱼")+"·"+jo.categoryName+" 🏷UP主："+jo.ownerName+" 🏷人气："+jo.online+(jo.isLive===1?" 🏷状态：正在直播":"状态：未开播"),};var playurl=JSON.parse(request("http://live.yj1211.work/api/live/getRealUrl?platform="+jo.platForm+"&roomId="+jo.roomId)).data;var name={OD:"JustLive",FD:"流畅",LD:"标清",SD:"高清",HD:"JustLive(预览)","2K":"2K","4K":"4K",FHD:"全高清",XLD:"极速",SQ:"普通音质",HQ:"高音质",};Object.keys(playurl).forEach(function(key){if(!/ayyuid|to/.test(key)){d.push({title:name[key],url:playurl[key]})}});d.push({title:"斗鱼解析1",url:"http://epg.112114.xyz/douyu/"+jo.roomId},{title:"斗鱼解析2",url:"https://www.aois.eu.org/live/douyu/"+jo.roomId},{title:"斗鱼解析3",url:"http://159.75.85.63:35455/douyu/"+jo.roomId});VOD.vod_play_from="播放源";VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");setResult(d);',
    搜索:'json:data.list;*;*;*;roomId',
}
