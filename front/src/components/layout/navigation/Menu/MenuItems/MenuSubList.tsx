import { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Dropdown from "@/components/base/Dropdown/Dropdown";
import RcCollapse from "@/components/base/RcCollapse/RcCollapse";

import { INavLinkWithSubLinks } from "@/interfaces/link.interface";

interface MenuSubListProps {
  link: INavLinkWithSubLinks;
  active?: boolean;
  breakpoint: boolean;
  onClick?: () => void;
}

const MenuSubList: FC<MenuSubListProps> = ({
  link,
  active,
  breakpoint,
  onClick,
}) => {
  const { label, subLinks } = link;
  const value = link?.value;

  const { t } = useTranslation("common");

  const subLinkItems = subLinks.map((subLink) => {
    const { label: subLinkLabel, value: subLinkValue } = subLink;
    const Tag = value ? Link : "span";

    return (
      <Tag
        key={subLinkLabel}
        href={subLinkValue}
        {...(value && {
          onClick,
        })}
      >
        {t(subLinkLabel)}
      </Tag>
    );
  });

  if (breakpoint) {
    const HeaderTag = value ? "a" : "span";

    const header = (
      <HeaderTag
        {...(value && {
          href: value,
        })}
      >
        {t(label)}
      </HeaderTag>
    );

    const panels = [
      {
        key: label,
        header,
        content: subLinkItems,
      },
    ];

    return (
      <li
        className={clsx(
          "menu__item menu__item_sub-list",
          value && "menu__item_link",
          active && "menu__item_active"
        )}
      >
        <RcCollapse
          className="menu__rc-collapse"
          reverse
          panels={panels}
          expandIcon={() => {
            return <span className="menu__arrow _icon-arrow-top"></span>;
          }}
          collapsible={value ? "icon" : "header"}
        />
      </li>
    );
  }

  return (
    <Dropdown
      as="li"
      className={clsx(
        "menu__item",
        value && "menu__item_link",
        active && "menu__item_active",
        "menu__dropdown"
      )}
      items={subLinkItems}
      value={value}
      icon={<span className="menu__arrow _icon-arrow-top"></span>}
    >
      {t(label)}
    </Dropdown>
  );
};

export default MenuSubList;
