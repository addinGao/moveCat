/*
 * @Author: Administrator
 * @Date:   2016-12-12 16:54:55
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-12 20:57:02
 */
(function(angular) {
    angular.module('moviecat-home', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/home_page?', {
                templateUrl: './home/homeView.html'
            }).when('/?', {
                templateUrl: './home/homeView.html'
            });
        }]);
	console.log(11)
})(angular)
