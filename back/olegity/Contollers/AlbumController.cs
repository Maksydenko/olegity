using Microsoft.AspNetCore.Mvc;
using olegity.Data;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        private readonly AlbumsDBContent _albumsDBContent;

        public AlbumController(AlbumsDBContent albumsDBContent)
        {
            _albumsDBContent = albumsDBContent;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            var albums = _albumsDBContent.Albums.ToList();
            if (albums == null)
            {
                return NotFound("No albums found");
            }
            return Ok(albums);
        }
    }
}
