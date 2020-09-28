import axios from "axios";
import { BASE_URL } from "./base";

const FetchRecord = async () => {
  console.log(BASE_URL);
  console.log(BASE_URL + "/records");
  const response = await axios.get(BASE_URL + "/records");

  if (response) {
    return response.data;
  }
  return null;
};

export { FetchRecord };

// <Link to={`/${props.link}`}>{props.text}</Link>
