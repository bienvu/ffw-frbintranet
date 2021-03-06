/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.
  // Add  functionality here.
  // Select js.
  $('select').selectpicker();

  // Table responsvie
  var $table = $('table'),
      buildTableResponsive = function (table) {
        table.after('<div class="table-responsive hidden-on-tablet"></div>');
        var markupTable = table.clone(),
            captionTable = table.find('caption').clone(),
            $tableResponsive = table.next('.table-responsive');
        // Add table into table-responsive
        $tableResponsive.append(captionTable);
        $tableResponsive.append(markupTable);
        // Change table into table-responsive to ul li
        var $tableResponsiveTable = $('table', $tableResponsive),
            ul = $('<ul>');
        $('tbody tr', $tableResponsiveTable).each(function () {
          var li = $("<li>");
          $('th', this).each(function () {
            var th = $(this).html(),
                ththead = $('thead th').html();

              if (ththead.length) {
                li.append($("<strong>").hide());
              } else if (th.length) {
                li.append($("<strong>").html(th));
              }
          });
          $('td', this).each(function () {
            var index = $(this).index(),
                td = $(this).html();
                if (td.length) {
                  li.append($("<p>").html(td));
                }
          });
          ul.append(li);
        });
        $tableResponsiveTable.replaceWith(ul);
      };

  $table.each(function () {
    buildTableResponsive($(this));
    $(this).addClass('hidden-on-mobile');
  });

  // Show hidden function.
  var showHiddenFunction = function (btn, btnClose ,flag) {
    var $btn = btn,
        $btnClose = btnClose,
        $parent = $btn.parents('.header__right');
    $(document).on('click', function (e) {
      if ($parent.has(e.target).length === 0 && $parent.hasClass(flag)) {
        $parent.removeClass(flag);
      }
    });

    $btn.on('click', function () {
      if (!$parent.hasClass(flag)) {
        $parent.addClass(flag);
      }
      else {
        $parent.removeClass(flag);
      }
    });

    $btnClose.on('click', function () {
      $parent.removeClass(flag);
    });
  };
  // Show hidden menu-info.
  var openFlag = 'is-active',
      $open = $('.js-open');
      $close = $('.js-close i');
  showHiddenFunction($open, $close, openFlag);


   // ToggleClass
  var jsToggleClass = function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
    $(this).parents('.block-social__list').toggleClass('active');
  };

  var $item = $('.js-toggle__list-sub a'),
      $acodion_header = $('.js-block-accordion__header'),
      $accordion_content = $('.js-block-accordion__content'),
      $jsdirect = $('.js-show-all');

  $item.on('click', jsToggleClass);
  $acodion_header.on('click', jsToggleClass);

  // Show All.
  var jsExpandAll = function(classDirect, classHeader, classContent) {
    var $itemDirect = classDirect,
        $classHeader = classHeader,
        $classContent = classContent;
    $itemDirect.on('click', function () {
      if($classContent.hasClass('active')) {
        $classContent.removeClass('active');
        $classHeader.removeClass('active');
      } else {
        $classContent.addClass('active');
        $classHeader.addClass('active');
      }
    });
  };
  jsExpandAll($jsdirect, $acodion_header, $accordion_content );

  var $jsHeader = $('.js-header'),
      $jsContent = $('.js-show-content');
    jsExpandAll($jsdirect, $jsHeader, $jsContent );

  // Tooltip
  $('.tooltip').tipso({
    speed             : 200,
    background        : '#e1ebdd',
    color             : '#3f3f3f',
    showArrow         : false,
    position          : 'right',
    width             : 300,
    maxWidth          : '',
  });


  // Close block
  var jsCloseBlock = function(e) {
    e.preventDefault();
    $(this).parents('.js-close__block').animate({
      opacity: 0,
      height: 0
    }, 500);
  };

  $('.js-warning__close').on('click', jsCloseBlock);
  $('.js-cookie__close').on('click', jsCloseBlock);

  // Block warning
  if ($('.block-warning').length) {
    $('.header').addClass('has-warning');
  }
  $('.block-warning__button').on('click', function() {
    $('.header').removeClass('has-warning');
  });

  // Filter vacancy.
  $('.js-select .form-select').change(function() {
    $('.js-select form').submit();
  });

  // js accordion
  var accordionFunction = function(classItem, childSelector) {
    var $item = classItem;
    $item.on('click', function () {
      var $this = $(this);
          $childSelector = $(childSelector);
      if (!$this.hasClass('active')) {
        $this.addClass('active');
        $childSelector.slideDown("slow");
      }
      else {
        $this.removeClass('active');
        $childSelector.slideUp("slow");
      }
    });
  };

  var $classItem = $('.js-show-all-menu'),
      $childSelector = $('.js-show-content > li');
  accordionFunction($classItem,$childSelector);

  // Equal height
  $('.js-navigation__height').matchHeight();

}(this, this.document, this.jQuery));
