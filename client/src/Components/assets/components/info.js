import { useParams } from "react-router-dom";
import data from "./detailsdata.json";
const Info = () => {
  let params = useParams();
  let searchValue = params.searchValue;

  return (
    (<h1>{searchValue.replace(/[\n\r]+/g, " ")}</h1>),
    data["ABIES-N"].description
  );
};
export default Info;
