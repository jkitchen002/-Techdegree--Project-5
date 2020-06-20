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

let images = document.getElementsByClassName('photo-link');

$('#searchbar').on('input', function() {
  const search = $('#searchbar').val().toLowerCase();
  
  $(images).each(function() {
    $(this).toggle(search == $(this).attr('title').toLowerCase()) 
  });
});



