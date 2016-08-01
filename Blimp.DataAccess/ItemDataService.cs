﻿using System.Linq;
using Blimb.Domain;

namespace Blimp.DataAccess
{
    public class ItemDataService
    {
        public Item Get(int id)
        {
            using (var context = new BlimpContext())
            {
                return context.Item.FirstOrDefault(a => a.Id == id);
            }
        }
    }
}
