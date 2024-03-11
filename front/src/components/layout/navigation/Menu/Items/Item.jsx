import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import Dropdown from "@/components/base/Dropdown/Dropdown";

const Item = ({ link, onClick }) => {
  const { value } = link;
  const path = link?.path;
  const subLinks = link?.subLinks;
  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = path === pathname;

  if (subLinks) {
    return (
      <Dropdown
        as="li"
        className={clsx(
          "menu__item",
          path && "menu__item_link",
          isActive && "menu__item_active",
          "menu__dropdown"
        )}
        items={subLinks}
        path={path}
        disabled={isActive}
        icon={<span className={clsx("menu__arrow", "_icon-arrow-top")}></span>}
        onClick={onClick}
      >
        {value}
      </Dropdown>
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
