   
   $(document).ready(function()
   {
      $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
      $("#PhotoGallery1").magnificPopup({delegate:'a', type:'image', zoom: { enabled: true, duration: 300, easing: 'ease-in-out' }, gallery: {enabled: true, navigateByImgClick: true}});
   });
