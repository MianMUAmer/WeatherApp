'use strict'
// var city = "Lahore";
// var c = (city != "") ? city : "London"
angular.
    module('myApp.view1').
    component('mainPage', {
        templateUrl: 'view1/view1.html',
        controller: ['$http','$routeParams', function callMainData($http,$routeParams){
            var c = $routeParams.city;
            var self = this;
            $http.get("https://api.openweathermap.org/data/2.5/weather?q=" + c + "&appid=3c5d018306c23b65fdc862470b8403d3")
                .then(function(response){
                    self.list = response;
                    console.log(self.list);
                });
        }]
    });