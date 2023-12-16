import "./styling.css";
import satData from "./satData";


const Table = ({ sat }) => {

  const SatRows = sat.map((sat, id) => {
    return (
        <tr key={id}>
          <td>{sat.name}</td>
          <td>{sat.type}</td>
          <td>{sat.launchDate}</td>
          <td>{sat.operational ? "Active" : "Inactive"}</td>
        </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {SatRows}
      </tbody>
    </table>
  );

};

export default Table;