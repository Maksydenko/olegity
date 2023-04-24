import Switch from "./Switch";

const Switches = ({ languages, onClick }) =>
  languages.map((language, index) => (
    <Switch key={index} language={language} onClick={onClick} />
  ));

export default Switches;
