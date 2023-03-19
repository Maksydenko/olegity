import { useState, useEffect } from "react";

import ImgPicture from "./ImgPicture";
import Loader from "@base/Loader/Loader";

function Img(props) {
  const [isLoading, setIsLoading] = useState(true);

  function handleImgLoad() {
    setIsLoading(false);
  }

  useEffect(() => {
    const imgItem = document.querySelector("[class*='__img'] img");

    if (imgItem.complete) {
      handleImgLoad();
    } else {
      imgItem.addEventListener("load", handleImgLoad);

      return () => {
        imgItem.removeEventListener("load", handleImgLoad);
      };
    }
  }, [handleImgLoad]);

  const { className, img } = props;

  return (
    <div className={`${className}__img`}>
      {isLoading && <Loader />}
      <ImgPicture img={img} />
    </div>
  );
}

export default Img;
