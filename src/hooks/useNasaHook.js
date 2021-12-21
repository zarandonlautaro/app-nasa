import axios from "axios";
import { useEffect, useState } from "react";

const useNasaHook = () => {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=s8bh6dmqbCVCrblq2Dbio3HJKu3BUewssxgOGCOa`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [roverSelected, setRoverSelected] = useState("");
  const [cameraSelected, setCameraSelected] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);

  useEffect(() => {
    if (roverSelected) {
      url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverSelected}/photos?api_key=s8bh6dmqbCVCrblq2Dbio3HJKu3BUewssxgOGCOa`;

      if (dateSelected) {
        url += `&earth_date=${dateSelected}`;
      }
      if (cameraSelected) {
        url += `&camera=${cameraSelected}`;
      }
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, roverSelected, dateSelected, cameraSelected]);

  const handleRover = (e) => {
    setLoading(true);
    setRoverSelected(e.target.value);
  };

  const handleCamera = (e) => {
    setLoading(true);
    setCameraSelected(e.target.value);
  };

  const handleDate = (e) => {
    setLoading(true);
    const date = e.target.value;
    const parsedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    setDateSelected(parsedDate);
  };

  return {
    data,
    isLoading: loading,
    handleRover,
    handleCamera,
    handleDate,
    roverSelected,
    dateSelected
  };
};

export default useNasaHook;
