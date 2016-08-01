using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using Blimb.Domain;

namespace Blimp.DataAccess
{
    class BlimpInitializer : DropCreateDatabaseAlways<BlimpContext>
    {
        protected override void Seed(BlimpContext context)
        {
            var item = new List<Item>
            {
                new Item() { Name = "Item number 1", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 2", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 3", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 4", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 5", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 6", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 7", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 8", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 9", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" },
                new Item() { Name = "Item number 10", DateUpDated = DateTime.Now, Price = 1199.99, Image = "path-to-img" }
            };

            item.ForEach(s => context.Item.AddOrUpdate(s));
            context.SaveChanges();
        }
    }
}