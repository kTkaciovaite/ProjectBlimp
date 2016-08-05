module ItemsApp.Controllers {

    export class RatingsListController {
        constructor(private $routeParams: any, private ratingsService: Services.RatingsService) {
            this.getRatings();
        }

        public ratings: any;
        public review: any;

        public getRatings() {
            this.ratingsService.getAll((result: any) => {
                this.ratings = result;
            });
        }

        public save() {
            this.ratingsService.submit(this.review);
        }
    }
}