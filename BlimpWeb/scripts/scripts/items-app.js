var ItemsApp;
(function (ItemsApp) {
    angular.module('itemsApp', ['ngRoute', 'ngResource'])
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
                .when('/Cart', {
                controller: 'cartListController',
                controllerAs: 'vm',
                templateUrl: 'Template/Cart/Index'
            })
                .otherwise({ redirectTo: '/' });
        }])
        .service('itemsService', ['$resource', ItemsApp.Services.ItemsService])
        .service('cartService', ['$resource', ItemsApp.Services.CartService])
        .controller('itemsListController', ['$routeParams', 'itemsService', ItemsApp.Controllers.ItemsListController])
        .controller('itemsDetailsController', ['$resource', '$routeParams', '$location', 'itemsService', ItemsApp.Controllers.ItemsDetailsController])
        .controller('cartListController', ['$routeParams', 'cartService', ItemsApp.Controllers.CartListController]);
})(ItemsApp || (ItemsApp = {}));
