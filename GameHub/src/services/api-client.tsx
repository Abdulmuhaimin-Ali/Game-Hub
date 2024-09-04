import axios from "axios";

export default axios.create({
  baseURL: "https://rawg.io/api",
  params: {
    key: "f81150d9eb2a489584918c307c9d5f2d",
  },
});
