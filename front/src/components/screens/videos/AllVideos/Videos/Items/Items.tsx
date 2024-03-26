import { IVideo } from "@/interfaces/video.interface";
import Item from "./Item";
import { FC } from "react";

interface ItemsProps {
  videos: IVideo[];
  searchText: string;
}

const Items: FC<ItemsProps> = ({ videos, searchText }) => (
  <div className="videos__items">
    {videos.map((video) => {
      const { title } = video;

      const titleLowerCased = title.toLowerCase();
      const searchTextLowerCased = searchText.toLowerCase();

      if (!titleLowerCased.includes(searchTextLowerCased)) {
        return null;
      }
      return <Item key={title} video={video} />;
    })}
  </div>
);

export default Items;
