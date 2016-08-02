module ItemsApp.Controllers {

    export class ItemsDetailsController {

        public repository = this.$resource("/api/ItemsApi/:id", { id: "@id" });
        public item: any;

        //constructor(private $routeParams: any, private itemsService: Services.ItemsService) { }

        constructor(private $resource: angular.resource.IResourceService, private $routeParams: any, private $location: angular.ILocationService) {
            this.item = this.init($routeParams.id);
        }

        //public init(id: number) {
        //    this.item = this.itemsService.getItem(id);
        //}

        public init(id: number) {
            this.repository.get({ id: id },
                (result) => {
                    this.item = result;
                }, () => {
                    this.$location.path('/Items');
                });
        }

    }
}