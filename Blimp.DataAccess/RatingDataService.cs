using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blimb.Domain;

namespace Blimp.DataAccess
{
    public class RatingDataService
    {
        public List<Rating> GetAll()
        {
            using (var context = new BlimpContext())
            {
                return context.Rating.ToList();
            }
        }

        public void Add(Rating rating)
        {
            using (var context = new BlimpContext())
            {
                context.Rating.Add(rating);
                context.SaveChanges();
            }
        }
    }
}
