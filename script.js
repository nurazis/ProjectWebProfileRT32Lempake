$(document).scroll(function () {
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.cardgrup').offset().top - 250) {
        $('.cardgrup .cardhilang').each(function(i) {
            setTimeout(function() {
                $('.cardgrup .cardhilang').eq(i).addClass('cardmuncul');
            }, 300 * (i+1));
        });
    }

    if(wScroll > $('.cardgrup1').offset().top - 250) {
        $('.cardgrup1 .cardhilang1').each(function(i) {
            setTimeout(function() {
                $('.cardgrup1 .cardhilang1').eq(i).addClass('cardmuncul1');
            }, 500 * (i+1));
        });
    }
    if(wScroll > $('.cardgrup2').offset().top - 250) {
        $('.cardgrup2 .cardhilang2').each(function(i) {
            setTimeout(function() {
                $('.cardgrup2 .cardhilang2').eq(i).addClass('cardmuncul2');
            }, 500 * (i+1));
        });
    }
    if(wScroll > $('.cardgrup3').offset().top - 100) {
        $('.cardgrup3 .cardhilang3').each(function(i) {
            setTimeout(function() {
                $('.cardgrup3 .cardhilang3').eq(i).addClass('cardmuncul3');
            }, 500 * (i+1));
        });
    }
});