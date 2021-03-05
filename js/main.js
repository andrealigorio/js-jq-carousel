$(document).ready(function() {

    $('.next').click(nextImage);
    $('.prev').click(prevImage);

    /* Con un ciclo for aggiungo i circle per quante sono le immagini inserite */
    for (var i = 0; i < $(".images img").length; i++) {
        document.getElementById("nav").innerHTML += '<i class="fas fa-circle"></i>';
    }
    /* aggiungo classi al primo e ultimo elemento i */
    $("#nav i:first-child").addClass('active first');
    $("#nav i:last-child").addClass('last');

});

function nextImage() {
    var activeImage = $('.images .active');
    activeImage.removeClass('active');

    var activeCircle = $('#nav .active');
    activeCircle.removeClass('active');
    
    if (activeImage.hasClass('last')) {
        $('.images .first').addClass('active');
        $('#nav .first').addClass('active');
    } else {
        activeImage.next('img').addClass('active');
        activeCircle.next('i').addClass('active');
    }
}

function prevImage() {
    var activeImage = $('.images .active');
    activeImage.removeClass('active');

    var activeCircle = $('#nav .active');
    activeCircle.removeClass('active');

    if (activeImage.hasClass('first')) {
        $('.images .last').addClass('active');
        $('#nav .last').addClass('active');
    } else {
        activeImage.prev('img').addClass('active');
        activeCircle.prev('i').addClass('active');
    }
}