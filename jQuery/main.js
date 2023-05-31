$(function () {

    // 메뉴

    $(".main>li").hover(function () {
        $(this).find(".sub").stop().slideDown();
    }, function () {
        $(".sub").stop().slideUp()
    }) // hover



    // 이미지 슬라이드

    // var n = 0; // 0 1 2 3

    // setInterval(function () {

    //     if(n == 3 ){
    //         n=0;
    //     }else{
    //         n++;
    //     }//

    //     // n=(n+1) % 4;

    //     console.log("n : " , n);
    //     pos= n * (-400) +"px";
    //     console.log("pos : " , pos);

    //     $(".top_move").animate({top:pos}, 500)

    // }, 2500)

    setInterval(function(){
        $(".top_move").animate({top:"-400px"}, 500, function(){
            $(".top_move").append( $(".top_move li").eq(0) );
            $(".top_move").css({top: "0"})
        })//
    }, 2500)

 
    // 탭메뉴

    $(".not_gal h2").click(function(){

        $(".not_gal h2").removeClass("act");
        $(this).addClass("act");
        
        $(".not_gal ul").hide();
        $(this).next().show();

    })//click


    // 팝업

    $(".p_click").click(function(){
        $(".popup").show()
    })//

    $(".close").click(function(){
        $(".popup").hide()
    })//






}) //jquery