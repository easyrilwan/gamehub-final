import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f5ec128f3f794204909d41e9802029bc",
  },
});
