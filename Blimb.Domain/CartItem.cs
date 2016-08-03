namespace Blimb.Domain
{
    public class CartItem : Item
    {
        public int CartId { get; set; }
        public virtual Item Item { get; set; }
        public int Quantity { get; set; }
    }
}
