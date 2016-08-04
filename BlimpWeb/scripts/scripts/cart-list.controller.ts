module ItemsApp.Controllers {

    export class CartListController {
        constructor(private $routeParams: any, private cartService: Services.CartService) {
            this.getItems();
        }

        public items: any;

        public getItems() {
            this.cartService.getAll((result: any) => {
                this.items = result;
            });
        }

        public removeItem(cartItem: any) {
            this.cartService.removeItem(cartItem);
        }
    }
}