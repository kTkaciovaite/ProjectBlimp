using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blimb.Domain
{
    public class Cart : Item
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
    }
}
