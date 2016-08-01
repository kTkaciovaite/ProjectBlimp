using System.Data.Entity;
using Blimb.Domain;

namespace Blimp.DataAccess
{
    public class BlimpContext : DbContext
    {
        public BlimpContext() : base()
        {
            Database.SetInitializer(new BlimpInitializer());
        }

        public DbSet<Item> Item { get; set; }
    }
}
