using Microsoft.AspNetCore.Mvc;
using olegity.Data;
using olegity.Data.Models;
using static System.Collections.Specialized.BitVector32;

namespace olegity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AboutController : ControllerBase
    {
        private readonly AboutDBContent _aboutDBContent;

        public AboutController(AboutDBContent aboutDBContent)
        {
            _aboutDBContent = aboutDBContent;
        }


        [HttpGet("list/{pageID}")]
        public IActionResult List(int pageID)
        {
            IQueryable<AboutSections> aboutsQuery;

            if (pageID == 0)
            {
                aboutsQuery = _aboutDBContent.AboutSections;
            }
            else
            {
                aboutsQuery = _aboutDBContent.AboutSections.Where(a => a.pageID == pageID && a.ID == pageID);
            }

            var aboutsWithDetails = aboutsQuery
                .Select(a => new AboutSections
                {
                    ID = a.ID,
                    pageID = a.pageID,
                    img = a.img,
                    Video = _aboutDBContent.VideoAbout.Where(t => t.sectionID == a.ID).ToList(),
                    Translations = _aboutDBContent.TranslationsAbout.Where(t => t.sectionID == a.ID).ToList()
                })
                .ToList();

            return Ok(aboutsWithDetails);
        }

    }
}
