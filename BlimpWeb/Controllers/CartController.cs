using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Blimp.DataAccess;

namespace BlimpWeb.Controllers
{
    public class CartController : Controller
    {
        // GET: Cart
        public ActionResult Index()
        {
            //var items = new CartDataService();
            //var itemsList = items.GetAll();

            return View(/*itemsList*/);
        }
    }
}