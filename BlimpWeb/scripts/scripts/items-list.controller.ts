module ItemsApp.Controllers {

    export class ItemsListController {
        constructor(private $routeParams: any, private itemsService: Services.ItemsService) {
            this.getItems();
        }

        public items: any;

        public getItems() {

            this.itemsService.getAll((result: any) => {
                this.items = result;
            });
        }

        public getItem(id: number) {

            this.itemsService.getItem(id);
        }
    }
}