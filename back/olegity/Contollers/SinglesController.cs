using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;
using System.Linq;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SinglesController : ControllerBase
    {
        private readonly AppDBContent _appDBContent;

        public SinglesController(AppDBContent appDBContent)
        {
            _appDBContent = appDBContent;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            IQueryable<Single_Song> singlesQuery;

            if (pageID == 0)
            {
                singlesQuery = _appDBContent.Single_Songs;
            }
            else
            {
                singlesQuery = _appDBContent.Single_Songs.Where(s => s.pageID == pageID);
            }

            var singles = singlesQuery
                .Select(s => new
                {
                    s.ID,
                    s.year,
                    s.title,
                    s.img,
                    s.artist,
                    s.genre,
                    s.spotify,
                    s.appleMusic,
                    s.youtubeMusic,
                    s.deezer,
                    s.pageID
                })
                .ToList();

            if (singles == null || !singles.Any())
            {
                return NotFound("No singles found");
            }

            return Ok(singles);
        }
    }
}
