import $ from 'jquery'
import 'slick-carousel'
import './youtube'

$(document).ready(() => {
  const slidesCount = $('.slider').find('.slider-item').length
  $('.slider-length').html(`${slidesCount}`)

  const $carousel = $('.slider').slick({
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
    $('.slider-current').html(`${next + 1}`)
  })

  $('.light-office').on('click', function () {
    $('.modal').addClass('is-visible')
  })

  $('.slider-next').on('click', function () {
    $carousel.slick("slickNext");
  })

  $('.slider-prev').on('click', function () {
    $carousel.slick("slickPrev");
  })

  $('.modal-close').on('click', function () {
    $('.modal').removeClass('is-visible')
  })

  $('.watch-video').on('click', function () {
    $(".youtube-video-player").tubeplayer("play");
    $('.video-container').addClass('video-container-visible')
  })

  $('.video-container-close').on('click', function () {
    $("#youtube-video-player").tubeplayer("stop");
    $('.video-container').removeClass('video-container-visible')
  })

  $(".youtube-video-player").tubeplayer({
      initialVideo: "Tw1Q3DNF5KM",
      controls: 0,
      modestbranding: false,
      annotations: false
  });
})