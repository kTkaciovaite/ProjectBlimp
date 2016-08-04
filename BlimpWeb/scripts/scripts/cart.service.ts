module ItemsApp.Services {

    export class CartService {
        private itemsRepository: any;

        constructor(private $resource) {
            this.itemsRepository = this.$resource('/api/cartapi');
        }

        public getAll(onSuccess?: Function, onFailure?: Function) {
            this.itemsRepository.query(null, (result: any) => {
                if (typeof onSuccess === 'function') {
                    onSuccess(result);
                }
            }, (result: any) => {
                if (typeof onFailure === 'function') {
                    onFailure(result);
                }
            });
        }

        public removeItem(cartItem: any) {
            this.itemsRepository.save(cartItem);
        }
    }
}