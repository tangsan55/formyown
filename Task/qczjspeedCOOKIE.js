

//独立COOKIE文件     ck在``里面填写，多账号换行
let GetUserInfoheaderVal= `https://mobile.app.autohome.com.cn/speeduser_v1.0.0/user/v2/GetUserInfo.ashx?au=baa99df01c8449ac973f6ec57c7a69220c6dfb62&tid=0&p=1&_timestamp=1610296979&u=0&fc=0&v=1.7.1&pm=1&topauid=0&s=4&_sign=85084C74DE67983F1169A4EB30B792DD&useridept=2faa6dac3a3dca86e01e4ffa59779910&a=18
https://mobile.app.autohome.com.cn/speeduser_v1.0.0/user/v2/GetUserInfo.ashx?au=6151c84626c1441d88ac28ae7cc0703b0c982aa2&tid=0&p=1&_timestamp=1610287409&u=0&fc=0&v=1.7.1&pm=1&topauid=0&s=4&_sign=19F188C7840D494D798ABDE661835A44&useridept=682a154c0717ed1afef2a89015524a23&a=18`
let taskbodyVal= `_sign=D94F12890E704AAD83C02448BFE4B6FC&a=18&auth=baa99df01c8449ac973f6ec57c7a69220c6dfb62&autohomeua=iPhone%0913.5%09autohome%091.7.1%09iPhone&deviceid=9275affc4979e7a504f487a351bc27ce44777a7d&model=1&pm=1&timestamp=1610296937&v=1.7.1
_sign=F8E7567EA5AB99B7EDB5F3ECE94FCF82&a=18&auth=6151c84626c1441d88ac28ae7cc0703b0c982aa2&autohomeua=iPhone%0913.6.1%09autohome%091.7.1%09iPhone&deviceid=624d4bbb1c831fb820f22f193c5804906c3f7456&model=1&pm=1&timestamp=1610288206&v=1.7.1`
let activitybodyVal= `_sign=BEC333F12990EBD866F3F7A2C26FFDFB&a=18&abtest=a&auth=baa99df01c8449ac973f6ec57c7a69220c6dfb62&autohomeua=iPhone%0913.5%09autohome%091.7.1%09iPhone&deviceid=9275affc4979e7a504f487a351bc27ce44777a7d&pm=1&svs=1&timestamp=1610296937&v=1.7.1
_sign=9F474EB0252DFFB465BCB4C52178CD22&a=18&abtest=a&auth=6151c84626c1441d88ac28ae7cc0703b0c982aa2&autohomeua=iPhone%0913.6.1%09autohome%091.7.1%09iPhone&deviceid=624d4bbb1c831fb820f22f193c5804906c3f7456&pm=1&svs=1&timestamp=1610288206&v=1.7.1`
let addCoinbodyVal= `_sign=73B93B55E1F88E274585A763AE341BD8&_timestamp=1610296849&a=18&autohomeua=iPhone%0913.5%09autohome%091.7.1%09iPhone&deviceid=9275affc4979e7a504f487a351bc27ce44777a7d&moreflag=0&pm=1&source_channel_id=3503&user_id=208534370&v=1.7.1
_sign=454235CC75082896223F0ED9EDB43C52&_timestamp=1610286554&a=18&autohomeua=iPhone%0913.6.1%09autohome%091.7.1%09iPhone&deviceid=624d4bbb1c831fb820f22f193c5804906c3f7456&moreflag=0&pm=1&source_channel_id=3503&user_id=211298978&v=1.7.1`
let addCoin2bodyVal= `_sign=7E762DE6B567CBD9DF93E5D9E4B0E075&_timestamp=1610297093&a=18&autohomeua=iPhone%0913.5%09autohome%091.7.1%09iPhone&deviceid=9275affc4979e7a504f487a351bc27ce44777a7d&moreflag=1&pm=1&source_channel_id=3503&user_id=208534370&v=1.7.1
_sign=9DAEBDD3DD9CA5C1EA77891D078860C7&_timestamp=1610286095&a=18&autohomeua=iPhone%0913.6.1%09autohome%091.7.1%09iPhone&deviceid=624d4bbb1c831fb820f22f193c5804906c3f7456&moreflag=1&pm=1&source_channel_id=3503&user_id=211298978&v=1.7.1`


let qczjcookie = {
  GetUserInfoheaderVal: GetUserInfoheaderVal,  
  taskbodyVal: taskbodyVal,
  activitybodyVal: activitybodyVal,
  addCoinbodyVal: addCoinbodyVal,
  addCoin2bodyVal: addCoin2bodyVal,    

}

module.exports =  qczjcookie
  


