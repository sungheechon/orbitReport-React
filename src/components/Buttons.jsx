import "./styling.css";
import satData from "./satData";


const Buttons = ({ filterByType, setSat, displaySats }) => {

  const Button = displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  });

  return (
    <div className="flex-container">
      {Button}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );

};

export default Buttons;