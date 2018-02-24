/**
 * Created by lenovo on 2018/2/24.
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

//$subpannel = $('.sub-pannel');
//$navlistLi = $('.menubox').find('ul li')
//$navList =$('.nav-list')
//$omb = $('.open-menu-btn')
//var x;
//$omb.on('mouseover',function(){
//    $navList.css('display','block')
//    clearTimeout(x);
//})
//$omb.on('mouseout',function(){
//    x=setTimeout(yc,400);
//})
//$navList.on('mouseover', function () {
//    clearTimeout(x);
//})
//$navList.on('mouseout', function () {
//    x=setTimeout(yc,400);
//})
//function yc(){
//    $navList.css('display','none')
//}
//
//$navlistLi.on('mouseover',function(){
//    $(this).attr('class','cx').siblings().attr('class','');
//    $subpannel.eq( $(this).index() ).attr('id','appear').siblings().attr('id','');
//    clearTimeout(x);
//})
//$subpannel.on('mouseout',function(){
//    x=setTimeout(hide,200);
//})
//$navlistLi.on('mouseout',function(){
//    x=setTimeout(hide,200);
//})
//$subpannel.on('mouseover',function(){
//    clearTimeout(x);
//})
//function hide(){
//    $navlistLi.attr('class','')
//    $subpannel.attr('id','');
//}

//放大镜轮播图
$specList = $('#spec-list').find('ul li img')
$specN1 = $('#spec-n1').find(' img')
$specList.on('mouseover',function(){
    //$specN1.css('src','')
    $(this).attr('class','imgHover').siblings().attr('class','')

})