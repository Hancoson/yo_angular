/**
 * Created by jyo on 15-3-17.
 */
angular.module('kaowoApp')
    .directive('imageonload', function() {
    return {
        restrict: 'A',
        scope:{
            showBreath:"=showBreath"
        },
        link: function(scope, element, attrs,rootScope) {
            element.bind('load', function() {
                scope['showBreath']['show']=true;
                scope.$emit('show','yes');
             });
        }
    };
});