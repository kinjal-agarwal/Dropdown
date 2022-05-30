import "./App.css";
import Dropdown from "./Dropdown/Countries";
import Countries from "./countryName.json";
import { useEffect, useState } from "react";

const App = () => {
  const [countryData, setCountryData] = useState(null);

  const filterData = () => {
    let filterData = []
    for (const obj in Countries) {
      filterData.push(Countries[obj])
    }
    setCountryData(filterData)
  };
  useEffect(() => {
    filterData();
  }, []);
  return (
    <div>
      <h2 align="center">List of Countries </h2>
      <Dropdown lang={countryData} />
    </div>
  )
}
export default App;