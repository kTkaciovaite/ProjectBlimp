var ItemsApp;
(function (ItemsApp) {
    var Directives;
    (function (Directives) {
        function itemRatingDirective() {
            return {
                restrict: 'AE',
                scope: { rate: '=' },
                link: function (scope, element, attributes) {
                }
            };
        }
        Directives.itemRatingDirective = itemRatingDirective;
    })(Directives = ItemsApp.Directives || (ItemsApp.Directives = {}));
})(ItemsApp || (ItemsApp = {}));
