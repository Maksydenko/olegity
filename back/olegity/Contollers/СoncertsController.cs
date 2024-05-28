using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;
using System;
using System.Linq;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConcertsController : ControllerBase
    {
        private readonly ConcertsDBContent _concertsDBContent;

        public ConcertsController(ConcertsDBContent concertsDBContent)
        {
            _concertsDBContent = concertsDBContent;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            IQueryable<Сoncerts> concertsQuery; 
            
            
            concertsQuery = _concertsDBContent.Сoncerts;

            var concertsWithDetails = concertsQuery
                .Select(c => new Сoncerts
                {
                    ID = c.ID,
                    img = c.img,
                })
                .ToList();

            return Ok(concertsWithDetails);
        }
    }
}
