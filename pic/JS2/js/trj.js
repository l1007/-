var rule = {
    title:'朱古力',
    host:'https://pigav.com',
    url:'/fyclass/page/fypage',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'亚洲&无码&A片&新作',//静态分类名称拼接
    class_url:'亞洲av線上看&無碼av線上看&a片&新作上市',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.l-post div&&a;a&&title;span&&data-bgsrc;.absolute.bottom-1&&Text;a&&href',
    二级:'*',
}
