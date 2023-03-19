import { Component } from "react";

import Item from "./Item";

class Items extends Component {
  render() {
    const { videos, filterText } = this.props;

    const videoItems = videos.map(
      (video, index) =>
        video.title.toLowerCase().includes(filterText.toLowerCase()) && (
          <Item key={index} video={video} />
        )
    );

    return <div className="videos__items">{videoItems}</div>;
  }
}
export default Items;
