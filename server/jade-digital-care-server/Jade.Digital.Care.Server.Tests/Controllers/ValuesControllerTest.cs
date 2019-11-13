using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Jade.Digital.Care.Server;
using Jade.Digital.Care.Server.Controllers;

namespace Jade.Digital.Care.Server.Tests.Controllers
{
    [TestClass]
    public class ValuesControllerTest
    {
        [TestMethod]
        public void GetSingleTeam()
        {
            // Arrange
            TeamsController controller = new TeamsController();

            // Act
            IEnumerable<string> result = controller.GetSingleTeam();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(1, result.Count());
            Assert.AreEqual("Team1", result.ElementAt(0));

        }

        [TestMethod]
        public void GetMultipleTeams()
        {
            // Arrange
            TeamsController controller = new TeamsController();

            // Act
            IEnumerable<string> result = controller.GetMultipleTeams();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Count());
            Assert.AreEqual("Team2", result.ElementAt(0));
            Assert.AreEqual("Team3", result.ElementAt(1));

        }
    }
}
