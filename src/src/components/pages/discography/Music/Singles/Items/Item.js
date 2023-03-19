import MusicCard from "@common/MusicCard/MusicCard";
import ListenOn from "@components/pages/discography/Music/ListenOn/ListenOn";

function Item(props) {
  const { single } = props;

  return (
    <div className="singles__item">
      <MusicCard className="singles" track={single} />
      <ListenOn className="singles" links={single.links} />
    </div>
  );
}

export default Item;
