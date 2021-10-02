using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Diplom2.Models
{
    [Table("SET_STATIONS", Schema = "public")]
    public class Station
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Width { get; set; }
        public string Length { get; set; }
        public string Type { get; set; }
    }
}