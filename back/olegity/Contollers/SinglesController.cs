using Microsoft.AspNetCore.Mvc;
using olegity.Data.Interfaces;
using olegity.Data.Models;
using olegity.ViewPages;

namespace olegity.Contollers
{
    [EnableCors("MyPolicy")]
    public class SinglesController:Controller
    {
        private readonly IAllSingles _allSingles;
        private readonly ISinglesPages _allPages;

        public SinglesController(IAllSingles iAllSingles,ISinglesPages isinglesPages)
        {
            _allSingles = iAllSingles;
            _allPages = isinglesPages;
        }
        public ViewResult List(string page)
        {
            ViewBag.title = "Singles";
            SingelsListViewPages obj = new SingelsListViewPages();
            obj.AllSingles = _allSingles.Singles;
            obj.SinggPage = "Singles";
            return View(obj);
        }

        public ViewResult List1(string page)
        {
            ViewBag.title = "Singles";
            SingelsListViewPages obj = new SingelsListViewPages();
            obj.AllSingles = _allSingles.Singles;
            obj.SinggPage = "Singles";
            return View(obj);
        }


    }
}
