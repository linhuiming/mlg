/**
 * Created by lenovo on 2018/2/6.
 */
$mg = $('.mygou').find('a').eq(0);
$nc = $('.noneCon')
$mg.on('mouseover',function(){
    $nc.css('display', 'block')
})
$mg.on('mouseout',function(){
    $nc.css('display','none')
})


var