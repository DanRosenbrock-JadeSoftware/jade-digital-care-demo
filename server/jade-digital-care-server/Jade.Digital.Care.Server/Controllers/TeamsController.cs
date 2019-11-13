using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;
using Jade.Digital.Care.Server.Models;

namespace Jade.Digital.Care.Server.Controllers
{
    public class TeamsController : ApiController
    {
        // GET api/values
        [Route("api/single-team")]
        public IEnumerable<string> GetSingleTeam()
        {
            return new string[] { "Team1" };
        }

        [Route("api/multi-team")]
        public IEnumerable<string> GetMultipleTeams()
        {
            return new string[] { "Team2", "Team3" };
        }

        // GET api/values/5
        [Route("api/get-team/{id}")]
        public int GetTeamById(int id)
        {
            return id;
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
