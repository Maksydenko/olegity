using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using olegity.Data.Interfaces;
using olegity.Data.Models;
using olegity.ViewPages;
using System.Linq;

namespace olegity.Controllers
{
    [EnableCors("MyPolicy")]
    [ApiController]
    [Route("api/[controller]")]
    public class SinglesController : ControllerBase
    {
        private readonly IAllSingles _allSingles;
        private readonly ISinglesPages _allPages;

        public SinglesController(IAllSingles iAllSingles, ISinglesPages isinglesPages)
        {
            _allSingles = iAllSingles;
            _allPages = isinglesPages;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            var singles = _allSingles.Singles.Where(s => s.pageID == pageID).ToList();
            var response = new SingelsListViewPages
            {
                AllSingles = singles,
                SinggPage = "Singles"
            };

            return Ok(response);
        }
    }
}
