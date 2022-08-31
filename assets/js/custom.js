jQuery(document).ready(function(){ 



    $('.dropdown > .caption').on('click', function() {
        $(this).parent().toggleClass('open');
    });

    // $('.price').attr('data-currency', 'RUB');

    $('.dropdown > .list > .item').on('click', function() {
        $('.dropdown > .list > .item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html($(this).html());

        if ($(this).data("item") == "RUB") {
            console.log('RUB');
        } else if ($(this).data("item") == "UAH") {
            console.log('UAH');
        } else {
            console.log('USD');
        }
      
    });

    $(document).on('keyup', function(evt) {
        if ((evt.keyCode || evt.which) === 27) {
            $('.dropdown').removeClass('open');
        }
    });

    $(document).on('click', function(evt) {
        if ($(evt.target).closest(".dropdown > .caption").length === 0) {
            $('.dropdown').removeClass('open');
        }
    });



      $('.tooltip_main a').click(function(){
         $('.menu_area .tooltiptext_main').slideToggle(500);
         return false;
    });



});   