using System.Collections.Generic;
using System.Web.Http;
using Blimb.Domain;
using Blimp.DataAccess;

namespace BlimpWeb.Controllers
{
    public class RatingsApiController : ApiController
    {
        public List<Rating> Get()
        {
            var ratings = new RatingDataService();
            var ratingsList = ratings.GetAll();

            return ratingsList;
        }
    }
}