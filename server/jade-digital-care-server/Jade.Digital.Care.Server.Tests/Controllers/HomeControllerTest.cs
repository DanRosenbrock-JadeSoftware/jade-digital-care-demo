using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Jade.Digital.Care.Server;
using Jade.Digital.Care.Server.Controllers;

namespace Jade.Digital.Care.Server.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("Home Page", result.ViewBag.Title);
        }
    }
}
