var ItemsApp;
(function (ItemsApp) {
    angular.module("itemsApp", ["ngResource"])
        .controller("itemsListController", ["$resource", ItemsApp.Controllers.ItemsListController]);
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items-app.js.map