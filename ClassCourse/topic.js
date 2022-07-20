let topic=[
    "停課-尚未開學",
    "停課-國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷"
];

let startDate = new Date();

// 幫忙設定好月份跟日期變成自己要的那天
function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    //歸零
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
  
}

// setMonthAndDay(2,21);
//變成這樣 : Mon Feb 21 2022 00:00:00 GMT+0800 (台北標準時間) {}

setMonthAndDay(7,1);

$("input").on("change",function(){
    }
)

// if (condition) {
    
// }

// $( "topic" ).on( "mouseover", function() {
//     $( this ).css( "color", "red" );
//   });