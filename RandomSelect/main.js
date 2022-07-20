// 用jQuery匯入並且換掉標題
// $(function(){
//     $("input").on("click",function(){
//         // alert("hi");
//         $("h1").text("Hello");
//     })  
//     //$("input")=getElementsByTagName("input")
//     //addEventListener=.on("click",function(){ })
//     //$("h1")=getElementsByTagName("h1") ；
//     //.text("") = 再去設定innerHTML改掉文字內容
// })

// 換掉標題成指定內容
// $(function(){
//     $("input").on("click",function(){
//         // alert("hi");
//         $("h1").text($("li").eq(0).text()); //可以透過eq去指定要哪個
//     })  
// })

// 變成隨機亂數
// $(function(){
//     $("input").on("click",function(){
//         // alert("hi");
//         $("h1").text($("li").eq(Math.floor(Math.random()*3)).text()); 
//     })  
// })


// // 調整成彈性的數值以防有人更改數目造成無法使用，再設變數簡化程式
// $(function(){
//     $("input").on("click",function(){
//         // alert("hi");
//         let numberOfListItem = $("li").length;
//         let randomChildNumber = Math.floor(Math.random()*$("li").length);
//         $("h1").text($("li").eq(randomChildNumber).text()); 
//     })  
// })

let foodImg=["n.jpg","r.jpg","d.jpg","k.jpg","m.jpg"]
    
$(function(){
    $("input").on("click",function(){
        // alert("hi");
        let numberOfListItem = $(".c").length;
        let randomChildNumber = Math.floor(Math.random()*$(".c").length);
        $("h1").text($(".c").eq(randomChildNumber).text()); 
        $("img").attr("src",foodImg[randomChildNumber]);
    })  
})
