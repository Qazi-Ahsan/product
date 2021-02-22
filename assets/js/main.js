$('#product-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
      0:{
          items:1
      }
  }
})
$('#color-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  center:true,
  responsive:{
      0:{
          items:1
      },
      600:{
        items:4
      }
  }
})


$('.head-left').click(function(){
  console.log("clickl")
})


$(document).ready(function() { 
  $(".side .head-left").click(function() { 
      $(".side").removeClass();
  }); 
}); 
