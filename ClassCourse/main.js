// $(function(){
//     //#=id 
//     $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

//     let topicCount = topic.length;
//     for(let x=0;x<topicCount;x++){
//         $("#courseTable").append(
//             `<tr><td>${x+1}</td><td>預計日期</td><td>${topic[x]}</td></tr>`
//         )
//     }

// });


//開始改變日期字串
$(function(){
    //#=id 
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    let topicCount = topic.length;

    //1秒 = 1000毫秒
    //一天有24小時；一小時有60分鐘；一分鐘有60秒 再改成毫秒
    let millisecsPerDay = 24*60*60*1000;
  
    for(let x=0;x<topicCount;x++){
        $("#courseTable").append(
            `<tr><td>${x+1}</td><td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().substring(5,)}</td><td>${topic[x]}</td></tr>`
        )
        
    }
});

