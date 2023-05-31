$(function(){
    //메뉴
    $(".main > li").hover(function(){
        $(this).children(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })
    //슬라이드이미지
    // var n = 0;

    // setInterval(function(){
    //     if(n<2){
    //         n++;
    //     }else{
    //         n=0;
    //     }

    //     pos = n * (-100) + "%"

    //     $(".left_move").animate({left:pos},500)
    // })

    setInterval(function(){
        $(".left_move").animate({left:"-100%"}, 500, function(){
            $(".left_move").append($(".left_move li").eq(0));
            $(".left_move").css({left:"0"})
        })
    },2500)

    //모달팝업
})