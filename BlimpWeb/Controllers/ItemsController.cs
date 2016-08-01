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
            var itemsList = items.GetAll();

            return View(itemsList);
        }
    }
}