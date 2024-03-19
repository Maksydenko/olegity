import { IVideo } from "@/interfaces/video.interface";
import Item from "./Item";
import { FC } from "react";

interface ItemsProps {
  videos: IVideo[];
  filterText: string;
}

const Items: FC<ItemsProps> = ({ videos, filterText }) => (
  <div className="videos__items">
    {videos.map((video) => {
      const { title } = video;

      const titleLowerCased = title.toLowerCase();
      const filterTextLowerCased = filterText.toLowerCase();

      if (!titleLowerCased.includes(filterTextLowerCased)) {
        return null;
      }
      return <Item key={title} video={video} />;
    })}
  </div>
);

export default Items;
