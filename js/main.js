
$('#view-work').on('click',function(){
  const images = $('#iamges').position().top;
  $('html,body').animate(
    {
      scrollTop: images
    },
    900
  );
});
