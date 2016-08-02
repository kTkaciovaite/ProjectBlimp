var ItemsApp;
(function (ItemsApp) {
    var Controllers;
    (function (Controllers) {
        var ItemsListController = (function () {
            function ItemsListController($routeParams, itemsService) {
                this.$routeParams = $routeParams;
                this.itemsService = itemsService;
                this.getItems();
            }
            ItemsListController.prototype.getItems = function () {
                var _this = this;
                this.itemsService.getAll(function (result) {
                    _this.items = result;
                });
            };
            ItemsListController.prototype.getItem = function (id) {
                this.itemsService.getItem(id);
            };
            return ItemsListController;
        }());
        Controllers.ItemsListController = ItemsListController;
    })(Controllers = ItemsApp.Controllers || (ItemsApp.Controllers = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items-list.controller.js.map