import { FC } from "react";
import { NextSeo, NextSeoProps } from "next-seo";

import { handleMetaTags } from "./handleMetaTags.util";

interface SeoProps extends Omit<NextSeoProps, "additionalMetaTags"> {
  additionalMetaTags?: string[];
}

const Seo: FC<SeoProps> = ({ title, additionalMetaTags, ...props }) => {
  return (
    <NextSeo
      title={title && `${title} | Olegity`}
      defaultTitle="Olegity"
      additionalMetaTags={
        additionalMetaTags && handleMetaTags(additionalMetaTags)
      }
      {...props}
    />
  );
};

export default Seo;
