module ItemsApp {
    angular.module('itemsApp', ['ngRoute', 'ngResource'])
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
                    .otherwise({ redirectTo: '/' });
            }])
        .service('itemsService', ['$resource', Services.ItemsService])
        .controller('itemsListController', ['$routeParams', 'itemsService', Controllers.ItemsListController])
        .controller('itemsDetailsController', ['$resource', '$routeParams', '$location', Controllers.ItemsDetailsController]);
}