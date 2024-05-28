using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SinglesController : ControllerBase
    {
        private readonly SinglesDBContent _appDBContent;

        public SinglesController(SinglesDBContent appDBContent)
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
                    s.spotify,
                    s.appleMusic,
                    s.youtubeMusic,
                    s.deezer,
                    s.pageID,
                    Translations = _appDBContent.TranslationsSingle.Where(g => g.genreID == s.genreID).ToList()
                })
                .ToList();

            var maxPageID = _appDBContent.Single_Songs.Max(s => s.pageID);

            return Ok(new
            {
                MaxPageID = maxPageID,
                Singles = singles
            });
        }
    }
}
