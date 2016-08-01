module ItemsApp {
    angular.module("itemsApp", ["ngResource"])
        .controller("itemsListController", ["$resource", Controllers.ItemsListController]);
}