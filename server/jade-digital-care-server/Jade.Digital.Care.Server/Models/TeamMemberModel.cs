using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Jade.Digital.Care.Server.Models
{
    public class TeamMemberModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Base64Image { get; set; }

    }

    public class TeamModel
    {
        public int Id { get; set; }
        public int Name { get; set; }
        public TeamMemberModel Members { get; set; }
        public int ProjectId { get; set; }
    }
}