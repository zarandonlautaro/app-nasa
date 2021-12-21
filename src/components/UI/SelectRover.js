import { typeRovers } from "../../config/typeRovers";

const SelectRover = ({ handleChange }) => (
  <div>
    <label htmlFor="selectRover">Rover:</label>
    <select name="select" id="selectRover" onChange={handleChange}>
      <option value="" hidden>
        Select a rover
      </option>
      {typeRovers.map((rover) => {
        return (
          <option key={rover.value} value={rover.value}>
            {rover.displayName}
          </option>
        );
      })}
    </select>
  </div>
);
export default SelectRover;
