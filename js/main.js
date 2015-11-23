$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    $('.content-b').css({
        'opacity': ((500 - scrollTop) / 500)
    });
  if(scrollTop > 100) {
    $('.imac-box').removeClass('hidden');
    $('.imac-box').addClass('fadeInLeft');
    $('.portfolio-grid').addClass('fadeInRight');
  }
  if(scrollTop > 1630) {
    $('.project-2-right').removeClass('hidden');
    $('.project-2-left').removeClass('hidden');
    $('.project-2-right').addClass('fadeInLeft');
    $('.project-2-left').addClass('fadeInLeft');
  }
  if(scrollTop > 2275) {
    $('.feature').addClass('fadeInUp');
  }
  if(scrollTop > 2827) {
    $('.project-card').addClass('fadeInRight');
  }
  if(scrollTop >= 728) {
    $('.js-navbar').addClass('fixed');
    $('.box-3').css('padding-top', '60px');
  } else {
    $('.js-navbar').removeClass('fixed');
    $('.box-3').css('padding-top', '0px');

  }
});

$('.project-card').click(function() {
  this.$('.project-overlay').css({
      'top': '0',
      'opacity': '1',
      'color': 'rgba(255, 255, 255, 1)',
      'font-size': '20px',
      'transition': '1s',
  })
});

$('a').smoothScroll();

$('.navtabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
