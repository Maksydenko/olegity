// import { useTranslation } from "next-i18next";

import { FC } from "react";
import Items from "./Items/Items";

import { links } from "@/data/links.data";
import clsx from "clsx";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <nav className={clsx(className, "navigation")}>
      <h6 className="navigation__title">{"navigation"}</h6>
      <Items links={links} />
    </nav>
  );
};

export default Navigation;
