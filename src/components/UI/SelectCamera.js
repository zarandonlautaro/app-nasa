import { typeCameras } from "../../config/typeCameras";

const SelectCamera = ({ handleChange, roverSelected }) => (
  <div>
    <label htmlFor="selectCamera">Camera:</label>
    <select name="select" id="selectCamera" onChange={handleChange}>
      <option value="" disabled>
        Select a camera
      </option>
      {typeCameras.map((camera) => {
        if (
          roverSelected === "curiosity" &&
          (camera.value === "PANCAM" || camera.value === "MINITES")
        ) {
          return;
        }
        if (
          (roverSelected === "opportunity" || roverSelected === "spirit") &&
          (camera.value === "MAST" ||
            camera.value === "CHEMCAM" ||
            camera.value === "MAHLI" ||
            camera.value === "MARDI")
        ) {
          return;
        }
        return (
          <option key={camera.value} value={camera.value}>
            {camera.displayName}
          </option>
        );
      })}
    </select>
  </div>
);

export default SelectCamera;
