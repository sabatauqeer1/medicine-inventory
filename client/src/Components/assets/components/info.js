import { useParams } from "react-router-dom";
import data from "./detailsdata.json";
const Info = () => {
  let params = useParams();
  let searchValue = params.searchValue;
  let med;

  return { searchValue };

  //   data["ABIES-N"].keypoints,
  //   data["ABIES-N"].link,
  //   data["ABIES-N"].long_name,
  //   data["ABIES-N"].relationship,
  //   data["ABIES-N"].symptoms,
  //   data["ABIES-N"].short_name,
};
export default Info;
