import MusicCard from "@common/MusicCard/MusicCard";
import ListenOn from "../../ListenOn/ListenOn";

const Item = ({ single }) => (
  <div className="singles__item">
    <MusicCard className="singles" track={single} />
    <ListenOn className="singles" links={single.links} />
  </div>
);

export default Item;
