//Lightbox//

$("[data-fancybox]").fancybox({
  thumbs: false,
  loop: true,
  keyboard: true,
  toolbar: true,
  animationEffect: "zoom",
  animationDuration: 400,
  transitionEffect: "zoom-in-out",
  transitionDuration: 850,
  arrows: true,
  slideShow: false,
});


//SearchBar//

const $images = $('.photo-link');

    $('#searchbar').keyup(function(){
      const LookingFor = $(this).val().toLowerCase();
      
      for (i = 0; i < $images.length; i++) {
        let search = $images[i].getAttribute('data-caption');
        if(search.toLowerCase().indexOf(LookingFor) > -1  ) {
          $images[i].style.display = "";
        } else{
          $images[i].style.display="none"
        }
      }
      });
    
   

