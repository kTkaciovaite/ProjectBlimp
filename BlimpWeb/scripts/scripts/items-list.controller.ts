module ItemsApp.Controllers {

    export class ItemsListController {
        constructor(private $resource: angular.resource.IResourceService) {
            this.getItems();
        }

        public items: any;

        public getItems() {
            var itemsResource = this.$resource('/api/itemsapi/');
            this.items = itemsResource.query();
        }
    }
}