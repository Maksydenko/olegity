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
  const { value, subLinks } = link;
  const path = link?.path;

  if (breakpoint) {
    const Tag = path ? "a" : "span";

    const header = (
      <Tag
        className="menu__link"
        {...(path && {
          href: path,
        })}
      >
        {value}
      </Tag>
    );

    const content = subLinks.map((subLink) => {
      const { value: subLinkValue } = subLink;

      return (
        <Tag
          key={subLinkValue}
          className="menu__link menu__link_sub-list"
          {...(path && {
            href: path,
            onClick,
          })}
        >
          {subLinkValue}
        </Tag>
      );
    });

    const panels = [
      {
        key: value,
        header,
        content,
      },
    ];

    return (
      <li
        className={clsx(
          "menu__item menu__item_sub-list",
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
          collapsible={active ? "disabled" : path ? "icon" : "header"}
        />
      </li>
    );
  }

  return (
    <Dropdown
      as="li"
      className={clsx(
        "menu__item",
        path && "menu__item_link",
        active && "menu__item_active",
        "menu__dropdown"
      )}
      items={subLinks}
      path={path}
      disabled={active}
      icon={<span className="menu__arrow _icon-arrow-top"></span>}
      onClick={onClick}
    >
      {value}
    </Dropdown>
  );
};

export default SubList;
