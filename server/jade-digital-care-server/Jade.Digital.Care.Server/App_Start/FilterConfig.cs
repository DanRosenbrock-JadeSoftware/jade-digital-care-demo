using System.Web;
using System.Web.Mvc;

namespace Jade.Digital.Care.Server
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
