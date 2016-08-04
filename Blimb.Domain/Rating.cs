using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blimb.Domain
{
    public class Rating
    {
        public int Id { get; set; }
        public int ItemId { get; set; }
        public int Stars { get; set; }
        public string Name { get; set; }
        public string Review { get; set; }
    }
}
