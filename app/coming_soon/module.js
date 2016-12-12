/*
 * @Author: Administrator
 * @Date:   2016-12-12 19:43:50
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-12 20:16:46
 */

(function(angular) {

    angular.module('movecat-conmingSoon', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/coming_soon', {
            templateUrl: './coming_soon/view.html',
            controller: 'conmingSoonController'
        });
    }]).controller('conmingSoonController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: './coming_soon/movie.json'
        }).then(function(response) {
            console.log(response);
            $scope.movieData = response.data;
        }, function(response) {});
    }])

})(angular)
