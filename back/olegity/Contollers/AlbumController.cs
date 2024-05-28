using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;

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
                    Links = _albumDBContent.LinkAlbum.Where(l => l.albumID == a.ID).ToList(),
                    TrackList = _albumDBContent.TrackListAlbum.Where(t => t.albumID == a.ID).ToList(),
                    Translations = _albumDBContent.TranslationsAlbum.Where(g => g.albumID == a.ID).ToList()
                })
                .ToList();

            return Ok(albumsWithTracks);
        }
    }
}
