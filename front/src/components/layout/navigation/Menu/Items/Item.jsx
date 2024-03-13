import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import SubList from "./SubList";

const Item = ({ link, breakpoint, onClick }) => {
  const { value } = link;
  const path = link?.path;
  const subLinks = link?.subLinks;
  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = path === pathname;

  if (subLinks) {
    return (
      <SubList
        link={link}
        active={isActive}
        breakpoint={breakpoint}
        onClick={onClick}
      />
    );
  }

  const Tag = path ? "a" : "span";

  return (
    <li className={clsx("menu__item", isActive && "menu__item_active")}>
      <Tag
        {...(path && {
          href: path,
        })}
        href={path}
        {...(!isActive && {
          onClick,
        })}
      >
        {value}
      </Tag>
    </li>
  );
};

export default Item;
