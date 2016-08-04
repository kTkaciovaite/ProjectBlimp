var ItemsApp;
(function (ItemsApp) {
    angular.module('itemsApp', ['ngRoute', 'ngResource', 'ui.bootstrap'])
        .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                controller: 'itemsListController',
                controllerAs: 'vm',
                templateUrl: 'Template/Home/Home'
            })
                .when('/Items', {
                controller: 'itemsListController',
                controllerAs: 'vm',
                templateUrl: 'Template/Items/Index'
            })
                .when('/Items/:id', {
                controller: 'itemsDetailsController',
                controllerAs: 'vm',
                templateUrl: 'Template/Items/Details'
            })
                .when('/Cart/', {
                controller: 'cartListController',
                controllerAs: 'vm',
                templateUrl: 'Template/Cart/Index'
            })
                .when('/Checkout', {
                templateUrl: 'Template/Cart/Checkout'
            })
                .otherwise({ redirectTo: '/' });
        }])
        .service('itemsService', ['$resource', ItemsApp.Services.ItemsService])
        .service('cartService', ['$resource', ItemsApp.Services.CartService])
        .service('ratingsService', ['$resource', ItemsApp.Services.RatingsService])
        .controller('itemsListController', ['$routeParams', 'itemsService', ItemsApp.Controllers.ItemsListController])
        .controller('itemsDetailsController', ['$resource', '$routeParams', '$location', 'itemsService', ItemsApp.Controllers.ItemsDetailsController])
        .controller('cartListController', ['$routeParams', 'cartService', ItemsApp.Controllers.CartListController])
        .controller('ratingsListController', ['$routeParams', 'ratingsService', ItemsApp.Controllers.RatingsListController])
        .controller('itemRatingController', function ($scope) {
        $scope.rate = 5;
        $scope.max = 5;
        $scope.isReadonly = false;
        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
        $scope.ratingStates = [
            { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
            { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
            { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
            { stateOn: 'glyphicon-heart' },
            { stateOff: 'glyphicon-off' }
        ];
    });
})(ItemsApp || (ItemsApp = {}));
