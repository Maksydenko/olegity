import { useLoading } from "@hooks/useLoading";

import Loader from "@common/Loader/Loader";

const Iframe = ({ className, video, styles = true }) => {
  const isLoading = useLoading("video", "iframe");

  return (
    <div className={`${className}__video${styles ? " video" : ""}`}>
      {isLoading && <Loader />}
      <iframe
        src={video.src}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Iframe;
