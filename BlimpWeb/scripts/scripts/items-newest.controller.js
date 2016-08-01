var ItemsApp;
(function (ItemsApp) {
    var Controllers;
    (function (Controllers) {
        var ItemsNewestController = (function () {
            function ItemsNewestController($resource) {
                this.$resource = $resource;
                this.getItems();
            }
            ItemsNewestController.prototype.getItems = function () {
                var itemsResource = this.$resource('/api/itemsapi/');
                this.items = itemsResource.query();
            };
            return ItemsNewestController;
        }());
        Controllers.ItemsNewestController = ItemsNewestController;
    })(Controllers = ItemsApp.Controllers || (ItemsApp.Controllers = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items-newest.controller.js.map