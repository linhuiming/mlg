/**
 * Created by lenovo on 2018/2/6.
 */
//我的麦乐购（鼠标移入移出）
$mg = $('.mygou');
$nc = $('.noneCon');
$mgi = $('.mygou').find('i').eq(0);
$mg.eq(0).on('mouseover',function(){
    $nc.eq(0).css('display', 'block')
    $mg.eq(0).css('background','#fff')
    $mg.eq(0).css('border','1px solid #ccc')
    $mg.eq(0).css('border-bottom','none')
    $mgi.css('background','url("../img/icon_index.png") no-repeat scroll -69px 0px')
})
$mg.eq(0).on('mouseout',function(){
    $nc.eq(0).css('display','none')
    $mg.eq(0).css('border','none')
    $mg.eq(0).css('background','#f5f5f5')
    $mgi.css('background','url("../img/icon_index.png") no-repeat scroll -89px 0px')
})
$mg.eq(1).on('mouseover',function(){
    $nc.eq(1).css('display','block')
    $mg.eq(1).css('background','#fff')
    $mg.eq(1).css('border','1px solid #ccc')
    $mg.eq(1).css('border-bottom','none')
})
$mg.eq(1).on('mouseout',function(){
    $nc.eq(1).css('display','none')
    $mg.eq(1).css('background','#f5f5f5')
})

//nav下划线移动
$navMainList = $('.navMain-list').eq(0);
$navMainListLi = $('.navMain-list').find('li');
$on = $('.on').find('a')
$onBg = $('.onBg')
$navMainListLi.eq(0).on('mouseover',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
$navMainListLi.eq(1).on('mouseover',function(){
    $onBg.css('left','56px')
    $onBg.css('width','64px')
    $on.css('color','#333')
})
$navMainListLi.eq(1).on('mouseout',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
$navMainListLi.eq(2).on('mouseover',function(){
    $onBg.css('left','144px')
    $onBg.css('width','62px')
})
$navMainListLi.eq(2).on('mouseout',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
$navMainListLi.eq(3).on('mouseover',function(){
    $onBg.css('left','230px')
    $onBg.css('width','50px')
})
$navMainListLi.eq(3).on('mouseout',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
$navMainListLi.eq(4).on('mouseover',function(){
    $onBg.css('left','304px')
    $onBg.css('width','64px')
})
$navMainListLi.eq(4).on('mouseout',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
$navMainListLi.eq(5).on('mouseover',function(){
    $onBg.css('left','391px')
    $onBg.css('width','64px')
})
$navMainListLi.eq(5).on('mouseout',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
$navMainListLi.eq(6).on('mouseover',function(){
    $onBg.css('left','481px')
    $onBg.css('width','64px')
})
$navMainListLi.eq(6).on('mouseout',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
$navMainListLi.eq(7).on('mouseover',function(){
    $onBg.css('left','568px')
    $onBg.css('width','48px')
})
$navMainListLi.eq(7).on('mouseout',function(){
    $onBg.css('left','0px')
    $onBg.css('width','32px')
    $on.css('color','#cb351a')
})
//二级菜单
$subpannel = $('.sub-pannel');
$navlistLi = $('.menubox').find('ul li')

$navlistLi.on('mouseover',function(){
    $(this).attr('class','cx').siblings().attr('class','');
    $subpannel.eq( $(this).index() ).attr('id','appear').siblings().attr('id','');
})
$navlistLi.on('mouseout',function(){
    $(this).attr('class','')
    $subpannel.eq( $(this).index() ).attr('id','');
})



//大轮播图
var $olLi = $('.market-btn').find('ul li');
var $ulLi = $('.market-pannel').find('ul li');
var iNow = 0;
var timer;

$olLi.on('mouseover',function(){

    $(this).attr('class','active').siblings().attr('class','');
    $ulLi.eq( $(this).index() ).animate({opacity:1},500).siblings().animate({opacity:0},500);
    iNow = $(this).index();
});

$('.market-btn').on('mouseover',function(){
    clearInterval(timer);
});
$('.market-btn').on('mouseout',function(){
    timer = setInterval(run,2000);
});

timer = setInterval(run,2000);

function run(){
    if(iNow == $olLi.length-1){
        iNow = 0;
    }
    else{
        iNow++;
    }
    $olLi.eq(iNow).attr('class','active').siblings().attr('class','');
    $ulLi.eq( iNow ).animate({opacity:1},500).siblings().animate({opacity:0},500);
}
