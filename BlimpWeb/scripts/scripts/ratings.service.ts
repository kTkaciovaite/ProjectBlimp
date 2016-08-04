module ItemsApp.Services {

    export class RatingsService {
        private itemsRepository: any;

        constructor(private $resource) {
            this.itemsRepository = this.$resource('/api/ratingsapi');
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