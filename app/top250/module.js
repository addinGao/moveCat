/*
 * @Author: Administrator
 * @Date:   2016-12-12 19:43:50
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-12 20:11:04
 */

(function(angular) {

    angular.module('movecat-top250'
, ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: './top250/view.html',
            controller: 'top250Controller'
        });
    }]).controller('top250Controller', ['$scope', '$http', function($scope, $http) {
        $http({
            method: 'GET',
            url: './top250/movie.json'
        }).then(function(response) {
            console.log(response);
            $scope.movieData = response.data;
        }, function(response) {});
    }])

})(angular)
