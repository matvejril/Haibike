var headerMenu = (function () {
  var $win = $(window);
  var wWidth = $win.width();
  var mediaPoint = 1023;
  var $btn = $('.c-menu__link');
  var $menu = $('.c-menu--mobile');

  var hide = function () {
    $btn.removeClass('is-open');
    $menu.slideUp(150)
  };

  var index = 0;

  var idx = function () {
    return headerMenu.index = headerMenu.index + 1
  };

  var show = function () {
    $btn.addClass('is-open');
    $menu.slideDown(150)
  };

  var desctopMenu = function () {
    $btn.removeClass('is-open');
    $menu.removeAttr('style')
  };

  var toggleMenu = function () {
    $btn.hasClass('is-open') ? hide() : show()
  };

  var resizeMenu = function () {
    wWidth = $win.width();
    if (wWidth > mediaPoint) {
      desctopMenu()
    }
  };

  $win.on('resize', resizeMenu);

  return {
    toggleMenu: toggleMenu,
    idx: idx,
    index: index
  };
})();

$(document)
  .ready(function () {

  });