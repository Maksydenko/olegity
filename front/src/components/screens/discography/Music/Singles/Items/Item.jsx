import MusicCard from "@/components/shared/MusicCard/MusicCard";
import ListenOn from "@/components/shared/ListenOn/ListenOn";

const Item = ({ single }) => {
  const { links } = single;

  return (
    <div className="singles__item">
      <MusicCard className="singles__music-card" track={single} />
      <ListenOn className="singles" links={links} />
    </div>
  );
};

export default Item;
