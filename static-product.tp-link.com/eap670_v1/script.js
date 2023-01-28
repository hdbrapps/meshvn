$(document).ready(function () {
  $(".tabs .selector .option").each(function (index) {
    $(this).mouseover(function () {
      $(".d .selector .option").removeClass("active");
      $(this).addClass("active");
      $(".tabs .tab").removeClass("active");
      $(".tabs .tab").eq(index).addClass("active");
      if (index === 0) {
        $(".tabs").removeClass("second");
      } else if (index === 1) {
        $(".tabs").addClass("second");
      }
    });
  })
  var $video = $(".h .video");
  if($video.length){
    var handleScroll = function(){
      var top = $video[0].getBoundingClientRect().top
      var h = $video.height()
      if(top < $(window).height() - h && top > - h) {
        if(!$video.hasClass("playing")){
          $video.addClass("playing")[0].play();
        }
      }else{
        $video.removeClass("playing")
      }
    };
    $(window).on("scroll", handleScroll)
  }
});