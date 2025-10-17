import { useParams } from "react-router-dom";

import data from "./detailsdata.json";
import translate from "translate";
import "./app.css";
translate.engine = "google";
translate.key = process.env.DEEPL_KEY;

const Info = () => {
  let { searchValue } = useParams();
  if (!data[searchValue]) {
    return <div>No data found for {searchValue}</div>;
  }

  const translater = async () => {
    RegExp();
    const regexPattern = /[A-Za-z,\-\/.\[\]\(\)؛"]/g;

    const container = document.querySelector(".data");

    const button = document.getElementById("translaterButton");

    const res = container.innerText;

    console.log(res);

    const text = await translate(res, "ur");

    button.remove();

    const translated = text.replace(regexPattern, "");

    container.innerText = translated;
    document.body.className = "noto-nastaliq-urdu-translation";
  };

  return (
    <div>
      <button onClick={translater} id="translaterButton">
        translate
      </button>
      <button
        onClick={() => {
                    window.location = "http://localhost:3000/api/myInventory/home/search";

        }}
      >
        home
      </button>

      <div className="data">
        <h2>Details for {searchValue}</h2>
        <ul>
          {Object.keys(data[searchValue].symptoms).map((key) => (
            <li key={key}>
              <div>
                <h2>{key}</h2>
              </div>
              {data[searchValue].symptoms[key]},{data[searchValue][key]}
            </li>
          ))}
          {Object.keys(data[searchValue]).map(
            (key) =>
              key !== "symptoms" && (
                <li key={key}>
                  <h2>{key}</h2>

                  {data[searchValue][key]}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};
export default Info;
