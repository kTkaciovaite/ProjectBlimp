var ItemsApp;
(function (ItemsApp) {
    var Services;
    (function (Services) {
        var RatingsService = (function () {
            function RatingsService($resource) {
                this.$resource = $resource;
                this.itemsRepository = this.$resource('/api/ratingsapi');
            }
            RatingsService.prototype.getAll = function (onSuccess, onFailure) {
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
            return RatingsService;
        }());
        Services.RatingsService = RatingsService;
    })(Services = ItemsApp.Services || (ItemsApp.Services = {}));
})(ItemsApp || (ItemsApp = {}));
