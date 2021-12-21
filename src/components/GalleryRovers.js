import { typeCameras } from "../config/typeCameras";
import useNasaHook from "../hooks/useNasaHook";
import DatePicker from "./UI/DatePicker";
import Loader from "./UI/Loader";
import SelectCamera from "./UI/SelectCamera";
import SelectRover from "./UI/SelectRover";

const GalleryRovers = () => {
  const {
    data,
    isLoading,
    roverSelected,
    dateSelected,
    handleRover,
    handleCamera,
    handleDate
  } = useNasaHook();

  const showPhotos = data?.photos?.map((dat) => {
    return <img src={dat.img_src} alt={dat.id} key={dat.id} />;
  });
  const showLatestPhotos = data?.latest_photos?.slice(0, 25).map((dat) => {
    return <img src={dat.img_src} alt={dat.id} key={dat.id} />;
  });
  return (
    <>
      <h1>Viewer NASA</h1>
      <h3>Enjoy</h3>
      <div className="filters__container">
        <SelectRover handleChange={handleRover} />
        <SelectCamera
          handleChange={handleCamera}
          roverSelected={roverSelected}
        />
        <DatePicker handleChange={handleDate} />
      </div>
      <div className="gallery">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {showPhotos}
            {showLatestPhotos}
          </>
        )}
      </div>
    </>
  );
};

export default GalleryRovers;
