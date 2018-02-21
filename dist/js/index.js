/**
 * Created by lenovo on 2018/2/6.
 */
$mg = $('.mygou').eq(0);
$nc = $('.noneCon')
$mg.on('mouseover',function(){
    $nc.css('display', 'block')
})
$mg.on('mouseout',function(){
    $nc.css('display','none')
    $mg.css('background','#fff')
    $mg.css('border','1px solid #ccc')
    $mg.css('border-bottom','none')
})


