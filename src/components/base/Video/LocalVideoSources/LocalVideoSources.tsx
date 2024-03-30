import { FC } from "react";

import { getType } from "./getType.util";

import { TypeLocalVideo } from "../localVideo.type";

interface LocalVideoSourcesProps {
  src: TypeLocalVideo;
}

const LocalVideoSources: FC<LocalVideoSourcesProps> = ({ src }) => {
  if (Array.isArray(src)) {
    return src.map((item) => (
      <source key={item} src={item} type={getType(item)} />
    ));
  }
  return <source src={src} type={getType(src)} />;
};

export default LocalVideoSources;
