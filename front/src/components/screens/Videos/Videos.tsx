import { FC } from "react";

import AllVideos from "@/components/screens/videos/AllVideos/AllVideos";

interface VideosProps {}

const Videos: FC<VideosProps> = () => (
  <main className="videos-page">
    <AllVideos className="videos__all-videos" />
  </main>
);

export default Videos;
