/**
 * Created by Yao on 27/2/2017.
 */
angular.module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/', {
        controller:'MainCtrl',
        templateUrl:'/App/templates/home.html'
    })
        .when('/content ', {
            controller:'MainCtrl',
            templateUrl:'/App/templates/content.html'
        })
        .otherwise({
        templateUrl:'/App/templates/'
    })
}]);
