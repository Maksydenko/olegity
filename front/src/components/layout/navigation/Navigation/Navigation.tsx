import { FC } from "react";
import clsx from "clsx";
// import { useTranslation } from "next-i18next";

import NavigationList from "./NavigationItems/NavigationList";

import { navLinks } from "@/data/navLinks.data";

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <nav className={clsx(className, "navigation")}>
      <h6 className="navigation__title">{"navigation"}</h6>
      <NavigationList links={navLinks} />
    </nav>
  );
};

export default Navigation;
