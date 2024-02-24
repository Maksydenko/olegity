import MusicCard from "@shared/MusicCard/MusicCard";
import ListenOn from "../../ListenOn/ListenOn";

const Item = ({ single }) => {
  const { links } = single;

  return (
    <div className="singles__item">
      <MusicCard className="singles" track={single} />
      <ListenOn className="singles" links={links} />
    </div>
  );
};

export default Item;
