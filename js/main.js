window.onload = function(){
    var links = document.querySelectorAll('.tablinks li');
    var content = document.querySelectorAll('.tabcontents li');

    for (var i = 0; i < links.length; i++) {
        (function(i){
            var link = links[i];
            link.onclick = function() {
                for (var j = 0; j < content.length ; j++) {
                    var shown = window.getComputedStyle(content[j]).display;
                    if (shown == "block") {
                        content[j].style.display = "none";
                        links[j].classList.remove('activ');
                    }
                }
                content[i].style.display = "block";
                links[i].classList.add('activ');
            }
        })(i);
    }
}






  $('.slider').slick();


  $('a[rel="relativeanchor"]').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 1000);
    return false;
  });