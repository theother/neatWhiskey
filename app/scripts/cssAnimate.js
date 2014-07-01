// Creativo Pulse

$( '#mTitle' ).hover(
  function() {
    $( this ).addClass( 'animated pulse' );
  }, function() {
    $( this ).removeClass( 'animated pulse' );
  }
);

///////////////////////////////////
//Screen Detection for animation //
///////////////////////////////////
(function($){

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       only accounts for vertical position, not horizontal.
     */
    var $w = $(window);
    $.fn.visible = function(partial,hidden,direction){

        if (this.length < 1)
            return;

        var $t        = this.length > 1 ? this.eq(0) : this,
            t         = $t.get(0),
            vpWidth   = $w.width(),
            vpHeight  = $w.height(),
            direction = (direction) ? direction : 'both',
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = rec.top    >= 0 && rec.top    <  vpHeight,
                bViz = rec.bottom >  0 && rec.bottom <= vpHeight,
                lViz = rec.left   >= 0 && rec.left   <  vpWidth,
                rViz = rec.right  >  0 && rec.right  <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || lViz : lViz && rViz;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop         = $w.scrollTop(),
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $w.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                offset          = $t.offset(),
                _top            = offset.top,
                _bottom         = _top + $t.height(),
                _left           = offset.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);


/////////////////////////////////////////
//On scroll it will use css to animate //
/////////////////////////////////////////
var win = $(window);

var allMods = $(".iconAnimation");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});





/////////////////////////
//Contact Form         //
/////////////////////////

//Name
$("#text_field").focus(function () {
  $(".labelName").addClass( "focus" );
});

$("#text_field").focusout(function () {
  $(".labelName").removeClass( "focus" );
});

//Bis
$("#text_field2").focus(function () {
  $(".labelBis").addClass( "focus" );
});

$("#text_field2").focusout(function () {
  $(".labelBis").removeClass( "focus" );
});

//Name
$("#text_field3").focus(function () {
  $(".labelPhone").addClass( "focus" );
});

$("#text_field3").focusout(function () {
  $(".labelPhone").removeClass( "focus" );
});

//Name
$("#text_field4").focus(function () {
  $(".labelEmail").addClass( "focus" );
});

$("#text_field4").focusout(function () {
  $(".labelEmail").removeClass( "focus" );
});

//Message
$("#text_area").focus(function () {
  $(".labelMessage").addClass( "focusMessage" );
});

$("#text_area").focusout(function () {
  $(".labelMessage").removeClass( "focusMessage" );
});


/////////////////////////
//Contact Modal Form   //
/////////////////////////

//Name
$("#text_fieldModal").focus(function () {
  $(".labelModalName").addClass( "focus" );
});

$("#text_fieldModal").focusout(function () {
  $(".labelModalName").removeClass( "focus" );
});

//Bis
$("#text_field2Modal").focus(function () {
  $(".labelModalBis").addClass( "focus" );
});

$("#text_field2Modal").focusout(function () {
  $(".labelModalBis").removeClass( "focus" );
});

//Name
$("#text_field3Modal").focus(function () {
  $(".labelModalPhone").addClass( "focus" );
});

$("#text_field3Modal").focusout(function () {
  $(".labelModalPhone").removeClass( "focus" );
});

//Name
$("#text_field4Modal").focus(function () {
  $(".labelModalEmail").addClass( "focus" );
});

$("#text_field4Modal").focusout(function () {
  $(".labelModalEmail").removeClass( "focus" );
});

//Message
$("#text_areaModal").focus(function () {
  $(".labelModalMessage").addClass( "focusMessage" );
});

$("#text_areaModal").focusout(function () {
  $(".labelModalMessage").removeClass( "focusMessage" );
});
