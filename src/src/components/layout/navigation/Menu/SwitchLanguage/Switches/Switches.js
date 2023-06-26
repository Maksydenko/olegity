import Switch from "./Switch";

const Switches = ({ languages, onClick }) =>
  languages.map((language) => (
    <Switch key={language} language={language} onClick={onClick} />
  ));

export default Switches;
