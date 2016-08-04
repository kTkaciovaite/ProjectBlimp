using System;

namespace Blimb.Domain
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateUpDated { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
    }
}