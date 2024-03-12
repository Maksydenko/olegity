import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Dropdown from "@/components/base/Dropdown/Dropdown";
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

  return (
    <li className={clsx("menu__item", isActive && "menu__item_active")}>
      <Link
        className="menu__link"
        href={path}
        {...(!isActive && {
          onClick,
        })}
      >
        {value}
      </Link>
    </li>
  );
};

export default Item;
