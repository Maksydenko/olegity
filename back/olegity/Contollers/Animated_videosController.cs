using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;
using System.Linq;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class animated_videosController : ControllerBase
    {
        private readonly AnimatedDBContent _animatedDBContent;

        public animated_videosController(AnimatedDBContent animatedDBContent)
        {
            _animatedDBContent = animatedDBContent;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            IQueryable<AnimatedClips> clipsQuery;

            if (pageID == 0)
            {
                clipsQuery = _animatedDBContent.AnimatedClips;
            }
            else
            {
                clipsQuery = _animatedDBContent.AnimatedClips.Where(c => c.pageID == pageID);
            }

            var clipsWithDetails = clipsQuery
                .Select(c => new AnimatedClips
                {
                    ID = c.ID,
                    img = c.img,
                    pageID = c.pageID,
                    Video = _animatedDBContent.Animated.Where(g => g.animatedVideoID == c.pageID).ToList()
                })
                .ToList();

            return Ok(clipsWithDetails);
        }
    }
}
