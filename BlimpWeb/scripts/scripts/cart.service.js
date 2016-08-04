var ItemsApp;
(function (ItemsApp) {
    var Services;
    (function (Services) {
        var CartService = (function () {
            function CartService($resource) {
                this.$resource = $resource;
                this.itemsRepository = this.$resource('/api/cartapi');
            }
            CartService.prototype.getAll = function (onSuccess, onFailure) {
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
            CartService.prototype.removeItem = function (cartItem) {
                this.itemsRepository.save(cartItem);
            };
            return CartService;
        }());
        Services.CartService = CartService;
    })(Services = ItemsApp.Services || (ItemsApp.Services = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=cart.service.js.map