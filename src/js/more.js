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
$specList = $('#spec-list').find('ul')
$specN1 = $('#spec-n1').find(' img')
$specListImg = $('#spec-list').find('ul li img')
$ys = $('#ys')
var a;
var b;
$specListImg.on('mouseover',function(){
    a = $(this).attr('src')
    $ys.attr('src',a)
    $(this).attr('class','imgHover').siblings().attr('class','')
})

$dd = $('.dd').find('a')
$dd.on('click',function(){
    $(this).attr('class','hover').siblings().attr('class','')
    $specListImg.eq($(this).index()).attr('class','imgHover').siblings().attr('class','');
    b = $specListImg.eq($(this).index()).attr('src')
    $ys.attr('src',b)
})


//放大镜//  详情放大镜
///*jqueryzoom&&jcarousel*/
//(function ($) {
//    $.fn.jqueryzoom = function (options) {
//        var settings = {
//            xzoom: 200,
//            yzoom: 200,
//            offset: 10,
//            position: "right",
//            lens: 1,
//            preload: 1
//        };
//        if (options) {
//            $.extend(settings, options);
//        }
//        var noalt = '';
//        $(this).hover(function () {
//            if ($("#spec-list img.imgHover").hasClass("GoodsVideoImg"))
//            {
//                return false;
//            }
//            var imageLeft = $(this).offset().left;
//            var imageTop = $(this).offset().top;
//            var imageWidth = $(this).children('img').get(0).offsetWidth;
//            var imageHeight = $(this).children('img').get(0).offsetHeight;
//            noalt = $(this).children("img").attr("alt");
//            var bigimage = $(this).children("img").attr("jqimg");
//            $(this).children("img").attr("alt", '');
//            if ($("div.zoomdiv").get().length == 0) {
////                bigimage = bigimage.replace("/45", "/50");
////                alert(bigimage);
//                $(this).after("<div class='zoomdiv'><img class='bigimg' src='" + bigimage + "'/></div>");
//                $(this).append("<div class='jqZoomPup'>&nbsp;</div>");
//            }
//            if (settings.position == "right") {
//                if (imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width) {
//                    leftpos = imageLeft - settings.offset - settings.xzoom;
//                } else {
//                    leftpos = imageLeft + imageWidth + settings.offset;
//                }
//            } else {
//                leftpos = imageLeft - settings.xzoom - settings.offset;
//                if (leftpos < 0) {
//                    leftpos = imageLeft + imageWidth + settings.offset;
//                }
//            }
//            $("div.zoomdiv").css({ top: 0, left: 370 });
//            $("div.zoomdiv").width(settings.xzoom);
//            $("div.zoomdiv").height(settings.yzoom);
//            $("div.zoomdiv").show();
//            if (!settings.lens) {
//                $(this).css('cursor', 'crosshair');
//            }
//            $(document.body).mousemove(function (e) {
//                mouse = new MouseEvent(e);
//                var bigwidth = $(".bigimg").get(0).offsetWidth;
//                var bigheight = $(".bigimg").get(0).offsetHeight;
//                var scaley = 'x';
//                var scalex = 'y';
//                if (isNaN(scalex) | isNaN(scaley)) {
//                    var scalex = (bigwidth / imageWidth);
//                    var scaley = (bigheight / imageHeight);
//                    $("div.jqZoomPup").width((settings.xzoom) / (scalex * 1));
//                    $("div.jqZoomPup").height((settings.yzoom) / (scaley * 1));
//                    if (settings.lens) {
//                        $("div.jqZoomPup").css('visibility', 'visible');
//                    }
//                }
//                xpos = mouse.x - $("div.jqZoomPup").width() / 2 - imageLeft;
//                ypos = mouse.y - $("div.jqZoomPup").height() / 2 - imageTop;
//                if (settings.lens) {
//                    xpos = (mouse.x - $("div.jqZoomPup").width() / 2 < imageLeft) ? 0 : (mouse.x + $("div.jqZoomPup").width() / 2 > imageWidth + imageLeft) ? (imageWidth - $("div.jqZoomPup").width() - 2) : xpos;
//                    ypos = (mouse.y - $("div.jqZoomPup").height() / 2 < imageTop) ? 0 : (mouse.y + $("div.jqZoomPup").height() / 2 > imageHeight + imageTop) ? (imageHeight - $("div.jqZoomPup").height() - 2) : ypos;
//                }
//                if (settings.lens) {
//                    $("div.jqZoomPup").css({ top: ypos, left: xpos });
//                }
//                scrolly = ypos;
//                $("div.zoomdiv").get(0).scrollTop = scrolly * scaley;
//                scrollx = xpos;
//                $("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex;
//            });
//        }, function () {
//            $(this).children("img").attr("alt", noalt);
//            $(document.body).unbind("mousemove");
//            if (settings.lens) {
//                $("div.jqZoomPup").remove();
//            }
//            $("div.zoomdiv").remove();
//        });
//        count = 0;
//        if (settings.preload) {
//            $('body').append("<div style='display:none;' class='jqPreload" + count + "'>360buy</div>");
//            $(this).each(function () {
//                var imagetopreload = $(this).children("img").attr("jqimg");
//                var content = jQuery('div.jqPreload' + count + '').html();
//                jQuery('div.jqPreload' + count + '').html(content + '<img src=\"' + imagetopreload + '\">');
//            });
//        }
//    }
//})(jQuery);
//function MouseEvent(e){
//    this.x=e.pageX;
//    this.y=e.pageY;}

















