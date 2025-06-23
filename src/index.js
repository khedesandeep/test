import axios from "axios";
import _ from "lodash";

async function fetchData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", { timeout: 5000 });
    const data = _.pick(response.data, ["id", "title"]);
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();
