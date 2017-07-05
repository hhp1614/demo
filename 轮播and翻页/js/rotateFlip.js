var timer = null;//计时器
var index = 0;//下标
//根据图片数量，生成相等数量的按钮
for(var i=0;i<$('#box img').length;i++) {
  $('<button class="box-btn"></button>').appendTo('.btns');
}
//初始化
$('#box img').hide().eq(0).fadeIn();
$('.box-btn').removeClass('active').eq(0).addClass('active');
//点击事件
$('.box-btn').on('click',btnClickFn);
$('.btn-left').on('click',leftClickFn);
$('.btn-right').on('click',rightClickFn);
//计时器调用
timer = setInterval(timerFn,3000);
//点击事件函数
function btnClickFn () {
    clearInterval(timer);
    $('#box img').stop(true,true);
    index = $(this).index();
    $('#box img').fadeOut('slow').eq(index).fadeIn('slow');
    $('.box-btn').removeClass('active').eq(index).addClass('active');
    timer = setInterval(timerFn,3000);
}
function leftClickFn () {
    clearInterval(timer);
    $('#box img').stop(true,true);
    if(index <= 0) {
    index = $('#box img').length;
    }
    index--;
    $('#box img').fadeOut('slow').eq(index).fadeIn('slow');
    $('.box-btn').removeClass('active').eq(index).addClass('active');
    timer = setInterval(timerFn,3000);
}
function rightClickFn () {
    clearInterval(timer);
    $('#box img').stop(true,true);
    if(index >= $('#box img').length-1) {
    index = -1;
    }
    index++;
    $('#box img').fadeOut('slow').eq(index).fadeIn('slow');
    $('.box-btn').removeClass('active').eq(index).addClass('active');
    timer = setInterval(timerFn,3000);
}
//计时器函数
function timerFn () {
    if(index >= $('#box img').length-1) {
    index = -1;
    }
    index++;
    $('#box img').fadeOut('slow').eq(index).fadeIn('slow');
    $('.box-btn').removeClass('active').eq(index).addClass('active');
}
