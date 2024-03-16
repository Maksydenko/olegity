import { FC } from "react";
import clsx from "clsx";

import Dropdown from "@/components/base/Dropdown/Dropdown";
import RcCollapse from "@/components/base/RcCollapse/RcCollapse";

import { ILinkWithSubLinks } from "@/interfaces/link.interface";

interface SubListProps {
  link: ILinkWithSubLinks;
  active?: boolean;
  breakpoint: boolean;
  onClick?: () => void;
}

const SubList: FC<SubListProps> = ({ link, active, breakpoint, onClick }) => {
  const { label, subLinks } = link;
  const value = link?.value;

  const subLinkItems = subLinks.map((subLink) => {
    const { label: subLinkLabel } = subLink;
    const Tag = value ? "a" : "span";

    return (
      <Tag
        key={subLinkLabel}
        {...(value && {
          href: value,
          onClick,
        })}
      >
        {subLinkLabel}
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
        {label}
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
          expandIcon={() => (
            <span className="menu__arrow _icon-arrow-top"></span>
          )}
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
      {label}
    </Dropdown>
  );
};

export default SubList;
