var colors = ['#D81B60', '#E53935', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', '#039BE5', '#00ACC1', '#00897B', '#43A047', '#7CB342', '#C0CA33', '#FDD835', '#FFB300', '#FB8C00', '#F4511E', '#6D4C41', '#757575', '#546E7A'];


$(document).ready(function () {
    
    var param = "";
    var answer = $('.quote');
    
     $("#quotebtn").click(function () {
        var color = Math.floor(Math.random() * colors.length);
        $("body").animate({backgroundColor: colors[color]}, "500");
        $(".btn").animate({backgroundColor: colors[color]}, "500");
        $(".btn").css("color", "white");
        
        $(".quote h1, #source").fadeOut("slow", function () {
          $(".quote").toggleClass(".quoteEx")
            $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?callback=?", function (quote) {
                $("#quote").html(" " + quote.quote + " ");
                $("#source").html("-" + quote.author).fadeIn("slow");
                $(".quote h1").fadeIn("slow");
                       answer.slideToggle(500);

                
                param = quote.quote;
            });
        });
    });
    
    $(".popup").click(function() {
        var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url = "http://twitter.com/intent/tweet?text=".concat(param);
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;
    });
});