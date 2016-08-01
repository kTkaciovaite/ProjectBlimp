module ItemsApp.Services {

    export class ItemsService {
        private itemsRepository: any;

        constructor(private $resource) {
            this.itemsRepository = this.$resource('/api/itemsapi');
        }
    }
}