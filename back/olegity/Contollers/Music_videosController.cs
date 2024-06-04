using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class music_videos : ControllerBase
    {
        private readonly ClipsDBContent _clipsDBContent;

        public music_videos(ClipsDBContent clipsDBContent)
        {
            _clipsDBContent = clipsDBContent;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            IQueryable<Clips> clipsQuery;

            if (pageID == 0)
            {
                clipsQuery = _clipsDBContent.Clips;
            }
            else
            {
                clipsQuery = _clipsDBContent.Clips.Where(c => c.pageID == pageID);
            }

            var clipsWithDetails = clipsQuery
                .Select(c => new Clips
                {
                    ID = c.ID,
                    img = c.img,
                    pageID = c.pageID,
                    Video= _clipsDBContent.VideoClips.Where(g => g.musicVideoID == c.pageID).ToList()
                })
                .ToList();

            return Ok(clipsWithDetails);
        }
    }
}
