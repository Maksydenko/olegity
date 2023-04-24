import Switches from "./Switches/Switches";

const SwitchLanguage = ({ onClick }) => {
  const languages = ["en", "ua"];

  return (
    <div className="menu menu__switch-language">
      <Switches languages={languages} onClick={onClick} />
    </div>
  );
};

export default SwitchLanguage;
