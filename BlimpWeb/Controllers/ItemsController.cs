using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Blimp.DataAccess;

namespace BlimpWeb.Controllers
{
    public class ItemsController : Controller
    {
        private BlimpContext database = new BlimpContext();
        
        // GET: Items
        public ActionResult Index()
        {
            var items = new ItemDataService();
            var item = items.Get(1);

            return View(item);
        }
    }
}