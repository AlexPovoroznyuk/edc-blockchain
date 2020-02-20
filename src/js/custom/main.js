$(document).ready(function () {
    
    if ($(".time-off")) {
        var getCountdown = function getCountdown() {

            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            days = pad(parseInt(seconds_left / 86400));
            seconds_left = seconds_left % 86400;

            hours = pad(parseInt(seconds_left / 3600));
            seconds_left = seconds_left % 3600;

            minutes = pad(parseInt(seconds_left / 60));
            seconds = pad(parseInt(seconds_left % 60));
            if (target_date > current_date) {
                countdown.html(`<span>${days}<b>дней</b></span><span class="delimiter"> / </span><span>${hours}<b>часов</b></span><span class="delimiter"> : </span><span>${minutes}<b>минут</b></span><span class="delimiter"> : </span><span>${seconds}<b>секунд</b></span>`);
            } else {
                countdown.html(`<span>0<b>days</b></span><span>0<b>hours</b></span><span>0<b>minutes</b></span><span>0<b>Seconds</b></span>`);
            }
        };

        var pad = function pad(n) {
            return (n < 10 ? '0' : '') + n;
        };

        var target_date = 1583280000000;
        var days, hours, minutes, seconds;

        var countdown = $(".time-off");
        getCountdown();

        setInterval(function () {
            getCountdown();
        }, 1000);
    }
    if ($("#timer")) {
        var getCountdown = function getCountdown() {

            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            days = pad(parseInt(seconds_left / 86400));
            seconds_left = seconds_left % 86400;

            hours = pad(parseInt(seconds_left / 3600));
            seconds_left = seconds_left % 3600;

            minutes = pad(parseInt(seconds_left / 60));
            seconds = pad(parseInt(seconds_left % 60));
            if (target_date > current_date) {
                countdown.html(`<span>${days}<b> дней</b></span><span class="delimiter"> </span><span>${hours}</span><span class="delimiter"> : </span><span>${minutes}</span><span class="delimiter"> : </span><span>${seconds}</span>`);
            } else {
                countdown.html(`<span>0<b>days</b></span><span>0<b>hours</b></span><span>0<b>minutes</b></span><span>0<b>Seconds</b></span>`);
            }
        };

        var pad = function pad(n) {
            return (n < 10 ? '0' : '') + n;
        };

        var target_date = 1583280000000;
        var days, hours, minutes, seconds;

        var countdown = $("#timer");
        getCountdown();

        setInterval(function () {
            getCountdown();
        }, 1000);
    }
})

$(".top-slider .slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 680,
          settings: {
            
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            
            slidesToShow: 1
          }
        }
      ]
})

$(".bottom-slider .slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 680,
          settings: {
            
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            
            slidesToShow: 1
          }
        }
      ]
})