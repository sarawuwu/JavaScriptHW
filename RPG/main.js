let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
const gridLength= 200;

//initial/start/beginning
$(function()
{
    mapArray= 
    [//0-可走,1-障礙,2-終點,3-敵人
    [0,1,1],
    [0,0,0],
    [3,1,2]
    ]; 
    ctx =$("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src= "images/spriteSheet.png";
    currentImgMain=
    {
        "x":0,
        "y":0
    };

    //繪製主角到畫面上 - 有圖片物件還沒載入完成的疑慮
    imgMain.onload =function()
    {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    };
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src="images/Enemy.png";
    imgMountain.onload=function()
    {
        imgEnemy.onload=function()
        {
            for(var x in mapArray)
            {
                for(var y in mapArray[x])
                {
                    if(mapArray[x][y]==1)
                    {
                        //Draw Mountair
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                    }else if(mapArray[x][y]==3)
                        {
                            ////Draw Mountair
                            ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                    }
                }
            }
        }
    };
});
//user interaction/event trigger
$(document).on("keydown",function(event)
{
    
        let targetimg,targetBlock,cutimagerPositionX;
    //1.判斷使用者按了甚麼
    //2.判斷目標位置那一個是什麼
    //3.決定要做的事情(只是轉頭/可以過去/..)
    targetImg=
    {//Canvas(x,y)
        "x":-1,"y":-1
    };
    targetBlock = 
    {
        //Data 2D array
        "x":-1, "y":-1
    }
    event.preventDefault();
    switch(event.code)
    {
        case "ArrowLeft": 
        targetImg.x = currentImgMain.x - gridLength;
        targetImg.y =currentImgMain.y;
        cutImagePositionX =175;
        break;
        case "ArrowUp": 
        targetImg.x = currentImgMain.x;
        targetImg.y =currentImgMain.y - gridLength;
        cutImagePositionX =355;
        break;
        case "ArrowRight": 
        targetImg.x = currentImgMain.x + gridLength;
        targetImg.y =currentImgMain.y;
        cutImagePositionX =540;
        break;
        case "ArrowDown": 
        targetImg.x = currentImgMain.x;
        targetImg.y =currentImgMain.y+ gridLength;
        cutImagePositionX =0;
        break;
        default:
            return;
    }
    if(targetImg.x<=400 && targetImg.x>=0 && targetImg.y<=400 && targetImg.y>= 0)
    {
        targetBlock.x=targetImg.y /gridLength;
        targetBlock.y=targetImg.x /gridLength;
    }else
    {
        targetBlock.x=-1;
        targetBlock.y=-1;
    }
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);

    if(targetBlock.x !=-1 && targetBlock.y !=-1)
    {
        switch(mapArray[targetBlock.x][targetBlock.y])
        {
            case 0://一般道路(可移動)
            $("#talkBox").text("");
            currentImgMain.x =targetImg.x;
            currentImgMain.y=targetImg.y;
            break;
            case 1://Mountain 有障礙物(不可移動)
                $("#talkBox").text("有山");
                break;
            case 2:
                 $("#talkBox").text("抵達終點");
                 currentImgMain.x =targetImg.x;
                 currentImgMain.y =targetImg.y;
                 break;
            case 3://Enemy
                $("#talkBox").text("Hello");
                break;                    
        }
    }else
    {
        $("#talkBox").text("邊界");
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    //Re-Draw the Mailn


});