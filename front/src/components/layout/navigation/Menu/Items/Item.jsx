import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

const Item = ({ link: { value, path }, onClick }) => {
  const pathname = usePathname();
  // const { t } = useTranslation();

  const isActive = path === pathname;

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
