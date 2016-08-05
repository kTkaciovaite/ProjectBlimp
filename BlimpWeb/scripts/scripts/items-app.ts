module ItemsApp {
    angular.module('itemsApp', ['ngRoute', 'ngResource', 'ui.bootstrap'])
        .config(['$locationProvider', '$routeProvider',
            ($locationProvider: angular.ILocationProvider,
                $routeProvider: angular.route.IRouteProvider) => {

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
                    .when('/Items/:id/', {
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
        .service('itemsService', ['$resource', Services.ItemsService])
        .service('cartService', ['$resource', Services.CartService])
        .service('ratingsService', ['$resource', Services.RatingsService])
        .controller('itemsListController', ['$routeParams', 'itemsService', Controllers.ItemsListController])
        .controller('itemsDetailsController', ['$resource', '$routeParams', '$location', 'itemsService', 'ratingsService', Controllers.ItemsDetailsController])
        .controller('cartListController', ['$routeParams', 'cartService', Controllers.CartListController])
        .controller('ratingsListController', ['$routeParams', 'ratingsService', Controllers.RatingsListController])
        .controller('itemRatingController', $scope => {
            $scope.rate = 5;
            $scope.max = 5;
            $scope.isReadonly = false;

            $scope.hoveringOver = value => {
                $scope.overStar = value;
                $scope.percent = 100 * (value / $scope.max);
            };
        });
}