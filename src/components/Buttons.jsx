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
    <div>
      {Button}
      <button onClick={ () => setSat={setSat}}>All Orbits</button>
    </div>
  );



};

export default Buttons;