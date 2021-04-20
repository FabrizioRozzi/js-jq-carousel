$(function(){

  $('.next').click(nextImg);
  $('.prev').click(prevImg);





  function nextImg(){
    //console.log('next')
    var activeImg = $('.container-img img.active');
    var activeIcon = $('i.selected')
    // console.log(activeImg);
    activeImg.removeClass('active');
    activeIcon.removeClass('selected');
    if(activeImg.next('img').length === 0){
      $('img').first().addClass('active');
      $('.container-icon i').first().addClass('selected');
    }else{
      activeImg.next('img').addClass('active');
      activeIcon.next('i').addClass('selected');
    }
    
  }
  function prevImg(){
    //console.log('prev')
    var activeImg = $('.container-img img.active');
    var activeIcon = $('i.selected')
    // console.log(activeImg);
    activeImg.removeClass('active');
    activeIcon.removeClass('selected');
    if(activeImg.prev('img').length === 0){
      $('img').last().addClass('active');
      $('.container-icon i').last().addClass('selected');
    }else{
      activeImg.prev('img').addClass('active');
      activeIcon.prev('i').addClass('selected');
    }
    
  }





})