import Link from "next/link";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

const Item = ({ link: { value, path } }) => {
  // const { pathname } = useLocation();
  // const { t } = useTranslation();

  // const isActive = path === pathname;

  return (
    <li className="navigation__item">
      <Link
        className={clsx(
          "navigation__link"
          // isActive && "navigation__link_active"
        )}
        href={path}
        // {...(!isActive && {
        // to: path,
        // })}
      >
        {value}
      </Link>
    </li>
  );
};

export default Item;
