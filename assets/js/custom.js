$(document).ready(function(){
  
  setTimeout(function() {
    $('#loader-display').hide();
    $('.page1').slideDown();
  }, 2000);



  $("#btn-slide").click(function(){
    $(".page1").slideUp();
    $(".page2").slideDown();
  });


  $('input[type="text"]').keyup(function() {
        if($(this).val() != '') {
           $('#btn-name').prop('disabled', false);
        };
     });


  $("#btn-name").click(function(){
    $(".page2").slideUp();
    $(".page3").slideDown();
    $('#name-display').text($('input[type="text"]').val());
  });


  $("#btn-slide2").click(function(){
    $('.page3').slideUp();
    $('.page4').slideDown();
  });

  $("#btn-iya").click(function(){
    $(".page4").slideUp();
    $(".page5").slideDown();
  });

  $("#btn-lanjut").click(function(){
    $(".page4").slideUp();
    $(".page5").slideDown();
  });

  $("#btn-play").click(function(){
    $("#music-play").get(0).play();
  });
});