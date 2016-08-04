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
            context.Database.ExecuteSqlCommand(TransactionalBehavior.DoNotEnsureTransaction,
                string.Format("ALTER DATABASE [{0}] SET SINGLE_USER WITH ROLLBACK IMMEDIATE", context.Database.Connection.Database));

            base.InitializeDatabase(context);
        }

        protected override void Seed(BlimpContext context)
        {
            var item = new List<Item>
            {
                new Item() { Name = "Bionic Arm RX50C", DateUpDated = DateTime.Now, Price = 10099.99, Image = "/Images/bionic-arm1.jpg" },
                new Item() { Name = "Bionic Arm 3000", DateUpDated = DateTime.Now, Price = 24999.99, Image = "/Images/bionic-arm2.jpg" },
                new Item() { Name = "Bionic Leg X550", DateUpDated = DateTime.Now, Price = 34999.99, Image = "/Images/bionic-leg1.jpg" },
                new Item() { Name = "Bionic Leg X550L", DateUpDated = DateTime.Now, Price = 36999.99, Image = "/Images/bionic-leg2.jpg" },
                new Item() { Name = "Bionic Leg X550C", DateUpDated = DateTime.Now, Price = 39999.99, Image = "/Images/bionic-leg3.jpg" },
                new Item() { Name = "Bionic Arm RX50C", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm1.jpg" },
                new Item() { Name = "Bionic Arm 3000", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm2.jpg" },
                new Item() { Name = "Bionic Leg X550", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg1.jpg" },
                new Item() { Name = "Bionic Leg X550L", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg2.jpg" },
                new Item() { Name = "Bionic Leg X550C", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg3.jpg" },
                new Item() { Name = "Bionic Arm RX50C", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm1.jpg" },
                new Item() { Name = "Bionic Arm 3000", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-arm2.jpg" },
                new Item() { Name = "Bionic Leg X550", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg1.jpg" },
                new Item() { Name = "Bionic Leg X550L", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg2.jpg" },
                new Item() { Name = "Bionic Leg X550C", DateUpDated = DateTime.Now, Price = 1199.99, Image = "/Images/bionic-leg3.jpg" }
            };

            item.ForEach(s => context.Item.AddOrUpdate(s));
            context.SaveChanges();

            var cart = new List<Cart>
            {
                new Cart() { Name = item[1].Name, Price = item[1].Price, Quantity = 2 }
            };

            cart.ForEach(s => context.Cart.AddOrUpdate(s));
            context.SaveChanges();
        }
    }
}