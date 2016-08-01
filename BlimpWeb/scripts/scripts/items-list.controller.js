var ItemsApp;
(function (ItemsApp) {
    var Controllers;
    (function (Controllers) {
        var ItemsListController = (function () {
            function ItemsListController($resource) {
                this.$resource = $resource;
                this.getItems();
            }
            ItemsListController.prototype.getItems = function () {
                var itemsResource = this.$resource('/api/itemsapi/');
                this.items = itemsResource.query();
            };
            return ItemsListController;
        }());
        Controllers.ItemsListController = ItemsListController;
    })(Controllers = ItemsApp.Controllers || (ItemsApp.Controllers = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items-list.controller.js.map