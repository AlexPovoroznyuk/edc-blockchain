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
              $(this).closest(".input-item").find(".error span").html(EmptyError);
              if ($(this).attr("data-name") == "password") {

                  $(".password-error span").html(EmptyError);
                  $(".about-pass").addClass("password-validation-error");

              }
              sendForm = false;


          } else if ($(this).attr("name") == "email") {
              if ($(this).val() == "") {
                  $(this).closest(".input-item").addClass("validation-error");
                  $(this).closest(".input-item").find(".error span").html(EmptyError);
                  sendForm = false;
              } else if (!(/^[A-Za-z0-9][A-Za-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test($(this).val()))) {
                  $(this).closest(".input-item").addClass("validation-error");
                  $(this).closest(".input-item").find(".error span").html(EmailError);
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