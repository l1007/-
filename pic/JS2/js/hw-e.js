var rule={
	title:'海外',
	// host:'https://olevod.live',
	host:'https://olevod.io',
	homeUrl:'/index.php/label/rankweek.html', // 人气排行榜周榜
	url:'/index.php/vod/show/id/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by or "/by/time"}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: {
		"1":[{"key":"cateId","name":"class","value":[{"n":"All","v":"1"},{"n":"Adventure","v":"6"},{"n":"Feature","v":"7"},{"n":"Action","v":"8"},{"n":"Cartoon","v":"9"},{"n":"Comedy","v":"11"},{"n":"Fantasy","v":"12"},{"n":"Horror","v":"20"},{"n":"Suspense","v":"21"},{"n":"Thriller","v":"22"},{"n":"War","v":"23"},{"n":"Musical","v":"24"},{"n":"Disaster","v":"25"},{"n":"Affectional","v":"26"},{"n":"Criminal","v":"27"},{"n":"Science","v":"28"},{"n":"Classics","v":"29"},{"n":"Internet","v":"30"}]},{"key":"area","name":"Area","value":[{"n":"All","v":""},{"n":"China","v":"/area/大陆"},{"n":"Hong Kong","v":"/area/香港"},{"n":"Taiwan","v":"/area/台湾"},{"n":"Us","v":"/area/欧美"},{"n":"Korea","v":"/area/韩国"},{"n":"Singapore Malaysia","v":"/area/新马"},{"n":"Thailand","v":"/area/泰国"},{"n":"India","v":"/area/印度"}]},{"key":"year","name":"Year","value":[{"n":"All","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"Language","value":[{"n":"ALL","v":""},{"n":"Mandarin","v":"/lang/国语"},{"n":"English","v":"/lang/英语"},{"n":"Cantonese","v":"/lang/粤语"},{"n":"Korean","v":"/lang/韩语"},{"n":"Japanese","v":"/lang/日语"}]},{"key":"by","name":"By","value":[{"n":"Time","v":"/by/time"},{"n":"Hits","v":"/by/hits"},{"n":"Score","v":"/by/score"}]}],
		"2":[{"key":"cateId","name":"class","value":[{"n":"All","v":"2"},{"n":"US","v":"13"},{"n":"Japan","v":"14"},{"n":"Korea","v":"15"},{"n":"China","v":"16"},{"n":"Thailand","v":"31"},{"n":"Hong Kong","v":"32"},{"n":"Taiwan","v":"33"},{"n":"Singapore Malaysia","v":"34"}]},{"key":"area","name":"Area","value":[{"n":"All","v":""},{"n":"China","v":"/area/大陆"},{"n":"Hong Kong","v":"/area/香港"},{"n":"Taiwan","v":"/area/台湾"},{"n":"Japan","v":"/area/日本"},{"n":"Korea","v":"/area/韩国"},{"n":"Us","v":"/area/欧美"},{"n":"Thailand","v":"/area/泰国"},{"n":"Singapore Malaysia","v":"/area/新马"}]},{"key":"year","name":"Year","value":[{"n":"All","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"Language","value":[{"n":"ALL","v":""},{"n":"Mandarin","v":"/lang/国语"},{"n":"English","v":"/lang/英语"},{"n":"Cantonese","v":"/lang/粤语"},{"n":"Korean","v":"/lang/韩语"},{"n":"Japanese","v":"/lang/日语"}]},{"key":"by","name":"By","value":[{"n":"Time","v":"/by/time"},{"n":"Hits","v":"/by/hits"},{"n":"Score","v":"/by/score"}]}],
		"3":[{"key":"cateId","name":"class","value":[{"n":"All","v":"3"},{"n":"US","v":"36"},{"n":"Japan","v":"37"},{"n":"Korea","v":"38"},{"n":"China","v":"39"},{"n":"Singapore Malaysia","v":"40"},{"n":"Hong Kong","v":"41"}]},{"key":"area","name":"Area","value":[{"n":"All","v":""},{"n":"China","v":"/area/大陆"},{"n":"Hong Kong","v":"/area/香港"},{"n":"Taiwan","v":"/area/台湾"},{"n":"Japan","v":"/area/日本"},{"n":"Korea","v":"/area/韩国"},{"n":"Us","v":"/area/欧美"}]},{"key":"year","name":"Year","value":[{"n":"All","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"Language","value":[{"n":"ALL","v":""},{"n":"Mandarin","v":"/lang/国语"},{"n":"English","v":"/lang/英语"},{"n":"Cantonese","v":"/lang/粤语"},{"n":"Korean","v":"/lang/韩语"},{"n":"Japanese","v":"/lang/日语"}]},{"key":"by","name":"By","value":[{"n":"Time","v":"/by/time"},{"n":"Hits","v":"/by/hits"},{"n":"Score","v":"/by/score"}]}],
		"4":[{"key":"cateId","name":"class","value":[{"n":"All","v":"4"},{"n":"US","v":"43"},{"n":"Japan","v":"44"},{"n":"Korea","v":"45"},{"n":"China","v":"46"},{"n":"Singapore Malaysia","v":"47"},{"n":"Hong Kong","v":"48"}]},{"key":"area","name":"Area","value":[{"n":"All","v":""},{"n":"China","v":"/area/大陆"},{"n":"Japan","v":"/area/日本"},{"n":"Korea","v":"/area/韩国"},{"n":"Us","v":"/area/欧美"}]},{"key":"year","name":"Year","value":[{"n":"All","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"},{"n":"2002","v":"/year/2002"},{"n":"2001","v":"/year/2001"},{"n":"2000","v":"/year/2000"}]},{"key":"lang","name":"Language","value":[{"n":"ALL","v":""},{"n":"Mandarin","v":"/lang/国语"},{"n":"English","v":"/lang/英语"},{"n":"Cantonese","v":"/lang/粤语"},{"n":"Korean","v":"/lang/韩语"},{"n":"Japanese","v":"/lang/日语"}]},{"key":"by","name":"By","value":[{"n":"Time","v":"/by/time"},{"n":"Hits","v":"/by/hits"},{"n":"Score","v":"/by/score"}]}],
		"50":[{"key":"area","name":"Area","value":[{"n":"All","v":""},{"n":"China","v":"/area/大陆"},{"n":"HK TW","v":"/area/港台"},{"n":"Us","v":"/area/欧美"}]},{"key":"year","name":"Year","value":[{"n":"All","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"},{"n":"2003","v":"/year/2003"}]},{"key":"lang","name":"Language","value":[{"n":"ALL","v":""},{"n":"Mandarin","v":"/lang/国语"},{"n":"English","v":"/lang/英语"},{"n":"Cantonese","v":"/lang/粤语"},{"n":"Korean","v":"/lang/韩语"},{"n":"Japanese","v":"/lang/日语"}]},{"key":"by","name":"By","value":[{"n":"Time","v":"/by/time"},{"n":"Hits","v":"/by/hits"},{"n":"Score","v":"/by/score"}]}],
		"51":[{"key":"area","name":"Area","value":[{"n":"All","v":""},{"n":"China","v":"/area/大陆"},{"n":"Hong Kong","v":"/area/香港"},{"n":"Taiwan","v":"/area/台湾"},{"n":"Japan","v":"/area/日本"},{"n":"Korea","v":"/area/韩国"},{"n":"Us","v":"/area/欧美"}]},{"key":"year","name":"Year","value":[{"n":"All","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"},{"n":"2004","v":"/year/2004"}]},{"key":"lang","name":"Language","value":[{"n":"ALL","v":""},{"n":"Mandarin","v":"/lang/国语"},{"n":"English","v":"/lang/英语"},{"n":"Cantonese","v":"/lang/粤语"},{"n":"Korean","v":"/lang/韩语"},{"n":"Japanese","v":"/lang/日语"}]},{"key":"by","name":"By","value":[{"n":"Time","v":"/by/time"},{"n":"Hits","v":"/by/hits"},{"n":"Score","v":"/by/score"}]}]
	},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		50:{cateId:'50'},
		51:{cateId:'51'}
	},
	searchable:2,//是否启用全局搜索,
	quickSearch:0,//是否启用快速搜索,
	headers:{
		'User-Agent':'MOBILE_UA',
	},
	class_name:'Movie&Drama&Tvshow&Comic&Documentary&Sport', // 分类筛选 /api.php/app/nav
	class_url:'1&2&3&4&50&51',
    play_parse:true,
	lazy:`js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == "1") {
			url = unescape(url)
		} else if (html.encrypt == "2") {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = url
		} else {
			input
		}
	`,
	limit:6,
	// double:true, // 推荐内容是否双层定位
	// 推荐:'body&&.hl-list-wrap;ul&&li;*;*;*;*',
	推荐:'.hl-rank-list&&.hl-list-item;*;*;.hl-item-hits&&Text;*',
	一级:'.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
	二级:{
		"title":"h2&&Text;li.hl-col-xs-12--em:eq(6)&&Text",
		"img":".hl-lazy&&data-original",
		"desc":"li.hl-col-xs-12:eq(1)&&Text;;;li.hl-col-xs-12--em:eq(2)&&Text;li.hl-col-xs-12--em:eq(3)&&Text",
		"content":".hl-content-text&&Text",
		"tabs":".hl-from-list&&li",
		"lists":".hl-plays-list:eq(#id) li"
	},

	// searchUrl:'/index.php/vod/search.html?wd=**',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	detailUrl:'/index.php/vod/detail/id/fyid.html', //非必填,二级详情拼接链接
	// 搜索:'.hl-list-wrap&&.hl-item-pic;*;*;*;*',
	搜索:'json:list;name;pic;;id',
}
