$(document).ready(function() {
    function restTime(){
        var timedate = new Date("10,19,2020");
        var now = new Date();
        var date = timedate.getTime() - now.getTime();
        var time = Math.floor(date/(1000*60*60*24));
        var sNumber = time.toString();
        var html = "";
        if(time>=0){
            for (var i = 0, len = sNumber.length; i < len; i += 1) {

                html += "<h3>"+sNumber.charAt(i)+"</h3>";

            }
            $(".header .time span").html(html);
        }
    }
    restTime()
////小屏幕

    $("#smenu").bind("click", function () {
        if ($(".header").is(".active")) {
            $(".header").removeClass("active");
            $(".masklayer").hide();
            //$('body').css("overflow-y",'auto');
        } else {

            $(".header").addClass("active");
            $(".masklayer").fadeIn("fast");
            //$('body').css("overflow-y",'hidden');

        }
    });

    $(".masklayer").bind("click", function () {
        $(".header").removeClass("active");
        $(".masklayer").hide();
        $('body').css("overflow-y", 'auto');
    });

})


$(function(){
    $(".rr").addClass("showdiv");
    $(".rr").click(function(){
        // $(".body-home").css("overflow","auto");
        $(".body_r").css("z-index",9999999);
        $(".body_r").addClass("showdiv");
        $(".nav_b").addClass("showdiv");
        $(".rr").removeClass("showdiv");
        $(".home").addClass("lock");
        setTimeout(function(){
            $(".body_home").removeClass("showdiv");
            $(".home1").addClass("showdiv");
            //$(".home1 .td strong").each(function(index, element) {
            //shownum($(this),3000);
            //});
        },500);
        setTimeout(function(){
            first=1;
        },1000);
    });

    $(".ll").click(function(){
        $(".body_r").removeClass("showdiv");
        $(".nav_b").removeClass("showdiv");
        $(".rr").addClass("showdiv");
        $(".home").removeClass("lock")
        setTimeout(function(){
            $(".nav_b .item:first").click();
            $(".home1").removeClass("showdiv");
            if(!$(".body_b").hasClass("showdiv")){
                $(".body_home").addClass("showdiv").focus();
            }
        },1100);
    });

    // $(".rr").click(function(){
    //
    //     $(".body-home").css("position","fixed");
    //     $(".body-home").css("overflow","hidden !important");
    //     $(".body_r").css("z-index",999999999);
    //     $(".body_r").addClass("showdiv");
    //     $(".nav_b").addClass("showdiv");
    //     $(".rr").removeClass("showdiv");
    //     // $(".home").addClass("lock");
    //     setTimeout(function(){
    //         $(".body-home").removeClass("showdiv");
    //         $(".home1").addClass("showdiv");
    //         //$(".home1 .td strong").each(function(index, element) {
    //         //shownum($(this),3000);
    //         //});
    //     },500);
    //     setTimeout(function(){
    //         first=1;
    //     },1000);
    // });
    //
    // $(".ll").click(function(){
    //     // $(".body-home").css("overflow","auto");
    //     $(".body-home").css("position","unset");
    //     $(".body_r").removeClass("showdiv");
    //     $(".nav_b").removeClass("showdiv");
    //     $(".rr").addClass("showdiv");
    //     // $(".home").removeClass("lock")
    //     setTimeout(function(){
    //         $(".nav_b .item:first").click();
    //         $(".home1").removeClass("showdiv");
    //         // if(!$(".body_b").hasClass("showdiv")){
    //         //     $(".body_home").addClass("showdiv").focus();
    //         // }
    //     },1100);
    // });
});