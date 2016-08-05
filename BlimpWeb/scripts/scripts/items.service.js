var ItemsApp;
(function (ItemsApp) {
    var Services;
    (function (Services) {
        var ItemsService = (function () {
            function ItemsService($resource) {
                this.$resource = $resource;
                this.itemsRepository = this.$resource('/api/itemsapi');
            }
            ItemsService.prototype.getItem = function (id) {
                return this.itemsRepository.get({ id: id });
            };
            ItemsService.prototype.getAll = function (onSuccess, onFailure) {
                this.itemsRepository.query(null, function (result) {
                    if (typeof onSuccess === 'function') {
                        onSuccess(result);
                    }
                }, function (result) {
                    if (typeof onFailure === 'function') {
                        onFailure(result);
                    }
                });
            };
            ItemsService.prototype.addItem = function (item) {
                this.itemsRepository.save(item);
            };
            return ItemsService;
        }());
        Services.ItemsService = ItemsService;
    })(Services = ItemsApp.Services || (ItemsApp.Services = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items.service.js.map