using Microsoft.AspNetCore.Mvc;
using olegity.Data;


namespace olegity.Contollers
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
            var albums = _epDBContent.Ep.ToList();
            if (albums == null)
            {
                return NotFound("No albums found");
            }
            return Ok(albums);
        }
    }
}

