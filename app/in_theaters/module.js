/*
 * @Author: Administrator
 * @Date:   2016-12-12 19:43:50
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-12 19:58:13
 */

(function(angular) {

    angular.module('movecat-inTheaters', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: './in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }]).controller('InTheatersController', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: './in_theaters/movie.json'
        }).then(function(response) {
            console.log(response);
            $scope.movieData = response.data;
        }, function(response) {});
    }])

})(angular)
