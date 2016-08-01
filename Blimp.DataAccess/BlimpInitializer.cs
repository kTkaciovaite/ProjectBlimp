using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using Blimb.Domain;

namespace Blimp.DataAccess
{
    class BlimpInitializer : DropCreateDatabaseAlways<BlimpContext>
    {
        public override void InitializeDatabase(BlimpContext context)
        {
            context.Database.ExecuteSqlCommand(TransactionalBehavior.DoNotEnsureTransaction
                , string.Format("ALTER DATABASE [{0}] SET SINGLE_USER WITH ROLLBACK IMMEDIATE", context.Database.Connection.Database));

            base.InitializeDatabase(context);
        }

        protected override void Seed(BlimpContext context)
        {
            var item = new List<Item>
            {
                new Item() { Name = "Item number 1", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm1.jpg" },
                new Item() { Name = "Item number 2", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm2.jpg" },
                new Item() { Name = "Item number 3", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg1.jpg" },
                new Item() { Name = "Item number 4", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg2.jpg" },
                new Item() { Name = "Item number 5", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg3.jpg" },
                new Item() { Name = "Item number 6", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm1.jpg" },
                new Item() { Name = "Item number 7", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm2.jpg" },
                new Item() { Name = "Item number 8", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg1.jpg" },
                new Item() { Name = "Item number 9", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg2.jpg" },
                new Item() { Name = "Item number 10", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg3.jpg" }
            };

            item.ForEach(s => context.Item.AddOrUpdate(s));
            context.SaveChanges();
        }
    }
}