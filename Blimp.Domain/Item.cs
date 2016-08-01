using System;

namespace Blimp.Domain
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateUpdated { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
    }
}
