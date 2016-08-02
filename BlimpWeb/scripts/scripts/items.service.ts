module ItemsApp.Services {

    export class ItemsService {
        private itemsRepository: any;

        constructor(private $resource) {
            this.itemsRepository = this.$resource('/api/itemsapi');
        }

        public getItem(id: number) {
            return this.itemsRepository.get({ id: id });
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
    }
}