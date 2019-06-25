'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1/:city', {
    template: '<main-page></main-page>'
  });
}])

