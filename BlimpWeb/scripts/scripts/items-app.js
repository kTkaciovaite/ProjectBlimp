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
                .otherwise({ redirectTo: '/' });
        }])
        .service('itemsService', ['$resource', ItemsApp.Services.ItemsService])
        .controller('itemsListController', ['$routeParams', 'itemsService', ItemsApp.Controllers.ItemsListController])
        .controller('itemsDetailsController', ['$resource', '$routeParams', '$location', ItemsApp.Controllers.ItemsDetailsController]);
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items-app.js.map