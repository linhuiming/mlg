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
$navlist = $('.menubox').find('ul')
$navlistLi = $navlist.find('li');
$navlistLi.eq(0).on('mouseover',function(){
    $subpannel.eq(0).css('display','block')
    $subpannel.eq(0).css('opacity','.95')
    $subpannel.eq(0).css('left','180px')
    $navlistLi.eq(0).css('background','#a90000')
    $navlistLi.eq(0).css('padding-left','10px')
})
$navlistLi.eq(0).on('mouseout',function(){
    $subpannel.eq(0).css('display','none')
    $subpannel.eq(0).css('opacity','.5')
    $subpannel.eq(0).css('left','170px')
    $navlistLi.eq(0).css('background','#cb3e25')
    $navlistLi.eq(0).css('padding-left','0px')
})
$navlistLi.eq(1).on('mouseover',function(){
    $subpannel.eq(1).css('display','block')
    $subpannel.eq(1).css('opacity','.95')
    $subpannel.eq(1).css('left','180px')
    $navlistLi.eq(1).css('background','#a90000')
    $navlistLi.eq(1).css('padding-left','10px')
})
$navlistLi.eq(1).on('mouseout',function(){
    $subpannel.eq(1).css('display','none')
    $subpannel.eq(1).css('opacity','.5')
    $subpannel.eq(1).css('left','170px')
    $navlistLi.eq(1).css('background','#cb3e25')
    $navlistLi.eq(1).css('padding-left','0px')
})
$navlistLi.eq(2).on('mouseover',function(){
    $subpannel.eq(2).css('display','block')
    $subpannel.eq(2).css('opacity','.95')
    $subpannel.eq(2).css('left','180px')
    $navlistLi.eq(2).css('background','#a90000')
    $navlistLi.eq(2).css('padding-left','10px')
})
$navlistLi.eq(2).on('mouseout',function(){
    $subpannel.eq(2).css('display','none')
    $subpannel.eq(2).css('opacity','.5')
    $subpannel.eq(2).css('left','170px')
    $navlistLi.eq(2).css('background','#cb3e25')
    $navlistLi.eq(2).css('padding-left','0px')
})
$navlistLi.eq(3).on('mouseover',function(){
    $subpannel.eq(3).css('display','block')
    $subpannel.eq(3).css('opacity','.95')
    $subpannel.eq(3).css('left','180px')
    $navlistLi.eq(3).css('background','#a90000')
    $navlistLi.eq(3).css('padding-left','10px')
})
$navlistLi.eq(3).on('mouseout',function(){
    $subpannel.eq(3).css('display','none')
    $subpannel.eq(3).css('opacity','.5')
    $subpannel.eq(3).css('left','170px')
    $navlistLi.eq(3).css('background','#cb3e25')
    $navlistLi.eq(3).css('padding-left','0px')
})
$navlistLi.eq(4).on('mouseover',function(){
    $subpannel.eq(4).css('display','block')
    $subpannel.eq(4).css('opacity','.95')
    $subpannel.eq(4).css('left','180px')
    $navlistLi.eq(4).css('background','#a90000')
    $navlistLi.eq(4).css('padding-left','10px')
})
$navlistLi.eq(4).on('mouseout',function(){
    $subpannel.eq(4).css('display','none')
    $subpannel.eq(4).css('opacity','.5')
    $subpannel.eq(4).css('left','170px')
    $navlistLi.eq(4).css('background','#cb3e25')
    $navlistLi.eq(4).css('padding-left','0px')
})
$navlistLi.eq(5).on('mouseover',function(){
    $subpannel.eq(5).css('display','block')
    $subpannel.eq(5).css('opacity','.95')
    $subpannel.eq(5).css('left','180px')
    $navlistLi.eq(5).css('background','#a90000')
    $navlistLi.eq(5).css('padding-left','10px')
})
$navlistLi.eq(5).on('mouseout',function(){
    $subpannel.eq(5).css('display','none')
    $subpannel.eq(5).css('opacity','.5')
    $subpannel.eq(5).css('left','170px')
    $navlistLi.eq(5).css('background','#cb3e25')
    $navlistLi.eq(5).css('padding-left','0px')
})
$navlistLi.eq(6).on('mouseover',function(){
    $subpannel.eq(6).css('display','block')
    $subpannel.eq(6).css('opacity','.95')
    $subpannel.eq(6).css('left','180px')
    $navlistLi.eq(6).css('background','#a90000')
    $navlistLi.eq(6).css('padding-left','10px')
})
$navlistLi.eq(6).on('mouseout',function(){
    $subpannel.eq(6).css('display','none')
    $subpannel.eq(6).css('opacity','.5')
    $subpannel.eq(6).css('left','170px')
    $navlistLi.eq(6).css('background','#cb3e25')
    $navlistLi.eq(6).css('padding-left','0px')
})
$navlistLi.eq(7).on('mouseover',function(){
    $subpannel.eq(7).css('display','block')
    $subpannel.eq(7).css('opacity','.95')
    $subpannel.eq(7).css('left','180px')
    $navlistLi.eq(7).css('background','#a90000')
    $navlistLi.eq(7).css('padding-left','10px')
})
$navlistLi.eq(7).on('mouseout',function(){
    $subpannel.eq(7).css('display','none')
    $subpannel.eq(7).css('opacity','.5')
    $subpannel.eq(7).css('left','170px')
    $navlistLi.eq(7).css('background','#cb3e25')
    $navlistLi.eq(7).css('padding-left','0px')
})
$navlistLi.eq(8).on('mouseover',function(){
    $subpannel.eq(8).css('display','block')
    $subpannel.eq(8).css('opacity','.95')
    $subpannel.eq(8).css('left','180px')
    $navlistLi.eq(8).css('background','#a90000')
    $navlistLi.eq(8).css('padding-left','10px')
})
$navlistLi.eq(8).on('mouseout',function(){
    $subpannel.eq(8).css('display','none')
    $subpannel.eq(8).css('opacity','.5')
    $subpannel.eq(8).css('left','170px')
    $navlistLi.eq(8).css('background','#cb3e25')
    $navlistLi.eq(8).css('padding-left','0px')
})
