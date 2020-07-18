//TEL FORMAT
$("#telefone").mask("(00) 0000-00000");

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


$('#home').addClass('active');
//LINK MENU ATIVO HOME
