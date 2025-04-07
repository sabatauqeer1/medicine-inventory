import { useParams } from "react-router-dom";
import data from "./detailsdata.json";
import translate from "translate";

import { useState } from "react";
translate.engine = "google";
translate.key = process.env.DEEPL_KEY;

const Info = () => {
  const [count1, setcount1] = useState(0);
  let { searchValue } = useParams();
  const counter1 = (e) => {
    e.preventDefault();
    setcount1(count1 + 1);
  };

  if (!data[searchValue]) {
    return <div>No data found for {searchValue}</div>;
  }

  const handleTextTranslate = async () => {
    const data = document.body.innerText;

    const text = await translate(data, "ur");

    document.body.replaceWith(text);
  };

  return (
    <div>
      <button onClick={counter1}>+</button>

      <h2>Details for {searchValue}</h2>
      <ul>
        {Object.keys(data[searchValue].symptoms).map((key) => (
          <li key={key}>
            <div>
              <strong>{key}:</strong>
            </div>
            {JSON.stringify(data[searchValue].symptoms[key])},
            {JSON.stringify(data[searchValue][key])}
          </li>
        ))}
        {Object.keys(data[searchValue]).map(
          (key) =>
            key !== "symptoms" && (
              <li key={key}>
                <strong>{key}:</strong>

                {JSON.stringify(data[searchValue][key])}
              </li>
            )
        )}
      </ul>
      <button onClick={handleTextTranslate}>translate</button>
    </div>
  );
};

export default Info;
