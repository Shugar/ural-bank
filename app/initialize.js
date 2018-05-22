import $ from 'jquery'
import 'slick-carousel'
import './youtube'

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$(document).ready(() => {
  const slidesCount = $('.slider').find('.slider__slide').length
  $('.js-amount').html(`${slidesCount}`)

  $('.slider').slick({
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  })

  $('.slider').on('beforeChange', (e, slick, curr, next) => {
    $('.js-curr').html(`${next + 1}`)
  })

  $('.pick-yours__text.pick-text').hide()
  $('.pick-yours__text.pick-text[data-id="0"]').show()

  $('.pick-card__button').on('click', function () {
    $('.pick-card__button').removeClass('hidden')
    $('.pick-card__icon').addClass('hidden')
    $(this).addClass('hidden')
    $(this).parent().find('.pick-card__icon').removeClass('hidden')
    $('.pick-yours__text.pick-text').hide()
    $(".pick-yours__text.pick-text[data-id=" + $(this).attr("data-id") + "]").show()
  })

  $('.head-buttons__button_play').on('click', function () {
    $("#youtube-video-player").tubeplayer("play");
    $('.video-container').addClass('video-container-visible')
  })

  $('.video-container-close').on('click', function () {
    $("#youtube-video-player").tubeplayer("stop");
    $('.video-container').removeClass('video-container-visible')
  })  

  $("#youtube-video-player").tubeplayer({
      initialVideo: "qB-UdoRzl14",
      controls: 0,
      modestbranding: false,
      annotations: false
  });
})