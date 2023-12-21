$(document).ready(function(){
    $(".category>li").click(function(){
        let list = $(this) .index();

        $(".category>li>a").removeClass("btnOn");
        $(".category>li>a").eq(list).addClass("btnOn");

        $(".tab_wrap>").removeClass("on");
        $(".tab_wrap>").eq(list).addClass("on");
    });

    // 

    $(".faq_list>li").click(function(){
        let cont3 = $(this).hasClass("listOn");

        if(cont3) {
            $(this).removeClass("listOn");

        } else {
            $(".faq_list>li").removeClass("listOn");

            $(this).addClass("listOn");
        }
    })
});