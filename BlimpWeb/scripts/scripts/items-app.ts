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
        .service('itemsService', ['$resource', Services.ItemsService])
        .service('cartService', ['$resource', Services.CartService])
        .controller('itemsListController', ['$routeParams', 'itemsService', Controllers.ItemsListController])
        .controller('itemsDetailsController', ['$resource', '$routeParams', '$location', 'itemsService', Controllers.ItemsDetailsController])
        .controller('cartListController', ['$routeParams', 'cartService', Controllers.CartListController])
        .controller('itemRatingController', $scope => {
            $scope.rate = 5;
            $scope.max = 5;
            $scope.isReadonly = false;

            $scope.hoveringOver = value => {
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
}