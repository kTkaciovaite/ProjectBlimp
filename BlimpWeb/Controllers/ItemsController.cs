﻿using System.Web.Mvc;
using Blimp.DataAccess;

namespace BlimpWeb.Controllers
{
    public class ItemsController : Controller
    {
        // GET: Items
        public ActionResult Index()
        {
            var items = new ItemDataService();
            var itemsList = items.GetAll();

            return View(itemsList);
        }

        public ActionResult Home()
        {
            var items = new ItemDataService();
            var itemsList = items.GetAll();

            return View(itemsList);
        }

        public ActionResult Details(int id)
        {
            var items = new ItemDataService();
            var item = items.Get(id);

            return View(item);
        }
    }
}