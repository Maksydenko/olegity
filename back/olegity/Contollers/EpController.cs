using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;
using System.Linq;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EpController : ControllerBase
    {
        private readonly EpDBContent _epDBContent;

        public EpController(EpDBContent epDBContent)
        {
            _epDBContent = epDBContent;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            IQueryable<Ep> epsQuery;

            if (pageID == 0)
            {
                epsQuery = _epDBContent.Ep;
            }
            else
            {
                epsQuery = _epDBContent.Ep.Where(e => e.pageID == pageID);
            }

            var epsWithLinksAndTracks = epsQuery
                .Select(e => new Ep
                {
                    ID = e.ID,
                    slug = e.slug,
                    title = e.title,
                    img = e.img,
                    artist = e.artist,
                    year = e.year,
                    pageID = e.pageID,
                    Links = _epDBContent.LinkEp.Where(l => l.EpId == e.ID).ToList(),
                    TrackList = _epDBContent.TrackListEp.Where(t => t.EpId == e.ID).ToList(),
                    Genre = _epDBContent.GenreEp.Where(g => g.EpId == e.ID).ToList()
                })
                .ToList();

            if (epsWithLinksAndTracks == null || !epsWithLinksAndTracks.Any())
            {
                return NotFound("No EPs found");
            }

            return Ok(epsWithLinksAndTracks);
        }
    }
}
