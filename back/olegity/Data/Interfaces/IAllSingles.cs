using olegity.Data.Models;
using System.Collections.Generic;


namespace olegity.Data.Interfaces
{
    public interface IAllSingles
    {
        IEnumerable<Single_Song> Singles { get;}
        Single_Song getObject(int singleID);
    }
}
