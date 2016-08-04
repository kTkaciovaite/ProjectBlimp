var ItemsApp;
(function (ItemsApp) {
    var Controllers;
    (function (Controllers) {
        var CartListController = (function () {
            function CartListController($routeParams, cartService) {
                this.$routeParams = $routeParams;
                this.cartService = cartService;
                this.getItems();
            }
            CartListController.prototype.getItems = function () {
                var _this = this;
                this.cartService.getAll(function (result) {
                    _this.items = result;
                });
            };
            CartListController.prototype.removeItem = function (cartItem) {
                this.cartService.removeItem(cartItem);
            };
            return CartListController;
        }());
        Controllers.CartListController = CartListController;
    })(Controllers = ItemsApp.Controllers || (ItemsApp.Controllers = {}));
})(ItemsApp || (ItemsApp = {}));
