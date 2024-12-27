import { API_ENDPOINT } from "../utils/constants";
import axios from "axios";

const fetchPokemon = async () => {
    try {
        const response = await axios.get(API_ENDPOINT)
        const data = response.data || [];
        return data.results;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export {fetchPokemon}
  