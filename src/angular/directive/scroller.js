(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxScroller', ['$timeout',function ($timeout) {
      return {
        restrict: 'E',
        scope: {
          cssClass: '@',
          transclude:true
        },
        link:function(scope,elem,attrs,vm){
          //code goes herer!
        },
        template: '<div class="nx-widget-scroller-wrapper {{cssClass}}">' +
        '<div class="nx-widget-scroller-bd" ng-transclude></div>'+
        '</div>'
      };

    }]);


})();
