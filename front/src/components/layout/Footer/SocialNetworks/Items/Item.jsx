import clsx from "clsx";

const Item = ({ link: { path, icon, value } }) => {
  return (
    <li className="social-networks__item">
      <a
        className={clsx("social-networks__link", `_icon-${icon}`)}
        href={path}
        target="_blank"
        rel="noReferrer"
      >
        {value}
      </a>
    </li>
  );
};

export default Item;
