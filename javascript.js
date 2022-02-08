$('section.result .card').on('mouseover',function(){
    $(this).children('.increase').css('opacity','0');
    $(this).children('.see').css('opacity','1');
})

$('.card').on('mouseout',function(){
    $(this).children('.increase').css('opacity','1');
    $(this).children('.see').css('opacity','0');
})