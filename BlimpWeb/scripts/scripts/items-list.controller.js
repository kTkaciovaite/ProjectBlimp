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
            ItemsListController.prototype.init = function (id) {
                this.item = this.itemsService.getItem(id);
            };
            ItemsListController.prototype.addItem = function (id) {
                //debugger;
                this.itemsService.addItem(this.item);
            };
            return ItemsListController;
        }());
        Controllers.ItemsListController = ItemsListController;
    })(Controllers = ItemsApp.Controllers || (ItemsApp.Controllers = {}));
})(ItemsApp || (ItemsApp = {}));
