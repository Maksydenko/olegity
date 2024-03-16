"use client";

import Link from "next/link";

import Img from "@/components/base/Img/Img";
import Menu from "@/components/layout/navigation/Menu/Menu";

import { useScrollLock } from "@/hooks/useScrollLock";
import { useWindowListener } from "@/hooks/useWindowListener";

import { Breakpoint } from "@/enums/breakpoint.enum";

const Header = () => {
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

  const img = {
    src: "/img/logos/olegity.svg",
    alt: "Olegity",
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" href="/" onClick={handleUnlockScroll}>
          <Img className="header__img" img={img} svg loader={false} />
        </Link>
        <Menu
          breakpoint={breakpoint}
          isScrollLock={isScrollLock}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
