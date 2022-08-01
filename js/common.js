$(function(){

    /*팝업창*/
    $('.find-btn').on('click',function(){
        $('.pop-search,.pop-bg').show();
        $('.pop-sitemap').hide();
    })

    $('.site-btn').on('click',function(){
        $('.pop-sitemap,.pop-bg').show();
        $('.pop-search').hide();
    })

    $('.pop-bg').on('click',function(){
        $('.pop-search,.pop-sitemap,.pop-bg').hide();
    })


    /*행사상세페이지 스케줄*/
    $('.btn-event .btn-img').on('click',function(){
        if($(this).attr("src") == "images/gray_bottom_btn1.png"){
               $(this).attr("src","images/gray_top_btn.png");
            } else {
               $(this).attr("src","images/gray_bottom_btn1.png");
            }
        return false;
    })

})//jq
