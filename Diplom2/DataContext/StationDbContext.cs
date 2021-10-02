using Diplom2.Models;

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Diplom2.DataContext
{
    public class StationDbContext : DbContext
    {
        public StationDbContext() : 
            base(nameOrConnectionString: "StationContext") { }
        public virtual DbSet<Station> StationsList { get; set; }
        public virtual DbSet<User> UserList { get; set; }
    }
}