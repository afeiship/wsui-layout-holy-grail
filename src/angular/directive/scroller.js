(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxScrollable', ['$timeout',function ($timeout) {
      return {
        restrict: 'E',
        scope: {
          value: '='
        },
        link:function(scope,elem,attrs,vm){
          //code goes herer!
        },
        template: '<div class="nx-widget-scroller {{cssClass}}">' +
        '</div>'
      };

    }]);


})();
