import { API_ENDPOINT } from "../utils/constants";
import axios from "axios";

const getData = async () => {
    try {
        const response = await axios.get(API_ENDPOINT)
        const data = response.data.results || [];
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export {getData}
  