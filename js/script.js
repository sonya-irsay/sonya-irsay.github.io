function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// $(document).ready(function() {
//     // $("#demo").html("Hello, World!");
// });
//
// (function($) {
//     $.fn.textWidth = function(){
//          var calc = '<span style="display:block">' + $(this).text() + '</span>';
//          $('body').append(calc);
//          var width = $('body').find('span:last').width();
//          $('body').find('span:last').remove();
//         return width;
//     };
//
//     $.fn.marquee = function(args) {
//         var that = $(this);
//         var textWidth = that.textWidth(),
//             offset = that.width(),
//             width = offset,
//             css = {
//                 'text-indent' : that.css('text-indent'),
//                 'overflow' : that.css('overflow'),
//                 'white-space' : that.css('white-space')
//                 // 'font-size' : that.css('font-size');
//             },
//             marqueeCss = {
//                 'text-indent' : width,
//                 'overflow' : 'hidden',
//                 'white-space' : 'nowrap'
//             },
//             args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false }, args),
//             i = 0,
//             stop = textWidth*-1,
//             dfd = $.Deferred();
//
//         function go() {
//             if(!that.length) return dfd.reject();
//             if(width == stop) {
//                 i++;
//                 if(i == args.count) {
//                     that.css(css);
//                     return dfd.resolve();
//                 }
//                 if(args.leftToRight) {
//                     width = textWidth*-1;
//                 } else {
//                     width = offset;
//                 }
//             }
//             that.css('text-indent', width + 'px');
//             if(args.leftToRight) {
//                 width++;
//             } else {
//                 width--;
//             }
//             setTimeout(go, args.speed);
//         };
//         if(args.leftToRight) {
//             width = textWidth*-1;
//             width++;
//             stop = offset;
//         } else {
//             width--;
//         }
//         that.css(marqueeCss);
//         go();
//         return dfd.promise();
//     };
// })(jQuery);
//
// $('h6').marquee();
// $("h6").css({"background-color": "white", "font-size": "18px", "margin": "0", "padding": "25px 46px"});
