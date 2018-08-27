var app = angular.module('main',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: './components/home.html',
        controller: 'homectrl'
    }).when('/login',{
        templateUrl: './components/login.html',
        controller:'loginctrl'
    }).otherwise({
        template:'404' 
    })
});

app.controller('homectrl',function($scope, $location ){
    $scope.goToLogin = function() {
        $location.path('/login');
    };
    $scope.register= function(){
        $location.path('/register');

    };
});

app.controller('loginctrl', function($scope){
    $scope.login= function(){
        var username = $scope.username;
        var password = $scope.password;
    }

});