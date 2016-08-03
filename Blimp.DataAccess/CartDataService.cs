using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using Blimb.Domain;

namespace Blimp.DataAccess
{
    public class CartDataService
    {
        public List<Cart> GetAll()
        {
            using (var context = new BlimpContext())
            {
                return context.Cart.ToList();
            }
        }

        public void Add(Cart cartItem)
        {
            using (var context = new BlimpContext())
            {
                context.Cart.AddOrUpdate(cartItem);
                context.SaveChanges();
            }
        }
    }
}
