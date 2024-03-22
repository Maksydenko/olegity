import { FC } from "react";
import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";

interface SocialNetworksItemProps {
  link: ILink;
}

const SocialNetworksItem: FC<SocialNetworksItemProps> = ({
  link: { icon, label, value },
}) => {
  return (
    <li className="social-networks__item">
      <a
        className={clsx("social-networks__link", `_icon-${icon}`)}
        href={value}
        target="_blank"
        rel="noReferrer"
      >
        {label}
      </a>
    </li>
  );
};

export default SocialNetworksItem;
