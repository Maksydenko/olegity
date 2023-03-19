import { useState, useEffect } from "react";

import Loader from "@base/Loader/Loader";

function Item(props) {
  const [isLoading, setIsLoading] = useState(true);

  function handleVideoLoad() {
    setIsLoading(false);
  }

  useEffect(() => {
    const imgItem = document.querySelector(".video iframe");

    if (imgItem.complete) {
      handleVideoLoad();
    } else {
      imgItem.addEventListener("load", handleVideoLoad);

      return () => {
        imgItem.removeEventListener("load", handleVideoLoad);
      };
    }
  }, [handleVideoLoad]);

  const { className, video } = props;

  return (
    <div className={`${className}__video video`}>
      {isLoading && <Loader />}
      <iframe
        src={video.src}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; videoboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Item;
