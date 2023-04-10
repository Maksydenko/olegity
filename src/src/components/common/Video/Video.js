import useLoader from "@hooks/useLoader";

import Loader from "@base/Loader/Loader";

function Item(props) {
  const { className, video } = props;
  const loading = useLoader("video", "iframe");

  return (
    <div className={`${className}__video video`}>
      {loading && <Loader />}
      <iframe
        src={video.src}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Item;
