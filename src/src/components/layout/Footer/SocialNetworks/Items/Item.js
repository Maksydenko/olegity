const Item = ({ link }) => (
  <li className="social-networks__item">
    <a
      href={link.link}
      target="_blank"
      rel="noreferrer"
      className={`social-networks__link _icon-${link.icon}`}
    >
      {link.value}
    </a>
  </li>
);

export default Item;
