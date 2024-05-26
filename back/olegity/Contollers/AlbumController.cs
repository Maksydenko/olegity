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
        private readonly AlbumsDBContent _albumDBContent;

        public AlbumController(AlbumsDBContent albumDBContent)
        {
            _albumDBContent = albumDBContent;
        }

        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            IQueryable<Album> albumsQuery;

            if (pageID == 0)
            {
                albumsQuery = _albumDBContent.Album;
            }
            else
            {
                albumsQuery = _albumDBContent.Album.Where(a => a.pageID == pageID);
            }

            var albumsWithTracks = albumsQuery
                .Select(a => new Album
                {
                    ID = a.ID,
                    slug = a.slug,
                    title = a.title,
                    img = a.img,
                    artist = a.artist,
                    year = a.year,
                    pageID = a.pageID,
                    TrackListAlbum = _albumDBContent.TrackListAlbum.Where(t => t.AlbumId == a.ID).ToList(),
                    GenreAlbum = _albumDBContent.GenreAlbum.Where(g => g.AlbumId == a.ID).ToList()
                })
                .ToList();

            if (albumsWithTracks == null || !albumsWithTracks.Any())
            {
                return NotFound("No albums found");
            }

            return Ok(albumsWithTracks);
        }
    }
}
