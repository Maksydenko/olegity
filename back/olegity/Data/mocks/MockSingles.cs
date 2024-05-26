using olegity.Data.Interfaces;
using olegity.Data.Models;

namespace olegity.Data.mocks
{
    public class MockSingles : IAllSingles
    {
        public IEnumerable<Single_Song> Singles
        {
            get
            {
                return new List<Single_Song>
                {
                    new Single_Song
                    {
                    title ="Вечная весна (Eternal spring)",
                    img ="/img/singles/vechnaya-vesna.jpg",
                    deezer ="ЛСП (LSP) & DenDerty",
                    genre ="Pop 2023",
                    spotify ="https://open.spotify.com/album/6tmofLXJrQNL2wEzTqc3Jg?si=hpJ9EJIuR-CSDpJ4eIvzGA",
                    appleMusic  ="https://music.apple.com/us/album/%D0%B2%D0%B5%D1%87%D0%BD%D0%B0%D1%8F-%D0%B2%D0%B5%D1%81%D0%BD%D0%B0-single/1682869514",
                    youtubeMusic  ="https://music.youtube.com/playlist?list=OLAK5uy_mf0lN7pIMS3uK_uAVxwok6znmdHMbrCxY",
                    artist  ="https://www.deezer.com/us/album/432424617",
                    }
                };      
            }
        }


        public Single_Song getObject(int singleID)
        {
            throw new NotImplementedException();
        }
    }
}
