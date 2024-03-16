import clsx from "clsx";

const Item = ({ link: { icon, label, value } }) => {
  return (
    <li className="social-networks__item">
      <a
        className={clsx("social-networks__link", `_icon-${icon}`)}
        href={value}
        target="_blank"
        rel="noReferrer"
      >
        {label}
      </a>
    </li>
  );
};

export default Item;
