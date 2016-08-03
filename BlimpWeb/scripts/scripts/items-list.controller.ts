module ItemsApp.Controllers {

    export class ItemsListController {
        constructor(private $routeParams: any, private itemsService: Services.ItemsService) {
            this.getItems();
        }

        public items: any;
        public item: any;

        public getItems() {

            this.itemsService.getAll((result: any) => {
                this.items = result;
            });
        }

        public getItem(id: number) {

            this.itemsService.getItem(id);
        }

        public init(id: number) {
            this.item = this.itemsService.getItem(id);
        }

        public addItem(id: number) {
            //debugger;
            this.itemsService.addItem(this.item);
        }
    }
}