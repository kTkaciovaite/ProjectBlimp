using System.Collections.Generic;
using System.Web.Http;
using Blimb.Domain;
using Blimp.DataAccess;

namespace BlimpWeb.Controllers
{
    public class CartApiController : ApiController
    {
        public List<Cart> Get()
        {
            var cartService = new CartDataService();
            var items = cartService.GetAll();

            return items;
        }
    }
}
