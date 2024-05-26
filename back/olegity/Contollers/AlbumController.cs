using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;
using System.Linq;

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
            var albumsWithLinksAndTracks = _albumsDBContent.Album
                .Where(a => a.pageID == pageID) // Фильтруем альбомы по заданному pageID
                .Select(a => new Album
                {
                    ID = a.ID,
                    slug = a.slug,
                    title = a.title,
                    img = a.img,
                    artist = a.artist,
                    year = a.year,
                    pageID = a.pageID,
                    LinkAlbum = _albumsDBContent.LinkAlbum.Where(l => l.AlbumId == a.ID).ToList(),
                    TrackListAlbum = _albumsDBContent.TrackListAlbum.Where(t => t.AlbumId == a.ID).ToList(),
                    GenreAlbum = _albumsDBContent.GenreAlbum.Where(l => l.AlbumId == a.ID).ToList()
                })
                .ToList();

            if (albumsWithLinksAndTracks == null)
            {
                return NotFound("No albums found");
            }

            return Ok(albumsWithLinksAndTracks);
        }
    }
}
