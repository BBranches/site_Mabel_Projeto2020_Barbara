//TEL FORMAT
$("#telefone").mask("(00) 00000-0000");

// ACTIVE MENU
$('#nav a').click(function () {
$('#nav a.active').removeClass('active');
$(this).addClass('active');
});
$(window).scroll(function () {
    var href = $(this).scrollTop();
    $('.link').each(function (event) {
        if (href >= $($(this).attr('href')).offset().top - 1) {
            $('#nav a.active').removeClass('active');
            $(this).addClass('active');
        }
    });
});
//ACTIVE HOME
$('#home').addClass('active');

//BOTAO TOP
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a.top').fadeIn();
        } else {
            $('a.top').fadeOut();
        }
    });

    $('a.top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

//ALERT CONTATO
function enviou(){
    alert ("Sua mensagem foi enviada. Retornaremos o Contato.\nObrigado!");
    window.location.href = "index.html";
}
