using System.Web.Mvc;
using System.Web.Routing;

namespace BlimpWeb
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "Template/{controller}/{action}"
            );

            routes.MapRoute(
                "GoToIndex",
                "{*url}",
                new { controller = "Home", action = "Index" }
            );
        }
    }
}
