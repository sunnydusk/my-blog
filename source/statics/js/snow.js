// "use strict";
// !function () {
//     var e, t = 100, i = 150, n = "255, 255, 255", o = 2, a = .5, d = .3, r = .5, s = !0,
//         l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
//             window.setTimeout(e, 1e3 / 60)
//         };
//     window.requestAnimationFrame = l;
//     var h = document.getElementById("snow"), w = h.getContext("2d"), m = t, v = -100, c = -100, u = [];
//     h.width = window.innerWidth, h.height = window.innerHeight;
//     var f = function p() {
//         if (s) {
//             w.clearRect(0, 0, h.width, h.height);
//             for (var e = i, t = 0; t < m; t++) {
//                 var o = u[t], a = v, d = c, r = o.x, f = o.y, M = Math.sqrt((a - r) * (a - r) + (d - f) * (d - f));
//                 if (M < e) {
//                     var y = (a - r) / M, b = (d - f) / M, Y = e / (M * M) / 2;
//                     o.velX -= Y * y, o.velY -= Y * b
//                 } else o.velX *= .98, o.velY < o.speed && o.speed - o.velY > .01 && (o.velY += .01 * (o.speed - o.velY)), o.velX += Math.cos(o.step += .05) * o.stepSize;
//                 w.fillStyle = "rgba(" + n + ", " + o.opacity + ")", o.y += o.velY, o.x += o.velX, (o.y >= h.height || o.y <= 0) && g(o), (o.x >= h.width || o.x <= 0) && g(o), w.beginPath(), w.arc(o.x, o.y, o.size, 0, 2 * Math.PI), w.fill()
//             }
//             l(p)
//         }
//     }, g = function (e) {
//         e.x = Math.floor(Math.random() * h.width), e.y = 0, e.size = 3 * Math.random() + 2, e.speed = 1 * Math.random() + .5, e.velY = e.speed, e.velX = 0, e.opacity = .5 * Math.random() + .3
//     }, M = function () {
//         for (var e = 0; e < m; e++) {
//             var t = Math.floor(Math.random() * h.width), i = Math.floor(Math.random() * h.height),
//                 n = 3 * Math.random() + o, s = 1 * Math.random() + a, l = .5 * Math.random() + d;
//             u.push({
//                 speed: s,
//                 velX: 0,
//                 velY: s,
//                 x: t,
//                 y: i,
//                 size: n,
//                 stepSize: Math.random() / 30 * r,
//                 step: 0,
//                 angle: 180,
//                 opacity: l
//             })
//         }
//         f()
//     };
//     document.addEventListener("mousemove", (function (e) {
//         v = e.clientX, c = e.clientY
//     })), window.addEventListener("resize", (function () {
//         h.width = window.innerWidth, h.height = window.innerHeight
//     })), null === (e = document.getElementById("snow-switch")) || void 0 === e || e.addEventListener("click", (function () {
//         s ? (setTimeout((function () {
//             s = !1
//         }), 600), localStorage.setItem("kr-disable-snow", !0), h.classList.add("disabled")) : (s = !0, localStorage.removeItem("kr-disable-snow"), h.classList.remove("disabled"), M())
//     })), function () {
//         var e;
//         if (null !== localStorage.getItem("kr-disable-snow") || !1 === (null === (e = window.kr) || void 0 === e ? void 0 : e.notMobile)) return s = !1, void h.classList.add("disabled");
//         M()
//     }()
// }();
// //# sourceMappingURL=../maps/snow.min.js.map
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    // 移动端不显示
}
else {
    (function($){
        $.fn.snow = function(options){
            var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
                documentHeight 	= $(document).height(),
                documentWidth	= $(document).width(),
                defaults = {
                    minSize		: 10,
                    maxSize		: 20,
                    newOn		: 1000,
                    flakeColor	: "#FFFFFF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
                },
                options	= $.extend({}, defaults, options);
            var interval= setInterval( function(){
                var startPositionLeft = Math.random() * documentWidth - 100,
                    startOpacity = 0.5 + Math.random(),
                    sizeFlake = options.minSize + Math.random() * options.maxSize,
                    endPositionTop = documentHeight - 200,
                    endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                    durationFall = documentHeight * 10 + Math.random() * 5000;
                $flake.clone().appendTo('body').css({
                    left: startPositionLeft,
                    opacity: startOpacity,
                    'font-size': sizeFlake,
                    color: options.flakeColor
                }).animate({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.2
                },durationFall,'linear',function(){
                    $(this).remove()
                });
            }, options.newOn);
        };
    })(jQuery);
    $(function(){
        $.fn.snow({
            minSize: 5, 	// 定义雪花最小尺寸
            maxSize: 20,	// 定义雪花最大尺寸
            newOn: 200  	// 定义密集程度，数字越小越密集
        });
    });
}
