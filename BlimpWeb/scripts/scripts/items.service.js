var ItemsApp;
(function (ItemsApp) {
    var Services;
    (function (Services) {
        var ItemsService = (function () {
            function ItemsService($resource) {
                this.$resource = $resource;
                this.itemsRepository = this.$resource('/api/itemsapi');
            }
            return ItemsService;
        }());
        Services.ItemsService = ItemsService;
    })(Services = ItemsApp.Services || (ItemsApp.Services = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items.service.js.map