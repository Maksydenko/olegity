import { ILink } from "@/interfaces/link.interface";
import clsx from "clsx";
import { FC } from "react";

interface ItemProps {
  link: ILink;
}

const Item: FC<ItemProps> = ({ link: { icon, label, value } }) => {
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

export default Item;
