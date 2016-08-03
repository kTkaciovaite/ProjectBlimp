using System.Collections.Generic;
using System.Web.Http;
using Blimb.Domain;
using Blimp.DataAccess;

namespace BlimpWeb.Controllers
{
    public class ItemsApiController : ApiController
    {
        public List<Item> Get()
        {
            var itemsService = new ItemDataService();
            var items = itemsService.GetAll();

            return items;
        }

        public Item Get(int id)
        {
            var itemsService = new ItemDataService();
            var item = itemsService.Get(id);

            return item;
        }

        [HttpPost]
        public Cart Post(Cart cartItem)
        {
            var cartService = new CartDataService();
            cartService.Add(cartItem);

            return cartItem;
        }
    }
}
