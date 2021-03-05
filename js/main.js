$(document).ready(function() {

    $('.prev').click(prevImage);
    $('.next').click(nextImage);

    /* Funzione per utilizzare tasti left e right della tastiera */
    $(document).keydown(function(key) {
        if (key.which == 37) {
            prevImage();
        } else if (key.which == 39) {
            nextImage();
        }
    });

    /* Con un ciclo for aggiungo i circle per quante sono le immagini inserite */
    for (var i = 0; i < $(".images img").length; i++) {
        document.getElementById("nav").innerHTML += '<i class="fas fa-circle"></i>';
    }
    /* aggiungo classi al primo e ultimo elemento i */
    $("#nav i:first-child").addClass('active first');
    $("#nav i:last-child").addClass('last');

    $('#nav i').click(circleClick);
});

function nextImage() {
    var activeImage = $('.images .active');
    activeImage.removeClass('active');

    var activeCircle = $('#nav i.active');
    activeCircle.removeClass('active');
    
    if (activeImage.hasClass('last')) {
        $('.images .first').addClass('active');
        $('#nav i.first').addClass('active');
    } else {
        activeImage.next('img').addClass('active');
        activeCircle.next('i').addClass('active');
    }
}

function prevImage() {
    var activeImage = $('.images .active');
    activeImage.removeClass('active');

    var activeCircle = $('#nav i.active');
    activeCircle.removeClass('active');

    if (activeImage.hasClass('first')) {
        $('.images .last').addClass('active');
        $('#nav i.last').addClass('active');
    } else {
        activeImage.prev('img').addClass('active');
        activeCircle.prev('i').addClass('active');
    }
}

function circleClick() {

    /* Rimuovo la classe active a tutte le img e tramite l'indice 
    del circle selezionato aggiungo classe active all'img corrispondente */
    $('.images img').removeClass('active');
    $('.images img').eq($('#nav i').index(this)).addClass('active');

    /* Rimuovo classe active ai circle e l'aggiungo solo a quello selezionato */
    $('#nav i').removeClass('active');
    $(this).addClass('active');
}
