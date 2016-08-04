var ItemsApp;
(function (ItemsApp) {
    var Controllers;
    (function (Controllers) {
        var ItemsDetailsController = (function () {
            function ItemsDetailsController($resource, $routeParams, $location, itemsService) {
                this.$resource = $resource;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.itemsService = itemsService;
                this.repository = this.$resource("/api/ItemsApi/:id", { id: "@id" });
                this.item = this.init($routeParams.id);
            }
            ItemsDetailsController.prototype.init = function (id) {
                var _this = this;
                this.repository.get({ id: id }, function (result) {
                    _this.item = result;
                }, function () {
                    _this.$location.path('/Items');
                });
            };
            ItemsDetailsController.prototype.addItem = function (item) {
                this.itemsService.addItem(item);
            };
            return ItemsDetailsController;
        }());
        Controllers.ItemsDetailsController = ItemsDetailsController;
    })(Controllers = ItemsApp.Controllers || (ItemsApp.Controllers = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=items-details.controller.js.map