$(document).ready(function(){ 
   $(window).scroll(function(){ 
       if ($(this).scrollTop() > 100) { 
           $('#scroll-backtop').fadeIn(); 
       } else { 
           $('#scroll-backtop').fadeOut(); 
       } 
   }); 
   $('#scroll-backtop').click(function(){ 
       $("html, body").animate({ scrollTop: 0 }, 600); 
       return false; 
   }); 
});


document.querySelectorAll('img').forEach(i => {
  i.addEventListener('click', evt => {
    if (i.classList.contains('zoomed'))
      i.style.transform = ''
    else {
      // const myScale = 500 / i.clientWidth;
      // i.style.transform = `scale(${myScale})`
      i.style.transform = `scale(1.35)`
    }
    i.classList.toggle('zoomed')
  })
})
