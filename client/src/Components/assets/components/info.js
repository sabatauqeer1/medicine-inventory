import { useParams } from "react-router-dom";
import data from "./detailsdata.json";

const Info = () => {
  let { searchValue } = useParams();

  if (!data[searchValue]) {
    return <div>No data found for {searchValue}</div>;
  }

  return (
    <div>
      <h2>Details for {searchValue}</h2>
      <ul>
        {Object.keys(data[searchValue]).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {JSON.stringify(data[searchValue][key])}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
