$(document).ready(function(){
    $('.navbar-nav > li').click(function(){
        $(this).addClass('activ');
        $(this).find('span').removeClass('hidden');
        $(this).find('a').css('color', 'white');
    });
//     var onsize = function(){
//        var w = $(window).width();
//        if (w < 767){
//           $('.navbar').addClass();
//            
//        }
//        if (w > 767){
//            $('.navbar-nav > li').removeClass('activ');
//           
//        }
//    } 
//    $(window).resize(onsize);
//    onsize();

});