
$(document).ready(function(){
    const borderRadius = {
        topLeft: 0,
        bottomLeft: 0,
        topRight: 0,
        bottomRight: 0,
    }

    const squareSample = $('.border-sample');

    const changeBorder = function(position, value) {
        if (parseInt(value) >= 0) {
            borderRadius[position] = parseInt(value);
        }
        setBorderRadius();
    }

    const setBorderRadius = function() {
        squareSample.css('border-radius', getBorderRadius());
    }

    const getBorderRadius = function() {
        const {
            topLeft,
            bottomLeft,
            topRight,
            bottomRight,
        } = borderRadius;

        return `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`
    }


    $('input[name="top-left"]').keyup(function(){
        changeBorder("topLeft", $(this).val());
        $('#result').text(getBorderRadius());
    });

    $('input[name="bottom-left"]').keyup(function(){
      changeBorder("bottomLeft", $(this).val());
        $('#result').text(getBorderRadius());
    });

    $('input[name="top-right"]').keyup(function(){
      changeBorder("topRight", $(this).val());
        $('#result').text(getBorderRadius());
    });

    $('input[name="bottom-right"]').keyup(function(){
      changeBorder("bottomRight", $(this).val());
        $('#result').text(getBorderRadius());
    });
});