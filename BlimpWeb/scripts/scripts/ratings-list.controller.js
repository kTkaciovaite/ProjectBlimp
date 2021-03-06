var ItemsApp;
(function (ItemsApp) {
    var Controllers;
    (function (Controllers) {
        var RatingsListController = (function () {
            function RatingsListController($routeParams, ratingsService) {
                this.$routeParams = $routeParams;
                this.ratingsService = ratingsService;
                this.getRatings();
            }
            RatingsListController.prototype.getRatings = function () {
                var _this = this;
                this.ratingsService.getAll(function (result) {
                    _this.ratings = result;
                });
            };
            RatingsListController.prototype.save = function () {
                this.ratingsService.submit(this.review);
            };
            return RatingsListController;
        }());
        Controllers.RatingsListController = RatingsListController;
    })(Controllers = ItemsApp.Controllers || (ItemsApp.Controllers = {}));
})(ItemsApp || (ItemsApp = {}));
//# sourceMappingURL=ratings-list.controller.js.map