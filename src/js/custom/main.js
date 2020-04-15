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

        var target_date = 1589280000000;
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
                countdown.html(`<span>0<b> дней</b></span><span class="delimiter"> </span><span>00</span><span class="delimiter"> : </span><span>00</span><span class="delimiter"> : </span><span>00</span>`);
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


$(".top-slider .slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button" style="">
    <svg id="Группа_4" data-name="Группа 4" xmlns="http://www.w3.org/2000/svg" width="13.31" height="24.62" viewBox="0 0 13.31 24.62">
    <defs>
      <style>
        .cls-1 {
          fill: #748494;
          fill-rule: evenodd;
        }
      </style>
    </defs>
    <path id="Прямоугольник_555" data-name="Прямоугольник 555" class="cls-1" d="M1578.29,1807.02a1,1,0,0,1,0-1.41l11.32-11.32a1,1,0,0,1,1.41,0,1.008,1.008,0,0,1,0,1.42l-11.31,11.31A1.008,1.008,0,0,1,1578.29,1807.02Z" transform="translate(-1578 -1782.69)"/>
    <path id="Прямоугольник_555_копия" data-name="Прямоугольник 555 копия" class="cls-1" d="M1589.61,1795.71l-11.32-11.32a1,1,0,0,1,0-1.41,1.008,1.008,0,0,1,1.42,0l11.31,11.31a1.008,1.008,0,0,1,0,1.42A1,1,0,0,1,1589.61,1795.71Z" transform="translate(-1578 -1782.69)"/>
     </svg>
    </button>`,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="">
    <svg id="Группа_3" data-name="Группа 3" xmlns="http://www.w3.org/2000/svg" width="13.313" height="24.62" viewBox="0 0 13.313 24.62">
    <defs>
      <style>
        .cls-1 {
          fill: #748494;
          fill-rule: evenodd;
        }
      </style>
    </defs>
    <path id="Прямоугольник_555" data-name="Прямоугольник 555" class="cls-1" d="M328.02,1782.98a1,1,0,0,1,0,1.41l-11.314,11.32a1,1,0,0,1-1.414-1.42l11.313-11.31A1,1,0,0,1,328.02,1782.98Z" transform="translate(-315 -1782.69)"/>
    <path id="Прямоугольник_555_копия" data-name="Прямоугольник 555 копия" class="cls-1" d="M316.706,1794.29l11.314,11.32a1,1,0,1,1-1.415,1.41l-11.313-11.31A1,1,0,0,1,316.706,1794.29Z" transform="translate(-315 -1782.69)"/>
  </svg>
    </button>`,
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
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
    <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="40" height="40" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADf0lEQVRYhd2ZTYiNYRTHf/POkBpSPjOKFGMWSk2zIzQjZoGFWWh8bCinprAasWDBgprVUOpYzIZpUmysEPK9mpSy8FWikM8SShj08L/j3usO9733uebmbKbe5j3n9z7P+z7n/P+3hhLC3ccAi4DlQDMwH5gO1CvbB+A5cBe4CZwHrpvZ57TVUgG6+1xgB9AJTNblT8A94DHwXtfGA7OARmCsrr0GBoBeM3sQFdDdG4AeYB1QC9wHjgPngEEz+zLCfXVAC7AS2ADMA4aAE0C3mT0tG9DdTXATgMvAPjO7WMyDFcjVBuwBlgLvBOklAbr7OKBP2xmedLuZnSoFrEDuDuAQ0KBt32xmH4sGdPeJwGlgCXAG2GRmr2LAZdWYAhwD2oErwBoze5v/f0mBG8dlwR0FVsWGC6Gcq1Qj1Dqt2jlRV+DevgycmVlssDzI8MGY+4/XcKtqr8/+n5wV1AfRqW3tqiRcXnSpZqcYhmP4HdRRckdf18JKbOufQu/kLZ0WTZkjKHsFM0fJtjRw7v7be1xKqOZ2MfRkUtTwq0OE1btmZstSwIUucRK4YWYHY4C6+yVgsVbxQebpd6hD7EuZLzztHOCAu++KAQjsF0tgokaN/xnwxswa02Zz96lA6CwLgN0xVtLdQ2+fBMxINJVMVm9NHWb2EmgFbkdcyX4xLU40MqHGX1JUAPKs/rYlmufCyDRYTsbIkINiak40bN4baWQaDUixhPewKdEk/KhcuNiQGoCnJRrT3xdxw7+GDEz1UbpAJSORwBkfs0akszEwfUikvmZXGRwSXS8SScNGCZyqgBNL6Gp3EunWsVJfow6naBHTzUSiOsSKKoFDMjXEhQB4XaJ6Y5XAIQ0dmK4lsiOC9Jvn7q0p4SZVYJJpk8AfCGyZc7BXin9vynzhMH0YceWQsB8SUw55v7t/c/e1abLFGvmVq0MM/Zlr2cm7JZgOS8AUFWb2NRLcFLkN78SSCygV1S074pi718YoXCRcrVyGhnxTKWd7ZOQMyI448q8AVatdH0aOmVSoe2wGZgalL8XfJQcgemjljshVuApsya9RLeZRgFtdlHnEz61+q9M8s9230n7df4HrkIvQrhorC8ExCgZmq87a8g3MvMTlWsAr1EqzLeCdZvbkb7X/DxO9AGhwI4J/EvpmkK1NQeDk/QzxQn5PGOcuyPdJ9zME8B0vXZIenSAoiwAAAABJRU5ErkJggg=="/>
    </svg>
    </button>
    `,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
    <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="40" height="40" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADZUlEQVRYhdWZS4iNYRjHf/ONWyFpXGrUSDFmoURWRi5DZhayGErjsrHw1BRWUyxQLIjVUFOPxWyGJgubWaEhJrObSFkwpsSCXEsod3r5n3HO54zOd853zPHffPX1ve/ze6/P5auiCLn7RKAR2AAsBxYDc4Gp6u098Ay4D9wC+oFBM/uc1FoiQHdfCOwH2oAavf4EDAOPgXd6Nw2oA+qBSXr3CugFOs1sJFVAd68FTgHbgGrgAXAeuAwMmdmXMdpNAFYAG4GdwCLgK3AB6DCzJyUDursJbjpwAzhmZlcLGVievpqAw8Aa4K0gvShAd58CdGs5w0j3mdnFYsDy9N0KnAFqtey7zexDwYDuPgPoA1YDl4BdZvYyDbgsG7OAHqAFGAA2m9mb+HdRnoZTsuDOApvShgtSn5tkI9jqk+0cTcjTtjsDZ2aWNlgMMhwYc/+5DffI9vbsb3JmUAeiTcvaXk64mNpls00Moxrdg7pK7ul0LS3Hsv5N2pN3dFs0ZK6g7BnMXCX70oJz9z/2+FiSzb1iOJn5rIrfHiLM3k0zW5sS3AFgJbDVzD4laHcdWKVZHMmMcL88xLEU4Y4DC+T2kuioWAITVXL8T4HXZlafItxdoMnMXhTRR/DtM8NFHikqqZFvHXc46RwQDk1jpJAJOf5KgAu6oueGSPFc2MRDFQKHWD4CyyIFm8NjhUzjAIdYQkjXECkSflwpcFl6FNgihenvCm72b+AQ09SCb/rxUqQEJ+llGvbJCeAgsAS45u6zUx5DYHofKfuqK6aHMkPOD2yRUsN6JTgVASmWkGDdi5S3TlL2VZTKABlYJgO3IyXVQc2l9Jgy5EY9+wPgoJLqHaUApgy5U0yDkcoRIfVb5O7rywBZU0CzUbn7Ou2/3sCWuQc7lfEfKhUwBvlQKUQSHRFLZ5z8vLt/d/ctaUCSMOTX961iGA39sjvo0GhPK4EpWWb2LQHcLFUb3oolF1BZVIfKET3uXp0GZIFw1aoy1MaLSjlLoEJOr8oRXf8KULZadDByikn5vMduYF7I9JXxt6sCkLo0c12qKgzIdo7+v+IRv5b6jTxLZrnvpHy6W1VFaJGN5nxw/NcFzFjHlVsCjhmszCJ6HtBQjQj1k+C7Q9raAMyJ/YZ4rnpPCOfClgh1n2S/IYAfVZuTG6cTQjAAAAAASUVORK5CYII="/>
  </svg>
  </button>`,
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




  $(".modal-trigger").click(function () {
      if ($(this).attr('data-target')) {
          let modalOpen = $(this).attr('data-target');
          $(`#${modalOpen}`).addClass("active");
          $("body").addClass("modal-open");
      }
  })
  $(".close-modal").click(function () {
      $(".modal").removeClass('active');
      $("body").removeClass("modal-open");
      $(".valid-error").html("")
  })

  var EmptyError = "can't be empty";
  var EmailError = "invalid email";
  var TgError = "Please type your telegram nickname with @ or your phone number";
  var UrlError = "incorrect format";
  var sendForm;
  $("form").on("submit", function (e) {
      e.preventDefault();
      var thisForm = $(this);
      sendForm = true;
      $(this).find(".reqiered-field").each(function () {
          console.log($(this).attr("name"))
          if ($(this).val() == "") {
              $(this).closest(".input-item").addClass("validation-error");
              $(this).closest(".input-item").find(".valid-error").html(EmptyError);
              
              sendForm = false;


          } else if ($(this).attr("name") == "email") {
              if ($(this).val() == "") {
                  $(this).closest(".input-item").addClass("validation-error");
                  $(this).closest(".input-item").find(".valid-error").html(EmptyError);
                  sendForm = false;
              } else if (!(/^[A-Za-z0-9][A-Za-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).val()))) {
                  $(this).closest(".input-item").addClass("validation-error");
                  $(this).closest(".input-item").find(".valid-error").html(EmailError);
                  sendForm = false;
              } else {
                  $(this).closest(".input-item").removeClass("validation-error");
              }
          } else {
              $(this).closest(".input-item").removeClass("validation-error");
              $(".about-pass").removeClass("password-validation-error");
              $(".password-error span").html("");
          }
      });
      if (sendForm) {
          $(".list-form button[type ='submit']").attr('disabled', true);
          var that = $(this);
          var formData = new FormData(that.get(0));
          $.ajax({
              url: $(this).attr('action'),
              type: 'POST',
              contentType: false,
              processData: false,
              data: formData,

              success: function (data) {
                  $(".modal").removeClass("active");
                  $(".modal.success").addClass("active");
                  $("body").addClass("modal-open");

                  that.find("input").each(function () {
                      if (!($(this).hasClass("noclear"))) {
                          $(this).val("");
                      }
                  });
              },
              error: function (xhr, err, data) {
                  $(".modal").removeClass("active");
                  $(".modal.success").addClass("active");
                  $("body").addClass("modal-open");
              }
          });
      }
  });
})

$(document).scroll(function(){
  if($(window).scrollTop() > 300){
    $("header").addClass("scrolled");
  }
  else if($(window).scrollTop() < 300 && $("header").hasClass("scrolled")){
    $("header").addClass("scrolled--up");
    setTimeout(function(){
      $("header").removeClass("scrolled");
      $("header").removeClass("scrolled--up");
    },100)
  }
})

var $page = $('html, body');
$('.scroll-trigger').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
    return false;
});