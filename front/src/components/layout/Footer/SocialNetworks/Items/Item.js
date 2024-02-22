const Item = ({ link: { link, icon, value } }) => (
  <li className="social-networks__item">
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`social-networks__link _icon-${icon}`}
    >
      {value}
    </a>
  </li>
);

export default Item;
