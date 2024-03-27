"use client";

import Link from "next/link";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import Menu from "@/components/layout/navigation/Menu/Menu";

import { useScrollLock } from "@/hooks/useScrollLock";
import { useWindowListener } from "@/hooks/useWindowListener";

import { Breakpoint } from "@/enums/breakpoint.enum";
import { FC } from "react";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { isScrollLock, setIsScrollLock } = useScrollLock(["main", "footer"]);
  const breakpoint = Breakpoint.Desktop;

  const handleUnlockScroll = () => {
    if (isScrollLock) {
      setIsScrollLock(false);
    }
  };

  const handleUnlockScrollOnBreakpoint = () => {
    const { innerWidth } = window;
    const isMoreBreakpoint = innerWidth > breakpoint;

    if (isMoreBreakpoint && isScrollLock) {
      handleUnlockScroll();
    }
  };
  useWindowListener("resize", handleUnlockScrollOnBreakpoint);

  const handleClick = () => {
    const { innerWidth } = window;
    const isLessBreakpoint = innerWidth < breakpoint;

    if (isLessBreakpoint) {
      setIsScrollLock(!isScrollLock);
    }
  };

  return (
    <header className={clsx(className, "header")}>
      <div className="header__container">
        <Link className="header__logo" href="/" onClick={handleUnlockScroll}>
          <Img
            className="header__img"
            src="/img/logos/olegity.svg"
            alt="Olegity"
            svg
            loader={false}
          />
        </Link>
        <Menu
          className="header__menu"
          breakpoint={breakpoint}
          isScrollLock={isScrollLock}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
