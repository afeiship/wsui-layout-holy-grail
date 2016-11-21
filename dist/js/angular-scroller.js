(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxScroller', ['$timeout','$window',function ($timeout,$window) {
      return {
        restrict: 'E',
        transclude:true,
        replace:true,
        scope: {
          cssClass: '@?',
          height:'@'
        },
        link:function(scope,elem,attrs,vm){
          var bodyElement = angular.element(document.body);
          var wrapper=document.querySelector('.nx-widget-scroller-wrapper');
          var scroller=document.querySelector('.nx-widget-scroller-bd');
          console.log(scroller,wrapper);
          var startY,deltaY,dragOffset;

          elem.css({
            height:scope.height+'px'
          })

          elem.bind('touchstart',function(ev){
            startY=ev.touches[0].pageY;
            scroller.style.WebkitTransition = 'all 0.3s';
          });

          bodyElement.bind('touchmove',function(ev){
            deltaY=ev.touches[0].pageY - startY;
            dragOffset = deltaY/1;
            scroller.style.WebkitTransform = 'translate3d(0,'+dragOffset+'px'+',0)';
            scroller.style.WebkitTransition = 'all 0';

            ev.preventDefault();
          });

          bodyElement.bind('touchend',function(){
          });


          angular.element(window).bind('scroll',function(ev) {
            console.log('scroll?');
            ev.preventDefault();
          })


          //destroy:
          scope.$on('$destroy', function() {
            elem.unbind('touchstart');
            bodyElement.unbind('touchmove');
            bodyElement.unbind('touchend');
          });
        },
        template: '<div class="nx-widget-scroller-wrapper {{cssClass}}">' +
        '<div class="nx-widget-scroller-bd" ng-transclude></div>'+
        '</div>'
      };

    }]);


})();
